import natural from 'natural';
import * as stopword from 'stopword';

// Utils
import getSearchResults from '../../src/utils/getSearchResults';

const cacheExpires = 60 * 60 * 6; // Cache is stale after 6 hours
const cacheRevalidate = 60 * 60 * 24; // Use stale cache for 24 hours while revalidating

export default async function handler(req, res) {
  // Disallow non-GET methods
  if (req.method !== 'GET') return res.status(405).send('GET method not supported');

  res.setHeader(
    'Cache-Control',
    `max-age=0, s-maxage=${cacheExpires}, stale-while-revalidate=${cacheRevalidate}`,
  );

  // Save timestamp for calculating response time
  const timestamp = Date.now();

  const { query, page, language } = req.query;

  const tokenizer = new natural.WordTokenizer();
  const removeStopwords = stopword.removeStopwords;

  let localeStemmer = natural.LancasterStemmer;
  let localeStopwords = stopword.eng;

  switch (language) {
    case 'no':
      localeStemmer = natural.PorterStemmerNo;
      localeStopwords = stopword.nob;
      break;

    case 'de':
      localeStemmer = natural.PorterStemmerDe;
      localeStopwords = stopword.deu;
      break;

    case 'en':
    default:
      break;
  }

  const words = tokenizer.tokenize(query);
  const filteredWords = removeStopwords(words, localeStopwords);
  const stemmedWords = filteredWords.map(word => localeStemmer.stem(word));

  const { results, nextPage, prevPage, currentQuery, currentPage } = await getSearchResults({
    query: stemmedWords.map(word => `*${word}*`),
    page,
    language,
    paginationLimit: 50,
  });

  // Return 404 if there are no results
  if (results.all.length < 1) {
    return res.status(404).json({
      status: 'Not found',
      currentQuery,
      query,
      currentPage,
    });
  }

  // Return 200 with search results
  return res.status(200).json({
    status: 'Ok',
    responseTime: `${Date.now() - timestamp} ms`,
    results,
    currentQuery,
    query,
    currentPage,
    prevPage,
    nextPage,
  });
}
