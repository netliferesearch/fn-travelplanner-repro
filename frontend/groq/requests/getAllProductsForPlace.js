import groq from 'groq';
import { clientGROQ } from '../client';

// Get articles
export const getAllProductsForPlace = async ({ placeId }) => {
  const query = groq`*[_type in ["Service", 'Activity']
    && place._ref == $placeId
    && isEvent != true
    && defined(openingHours)
    && category._ref != '48bc50b3-bfff-4b14-9760-f00a1205de35' // NO Transport
    && category._ref != 'f74a7be9-8da6-4d45-8c02-48c278f4cd76' // NO Overnatting
  ] {
    _id,
    title,
    openingHours
  }`;
  return clientGROQ.fetch(query, { placeId });
};
