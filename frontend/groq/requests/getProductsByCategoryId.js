import groq from 'groq';
import { clientGROQ } from '../client';
import { getSubscriberAttractions } from './getSubscriberAttractions';

/**
 * @param {{
 *   categoryIds: string[],
 *   productType: "Activity" | "Service",
 *   limit: number,
 *   lang: "en" | "no" | "de",
 *   regionId?: string
 * }} props
 */
export default async function getProductsByCategoryIds({
  categoryIds,
  productType,
  limit,
  lang,
  regionId = '',
  attractionId = '',
}) {
  const fallback = lang === 'de' ? 'en' : lang;

  const subscriberAttractions = await getSubscriberAttractions({ lang, attractionId });

  // Generates dynamic GROQ query that returns a limited amount of products for every category ID
  const generatedQueryArray = categoryIds.map(
    id => groq`"${id}": *[
      _type == $productType
      && !(_id in path('drafts.**'))
      && (defined(locSlug[$lang].current) || defined(locSlug[$fallback].current))
      && (category._ref == "${id}" || subCategory._ref == "${id}")
      && expired != true
      && isEvent != true
      ${regionId && !subscriberAttractions ? '&& region._ref == $regionId' : ''}
      ${subscriberAttractions ? '&& place._ref in $subscriberAttractions' : ''}
    ] | score(boost(place._ref == $attractionId, 100)) [0...$limit] {
      _id,
      locTitle,
      locSlug,
      image,
      cloudinaryImages,
      locShortDescription,
      category,
      subCategory,
      place->{_id}
    }`,
  );
  const generatedQuery = generatedQueryArray.join(',');

  return clientGROQ.fetch(`{${generatedQuery}}`, {
    productType,
    limit,
    lang,
    fallback,
    regionId,
    attractionId,
    subscriberAttractions: subscriberAttractions || [],
  });
}
