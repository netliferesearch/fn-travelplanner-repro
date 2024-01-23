import groq from 'groq';
import { clientGROQ } from '../../groq/client';

const getSearchResults = async ({ language }) => {
  const groqQuery = groq`
    {
      "all": *[
        _type in ["Activity", "Article", "Page", "Place", "Region", "Service", "Provider", "ThingsToDoPage", "DayTrip"]
      ] | [0...10] { _id }
    }
  `;

  const results = await clientGROQ.fetch(groqQuery, {
    query: '',
    categoryId: '',
    language,
    fallback: 'en',
  });

  return { results };
};

export default getSearchResults;
