import groq from 'groq';
import { clientGROQ } from '../client';

export const getServicesInSubCategory = async ({ subCategoryId, limit, lang, fallback }) => {
  const query = groq`*[
    _type == "Service"
    && (defined(locSlug[$lang].current) || defined(locSlug[$fallback].current))
    && subCategory._ref == $subCategoryId
    && !(_id in path('drafts.**'))
  ] | order(title asc) [0..$limit]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    cloudinaryImages[]{
      image {
        width,
        height,
        public_id,
        url
      },
    },
    images[] {
      altText,
      mainImage,
      imageRef->{
        cloudinaryId,
      },
    },
  }`;
  return clientGROQ.fetch(query, { subCategoryId, limit, lang, fallback: fallback || lang });
};
