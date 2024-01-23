import groq from 'groq';
import { clientGROQ } from '../client';

export const getServiceSubCategoriesInCategory = async ({ categoryId }) => {
  const query = groq`*[
    _type == "ServiceSubCategory"
    && serviceCategory._ref == $categoryId
    && !(_id in path('drafts.**'))
  ]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    serviceCategory->{_id, slug, locSlug, title, locTitle}
  }`;
  return clientGROQ.fetch(query, { categoryId });
};
