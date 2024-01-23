import groq from 'groq';
import { clientGROQ } from '../client';

export const getActivitiesInSubCategory = async ({ subCategoryId, limit, lang, fallback }) => {
  const query = groq`*[
      _type == "Activity"
      && (defined(locSlug[$lang].current) || defined(locSlug[$fallback].current))
      && subCategory._ref == $subCategoryId
      && !(_id in path('drafts.**'))
    ] [0..$limit]{
    _id,
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
