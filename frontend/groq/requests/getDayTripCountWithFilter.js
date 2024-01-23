import groq from 'groq';
import { clientGROQ } from '../client';

export const getDayTripCountWithFilter = async ({ filterSanityString, lang, landingRef }) => {
  const filterStrings = filterSanityString !== '' ? `&& ( ${filterSanityString} )` : '';

  const query = groq`count(*[
    _type == "DayTrip"
    && dayTripPlace._ref == $landingRef
    && !(_id in path('drafts.**'))
    && isHidden != true
    && defined(locSlug[$lang].current)
    ${filterStrings}
  ])`;

  return clientGROQ.fetch(query, { lang, landingRef });
};
