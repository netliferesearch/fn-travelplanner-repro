import groq from 'groq';
import { clientGROQ } from '../client';

export const getDocumentsForSitemap = async () => {
  const query = groq`{
    "allActivities": *[_type == "Activity" && !(_id in path('drafts.**'))]{
      _id,
      locSlug,
      slug
    },
    "allServices": *[_type == "Service" && !(_id in path('drafts.**'))]{
      _id,
      locSlug,
      slug
    },
    "allRegions": *[_type == "Region" && !(_id in path('drafts.**'))]{
      _id,
      locSlug,
      slug
    },
    "allPlaces": *[_type == "Place" && !(_id in path('drafts.**'))]{
      _id,
      locSlug,
      slug
    },
  }
  `;
  return clientGROQ.fetch(query);
};
