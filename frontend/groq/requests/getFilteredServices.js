import groq from 'groq';
import { clientGROQ } from '../client';

export const getFilteredServices = async ({ lang, regionId, fallback }) => {
  const query = groq`{
    "allService": *[
      _type == "Service"
      && (defined(locSlug[$lang].current) || defined(locSlug[$fallback].current))
      && defined(geopoint.lng)
      && defined(geopoint.lat)
      && defined(place)
      && region._ref == $regionId
      && !(_id in path('drafts.**'))
    ]{
      _id,
      title,
      locTitle,
      category->{_id},
      subCategory->{_id},
      locShortDescription,
      slug,
      locSlug,
      place->{
        _id,
        title,
        locTitle,
        slug,
        locSlug,
        geopoint,
        region->{
          _id,
        },
        important,
      },
      cloudinaryImages[0..0]{
        image {
          width,
          height,
          public_id,
          url
        },
      },
      images[0..0] {
        altText,
        mainImage,
        imageRef->{
          cloudinaryId,
        },
      },
    },
    "allServiceCategory": *[
      _type == "ServiceCategory"
      && !(_id in path('drafts.**'))
    ]{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
    },
    "allServiceSubCategory": *[
      _type == "ServiceSubCategory"
      && !(_id in path('drafts.**'))
    ]{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
      serviceCategory->{
        _id,
        title,
        locTitle,
        slug,
        locSlug,
      }
    }
  }`;
  return clientGROQ.fetch(query, { lang, regionId, fallback: fallback || lang });
};
