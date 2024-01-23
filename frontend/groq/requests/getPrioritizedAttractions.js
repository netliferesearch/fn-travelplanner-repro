import groq from 'groq';
import { clientGROQ } from '../client';

export const getPrioritizedAttractions = async lang => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`*[
      _type == "Place"
      && ( attractionLevels.level->priority <= 2 || attractionLevels.isNationalAttraction == true )
      && noLandingPage != true
      && defined(geopoint)
      && ( defined(locSlug[$lang].current) || defined(locSlug[$fallbackLang].current) )
    ] {
      "id": _id,
      "isNationalAttraction": attractionLevels.isNationalAttraction,
      "priority": attractionLevels.level->priority,
      "mainImage": image.public_id,
      "category": placeCategory->{"id": _id, locSlug, locTitle},
      region->{_id, locSlug},
      locSlug,
      slug,
      locTitle,
      locShortDescription,
      subscriberRegions[]->{_id, locSlug},
    }`;

  const attractions = await clientGROQ.fetch(query, { lang, fallbackLang });

  const sortedAttractions = [
    ...attractions.filter(attr => attr.isNationalAttraction),
    ...attractions
      .filter(attr => !attr.isNationalAttraction)
      .sort((a, b) => a.priority - b.priority),
  ];

  return sortedAttractions;
};
