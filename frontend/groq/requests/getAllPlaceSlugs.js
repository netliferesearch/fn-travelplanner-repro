import groq from 'groq';
import { clientGROQ } from '../client';

// Get array of slugs by language and type
export const getAllPlaceSlugs = async ({ lang }) => {
  const query = groq`*[
    _type == "Place"
  ]{
    "slug": slug.current,
    locSlug{
      "no": no.current,
      "en": en.current,
      "de": de.current,
    },
  }`;

  const response = await clientGROQ.fetch(query);
  return response.map(obj => obj.slug || obj.locSlug[lang]);
};
