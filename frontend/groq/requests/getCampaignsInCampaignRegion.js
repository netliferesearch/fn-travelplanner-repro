import groq from 'groq';
import { clientGROQ } from '../client';

// Get minimal data from every Campaign within a CampaignRegion
export const getCampaignsInCampaignRegion = async ({ campaignRegionId }) => {
  const query = groq`*[
    _type == "Campaign"
    && campaignRegion._ref == $campaignRegionId
    && isActive == true
    && !(_id in path('drafts.**'))
  ]{
    _id,
    locSlug,
    isActive,
    campaignRegion->{_id, locSlug}
  }`;
  return clientGROQ.fetch(query, { campaignRegionId });
};
