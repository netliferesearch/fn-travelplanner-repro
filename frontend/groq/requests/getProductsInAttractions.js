import groq from 'groq';
import { clientGROQ } from '../client';

export const getProductsInAttractions = async ({ lang, attractionIds }) => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`{
    "services": *[
      _type in ["Service"]
      && !(_id in path('drafts.**'))
      && isEvent != true
      && place._ref in $attractionIds
      && (
        defined(locSlug[$lang].current) ||
        defined(locSlug[$fallbackLang].current)
      )
    ][0...9]{
      _id,
      _type,
      place->{_id},
      locSlug,
      locTitle,
      locShortDescription,
      "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
      "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
      "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
    },
    "activities": *[
      _type in ["Activity"]
      && !(_id in path('drafts.**'))
      && isEvent != true
      && place._ref in $attractionIds
      && (
        defined(locSlug[$lang].current) ||
        defined(locSlug[$fallbackLang].current)
      )
    ][0...9]{
      _id,
      _type,
      place->{_id},
      locSlug,
      locTitle,
      locShortDescription,
      "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
      "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
      "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
    },
  }`;

  return clientGROQ.fetch(query, { lang, fallbackLang, attractionIds });
};
