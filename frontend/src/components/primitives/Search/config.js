const autocompleteHitsPerMode = 2;
const searchDelay = 500;
const searchResultTypes = 6; // ('activities' | 'articles' | 'pages' | 'places' | 'regions' | 'services')
const searchResultsLimitDefault = 1000;
const searchResultsLimitAutocomplete = autocompleteHitsPerMode * searchResultTypes;

export {
  autocompleteHitsPerMode,
  searchDelay,
  searchResultsLimitAutocomplete,
  searchResultsLimitDefault,
  searchResultTypes,
};
