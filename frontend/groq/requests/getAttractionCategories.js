import groq from 'groq';
import { clientGROQ } from '../client';

export const getAttractionCategories = async () => {
  const query = groq`*[_type == "PlaceCategory" && !(_id in path('drafts.**'))]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    featureImageCloudinary{context, width, height, public_id}
  }`;

  return clientGROQ.fetch(query);
};
