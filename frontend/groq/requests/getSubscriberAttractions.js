import groq from 'groq';
import { clientGROQ } from '../client';

export const getSubscriberAttractions = async ({ lang, slug = '', attractionId = '' }) => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`*[
    _type == "Place"
    && defined(geopoint)
    && (
      locSlug[$lang].current == $slug
      || locSlug[$fallbackLang].current == $slug
      || _id == $attractionId
    )
  ][0]{
    _id,
    subscriberAttractions[defined(@->.geopoint)]->{
      _id,
    },
  }`;
  const response = await clientGROQ.fetch(query, { lang, fallbackLang, slug, attractionId });

  if (!response?.subscriberAttractions && !response?._id) return null;
  return [response?._id, ...(response?.subscriberAttractions?.map(obj => obj._id) || [])];
};
