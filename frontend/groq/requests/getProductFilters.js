import groq from 'groq';
import { clientGROQ } from '../client';

// Get array of slugs by language and type
export const getProductFilters = async () => {
  const query = groq`{
    "categories": *[_type in ["ActivityCategory", "ServiceCategory"]] {
      _id,
      locTitle,
    },
  }`;

  const response = await clientGROQ.fetch(query);

  const productFilters = {
    categories: response.categories.map(cat => ({ ...cat, enabled: false })),
  };

  return productFilters;
};
