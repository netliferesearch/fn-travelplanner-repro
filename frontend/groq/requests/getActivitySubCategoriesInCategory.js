import groq from 'groq';
import { clientGROQ } from '../client';

export const getActivitySubCategoriesInCategory = async ({ categoryId }) => {
  const query = groq`*[
    _type == "ActivitySubCategory"
    && activityCategory._ref == $categoryId
    && !(_id in path('drafts.**'))
  ]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    activityCategory->{_id, slug, locSlug, title, locTitle}
  }`;
  return clientGROQ.fetch(query, { categoryId });
};
