import groq from 'groq';
import { clientGROQ } from '../../groq/client';

const getSearchResults = async ({ query, language }) => {
  const currentQuery = String(query || '');

  const groqQuery = groq`
    {
      "all": *[
        _type in ["Activity", "Article", "Page", "Place", "Region", "Service", "Provider", "ThingsToDoPage", "DayTrip"]
        && expired != true
      ] | score(boost(_type == 'Place', 2)) [0...10] { _id },
    }
  `;

  const results = await clientGROQ.fetch(groqQuery, {
    query: currentQuery,
    categoryId: '',
    language,
    fallback: 'en',
  });

  return { results, currentQuery };
};

export default async function handler(req, res) {
  // Disallow non-GET methods
  if (req.method !== 'GET') return res.status(405).send('GET method not supported');

  const { page, language } = req.query;

  const { results } = await getSearchResults({
    query: ['bergen'].map(word => `*${word}*`),
    page,
    language,
    paginationLimit: 50,
  });

  if (results.all.length < 1) return res.status(404).send('Not found');

  return res.status(200).json({
    status: 'Ok',
    results,
  });
}
