import groq from 'groq';
import { clientGROQ } from '../client';

// Get one all article categories
export const getArticleCategories = async () => {
  const query = groq`*[_type == "ArticleCategory" && !(_id in path('drafts.**'))]{
    _id,
    title,
    locTitle,
    locSlug,
  }`;
  return clientGROQ.fetch(query);
};
