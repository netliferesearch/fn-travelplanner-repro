import groq from 'groq';
import { clientGROQ } from '../client';

/**
 * @param {{
 *   providerSlug: string,
 *   limit: number,
 *   lang: "en" | "no" | "de",
 * }} props
 */

export const getProductsByProviderSlug = async ({ lang, providerId, limit }) => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`{
    "services": *[
      _type in ["Service"]
      && !(_id in path('drafts.**'))
      && provider._ref == $providerId
      && (
        defined(locSlug[$lang].current) ||
        defined(locSlug[$fallbackLang].current)
      )
      && expired != true
    ][0...$limit]{
      _id,
      _type,
      place->{_id},
      locSlug,
      locTitle,
      locShortDescription,
      category->{
        _id,
        title,
        locTitle,
      },
      subCategory->{
        _id,
        title,
        locTitle,
      },
      image,
      cloudinaryImages,
      "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
      "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
      "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
    },

    "activities": *[
      _type in ["Activity"]
      && !(_id in path('drafts.**'))
      && provider._ref == $providerId
      && (
        defined(locSlug[$lang].current) ||
        defined(locSlug[$fallbackLang].current)
      )
      && expired != true
    ][0...$limit]{
      _id,
      _type,
      place->{_id},
      locSlug,
      locTitle,
      locShortDescription,
      category->{
        _id,
        title,
        locTitle,
      },
      subCategory->{
        _id,
        title,
        locTitle,
      },
      image,
      cloudinaryImages,
      "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
      "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
      "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
    },
  }`;

  return clientGROQ.fetch(query, { lang, fallbackLang, providerId, limit });
};
