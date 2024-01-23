import groq from 'groq';
import { clientGROQ } from '../client';

// Get one Provider by language and slug
export const getProviderProductCount = async () => {
  const query = groq`{
  "services": *[
    _type in ["Service"]
    && isEvent != true
  ]{
    "providerRef": provider._ref,
  },
  "activities": *[
    _type in ["Activity"]
    && isEvent != true
  ]{
    "providerRef": provider._ref,
  },
}`;
  return clientGROQ.fetch(query);
};
