import groq from 'groq';
import { clientGROQ } from '../client';

// Get one entry by language, slug and type
export const getOneEntry = async ({ lang, slug, type }) => {
  const query = groq`*[_type == $type && locSlug[$lang].current == $slug && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    locDescription,
  }`;
  return clientGROQ.fetch(query, { lang, slug, type });
};
