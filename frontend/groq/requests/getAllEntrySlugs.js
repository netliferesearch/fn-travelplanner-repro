import groq from 'groq';
import { clientGROQ } from '../client';

// Get array of slugs by language and type
export const getAllEntrySlugs = async ({ lang, type }) => {
  const query = groq`*[_type == $type && !(_id in path('drafts.**')) && defined(locSlug[$lang].current)]{"slug": locSlug[$lang].current}`;
  const response = await clientGROQ.fetch(query, { lang, type });
  return response.map(obj => obj.slug);
};
