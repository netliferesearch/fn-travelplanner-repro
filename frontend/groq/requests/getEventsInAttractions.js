import groq from 'groq';
import { clientGROQ } from '../client';

export const getAttractionEvents = async ({ lang, attractionIds = '' }) => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`*[
    _type == "Activity"
    && isEvent == true
    ${attractionIds ? '&& place._ref in $attractionIds' : ''}
    && (
      defined(locSlug[$lang].current) ||
      defined(locSlug[$fallbackLang].current)
    )
  ]{
    _id,
    locSlug,
    locTitle,
    isEvent,
    "showings": event.showings[]{date},
  }`;

  return clientGROQ.fetch(query, { lang, fallbackLang, attractionIds });
};
