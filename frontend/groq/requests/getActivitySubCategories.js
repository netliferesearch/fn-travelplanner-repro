import groq from 'groq';
import { clientGROQ } from '../client';

export const getActivitySubCategories = async () => {
  const query = groq`*[
    _type == "ActivitySubCategory"
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
  return clientGROQ.fetch(query);
};
