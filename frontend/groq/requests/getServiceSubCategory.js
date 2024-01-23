import groq from 'groq';
import { clientGROQ } from '../client';

export const getServiceSubCategory = async ({ subCatSlug, lang }) => {
  const query = groq`*[
    _type == "ServiceSubCategory"
    && locSlug[$lang].current == $subCatSlug
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    serviceCategory->{_id, _type, slug, locSlug, title, locTitle},
    featureImageCloudinary{context, width, height, public_id},
  }`;
  return clientGROQ.fetch(query, { subCatSlug, lang });
};
