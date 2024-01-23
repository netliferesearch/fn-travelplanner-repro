import groq from 'groq';
import { clientGROQ } from '../client';

// Get metadata from all regions
export const getRegionsMetaData = async () => {
  const query = groq`*[_type == "Region"]| order(title asc){
    _id,
    _type,
    mainImage,
    title,
    slug,
    locSlug,
    locTitle,
    locShortDescription,
    locEventShortDescription,
  }`;
  return clientGROQ.fetch(query);
};
