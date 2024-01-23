import groq from 'groq';
import { clientGROQ } from '../client';

// Get metadata from all regions
export const getAttractionsMetaData = async () => {
  const query = groq`*[_type == "Place" && defined(locSlug)]| order(title asc){
    _id,
    _type,
    locSlug,
    locTitle,
    region->{_id, locSlug},
    subscriberRegions[]->{
      _id,
      _type,
      locSlug,
      locTitle,
      region->{_id, locSlug},
    }
  }`;
  return clientGROQ.fetch(query);
};
