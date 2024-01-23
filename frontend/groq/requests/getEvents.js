import groq from 'groq';
import { clientGROQ } from '../client';

export const getEvents = async () => {
  const query = groq`*[_type == "Activity" && isEvent == true && !(_id in path('drafts.**'))]{
    isEvent,
    _id,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    expired,
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
      recurring,
      showings[]{bookingUrl, date, schedule},
    }
  }`;
  return clientGROQ.fetch(query);
};
