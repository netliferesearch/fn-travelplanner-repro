import groq from 'groq';
import { mapSeasonToDate } from '../../src/utils/mapSeasonToDate';
import { clientGROQ } from '../client';

export const getDayTripItemsWithFilter = async ({ filterSanityString, lang, landingRef }) => {
  const filterStrings = filterSanityString !== '' ? `&& ( ${filterSanityString} )` : '';

  const fallback = lang === 'de' ? 'en' : lang;

  const query = groq`*[
    _type == "DayTrip" && dayTripPlace._ref == $landingRef
    && !(_id in path('drafts.**'))
    && (defined(locSlug[$lang].current) || defined(locSlug[$fallback].current))
    && isHidden != true
    ${filterStrings}
  ] | order((isFeatured == true) desc) {
    _id,
    locSlug,
    locTitle,
    locShortDescription,
    dayTripPlace,
    ..., // todo: Optimize later if necessary
  }`;

  const dayTrips = await clientGROQ.fetch(query, { lang, fallback, landingRef });

  // Sorted by current season
  return mapSeasonToDate({ products: dayTrips, nowDate: new Date() });
};
