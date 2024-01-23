import groq from 'groq';
import { clientGROQ } from '../client';

export const getFilteredActivities = async ({ lang, regionId, fallback }) => {
  const query = groq`{
    "allActivity": *[
      _type == "Activity"
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
    "allActivityCategory": *[
      _type == "ActivityCategory"
      && !(_id in path('drafts.**'))
    ]{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
    },
    "allActivitySubCategory": *[
      _type == "ActivitySubCategory"
      && !(_id in path('drafts.**'))
    ]{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
      activityCategory->{
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
