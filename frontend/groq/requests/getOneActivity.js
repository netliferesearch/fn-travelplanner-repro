import groq from 'groq';
import { clientGROQ } from '../client';

// Get one Activity by language, slug and type
export const getOneActivity = async ({ lang, slug, fallback }) => {
  const query = groq`*[
    _type == "Activity"
    && (locSlug[$lang].current == $slug || locSlug[$fallback].current == $slug)
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    _type,
    title,
    locTitle,
    expired,
    locShortDescription,
    locDescription,
    category->{_id, title, locTitle},
    subCategory->{_id, title, locTitle},
    place->{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
      geopoint,
      region->{
        _id,
      },
      important,
      noLandingPage,
    },
    provider->{
      locTitle,
      locSlug,
    },
    region->{
      _id,
      title,
      locTitle,
      locShortDescription,
      slug,
      locSlug,
    },
    facilities[]{
      facility->{
        _id,
        facilityType,
        locTitle,
        locShortDescription,
        subCategories[]->{_id, title, locTitle, slug, locSlug},
      },
      facilityType,
      facilityText,
      facilityNumber,
      facilityAscent,
      facilityDifficulty,
      facilityDistance,
      facilityDuration,
      facilityFishing,
      facilitySeason,
      facilitySkiing,
      facilitySurface,
      facilityTerrain,
    },
    externalSystems,
    geopoint,
    slug,
    locSlug,
    isEvent,
    event{
      bookingUrl,
      locBookingUrl,
      recurring,
      venueName,
      showings[]{bookingUrl, date, schedule, venueName},
    },
    cloudinaryImages[]{
      mainImage,
      locDescription,
      image{width, height, public_id, context{custom}, url},
    },
    address,
    certificates,
    contactPoint,
    fromPrice,
    openingHours{
      recurring[]{
        _key,
        locTitle,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      },
      exceptions[]{
        _key,
        locTitle,
        dates[]{
          _key,
          date,
          times[]{
            _key,
            fromTime,
            toTime,
            isClosed,
          },
        },
      },
    },
    prices,
  }`;
  return clientGROQ.fetch(query, { lang, slug, fallback: fallback || lang });
};
