import groq from 'groq';
import { clientGROQ } from '../client';

// Get minimal data from every campaign region
export const getCampaignRegions = async () => {
  const query = groq`*[_type == "CampaignRegion" && !(_id in path('drafts.**'))]{
    _id,
    locSlug,
  }`;
  return clientGROQ.fetch(query);
};
