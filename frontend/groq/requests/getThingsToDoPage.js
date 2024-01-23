import groq from 'groq';
import { clientGROQ } from '../client';

export const getThingsToDoPage = async ({ lang, slug }) => {
  const query = groq`*[
    _type == "ThingsToDoPage"
    && place -> locSlug[$lang].current == $slug
    && !(_id in path('drafts.**'))
    && defined(locTitle[$lang])
    && defined(locShortDescription[$lang])
  ]{
    _id,
    locTitle,
    locShortDescription,
    image {
      context,
      public_id,
      secure_url
    },
    place->{
      _id,
      locSlug,
      locTitle,
      region->{_id},
    },
  }[0]`;

  return clientGROQ.fetch(query, { lang, slug });
};
