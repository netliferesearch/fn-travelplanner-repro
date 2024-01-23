import groq from 'groq';
import { clientGROQ } from '../client';

// Get articles
export const getArticles = async ({ lang, fallback }) => {
  const query = groq`*[
    _type == "Article"
    && (defined(locSlug.[$lang].current) || defined(locSlug.[$fallback].current))
    && !(_id in path('drafts.**'))
  ]{
    _id,
    articleCategory->{_id, locTitle, locSlug},
    cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
    coverImage{ image{public_id}, locDescription},
    locShortDescription,
    locSlug,
    locTitle,
    region->{_id, title},
    regionSubscriber[]->{_id},
    slug,
    title,
  }`;
  return clientGROQ.fetch(query, { lang, fallback: fallback || lang });
};
