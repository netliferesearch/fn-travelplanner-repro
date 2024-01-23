// import groq from 'groq';
// import { clientGROQ } from '../../groq/client';

// const getSearchResults = async ({ language }) =>
const getSearchResults = async () => {
  // const groqQuery = groq`
  //   {
  //     "all": *[
  //       _type in ["Activity", "Article", "Page", "Place", "Region", "Service", "Provider", "ThingsToDoPage", "DayTrip"]
  //     ] | [0...10] { _id }
  //   }
  // `;

  // const results = await clientGROQ.fetch(groqQuery, {
  //   query: '',
  //   categoryId: '',
  //   language,
  //   fallback: 'en',
  // });

  const results = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

  return { results: { all: [results] } };
};

export default getSearchResults;
