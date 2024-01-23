import groq from 'groq';
import { clientGROQ } from '../client';

export const getFacilities = async () => {
  const query = groq`*[_type == "Facility" && !(_id in path('drafts.**'))]{
   _id,
   _type,
   facilityType,
   locTitle,
   subCategories[]->{_id, _type, title, locTitle, slug, locSlug},
  }`;
  return clientGROQ.fetch(query);
};
