import groq from 'groq';
import { clientGROQ } from '../client';

// Get one entry by language, slug and type
export const getDayTripInfo = async ({ lang, attractionSlug }) => {
  const query = groq`*[
    _type == "DayTripLandingPage"
    && place->locSlug[$lang].current == $attractionSlug
    && !(_id in path('drafts.**'))
    && defined(locTitle[$lang])
    && defined(locShortDescription[$lang])
  ][0]{
    _id,
    place->{locSlug},
    locTitle,
    locShortDescription,
  }`;
  return clientGROQ.fetch(query, { lang, attractionSlug });
};
