import groq from 'groq';
import { clientGROQ } from '../client';

export const getDayTripLanding = async ({ lang, slug }) => {
  const query = groq`*[
      _type == "DayTripLandingPage"
      && place -> locSlug[$lang].current == $slug
      && !(_id in path('drafts.**'))
      && defined(locTitle[$lang])
      && defined(locShortDescription[$lang])
    ]{
      _id,
      locTitle,
      locShortDescription,
      place->{
        locSlug,
        locTitle,
        region->{_id},
      },
      nearbyLandingPages[] -> {
        _id,
        locSlug,
        locTitle,
        place->{
          locSlug,
        },
      },
  }`;
  return clientGROQ.fetch(query, { lang, slug });
};
