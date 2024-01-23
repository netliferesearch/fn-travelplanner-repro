import groq from 'groq';
import { clientGROQ } from '../client';

// Get one entry by language, slug and type
export const getOneDayTrip = async ({ lang, slug }) => {
  const fallback = lang === 'de' ? 'en' : lang;

  const query = groq`*[
    _type == "DayTrip"
    && (locSlug[$lang].current == $slug || locSlug[$fallback].current == $slug )
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    _type,
    locTitle,
    locSlug,
    locShortDescription,
    filterActivityLevel,
    filterDuration,
    image {
      public_id,
      context
    },
    dayTripPlace->{
      locTitle,
      place->{
        _id,
        locSlug,
        locTitle,
        geopoint,
        region->{_id},
      },
    },
    stops[]{
      geopoint,
      locTitle,
      locShortDescription,
      image {
        public_id,
        locDescription,
        context
      },
      locSlug,
      product->{
        _id,
        _type,
        locTitle,
        locSlug,
        locShortDescription,
        geopoint,
        openingHours,
        "bookingUrl": contactPoint.locBookingUrl,
        "mainImagePublicId": cloudinaryImages[][0].image.public_id,
        "mainImageCredit": cloudinaryImages[][0].image.context.custom.credit,
        "mainImageCaption": cloudinaryImages[][0].image.locDescription{no,de,en},
        "mainImageAlt": cloudinaryImages[][0].image.context.custom.altText,
      }
    }
  }`;
  return clientGROQ.fetch(query, { lang, slug, fallback });
};
