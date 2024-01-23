import groq from 'groq';
import { clientGROQ } from '../client';

export const getActivitySubCategory = async ({ subCatSlug, lang }) => {
  const query = groq`*[
    _type == "ActivitySubCategory"
    && locSlug[$lang].current == $subCatSlug
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    activityCategory->{_id, slug, locSlug, title, locTitle},
    featureImageCloudinary{context, width, height, public_id},
  }`;
  return clientGROQ.fetch(query, { subCatSlug, lang });
};
