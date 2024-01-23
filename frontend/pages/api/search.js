// Utils
import getSearchResults from '../../src/utils/getSearchResults';

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
