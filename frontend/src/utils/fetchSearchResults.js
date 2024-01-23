export const fetchSearchResults = async ({ query, language }) => {
  if (query.length < 1) return {};

  const response = await fetch(`/api/search?query=${query}&language=${language}`);
  const data = await response.json();
  return data;
};
