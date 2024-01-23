import groq from 'groq';
import { clientGROQ } from '../client';

// TODO: Update query to use locSlug when/if we decide to use locSLugs on regions/places
export const getEventsByRegion = async ({ region, lang }) => {
  const query = groq`*[
      _type == "Activity" && isEvent == true && region->locSlug[$lang].current == $region && !(_id in path('drafts.**'))]{
    isEvent,
    _id,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    subCategory->{_id, title, locTitle, slug, locSlug},
    cloudinaryImages[]{
      image {
        width,
        height,
        public_id,
        url
      },
    },
    images[] {
      altText,
      mainImage,
      imageRef->{
        cloudinaryId,
      },
    },
    event{
      bookingUrl,
      locBookingUrl,
      recurring,
      showings[]{bookingUrl, date, schedule},
    }
  }`;
  return clientGROQ.fetch(query, { region, lang });
};
