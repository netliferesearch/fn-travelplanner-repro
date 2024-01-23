import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// The amount of hits the search api should return
import { searchResultsLimitDefault } from './../components/primitives/Search/config';

const SearchContext = createContext({
  searchData: {},
  autocompleteSearchString: '',
  autocompleteMatches: {},
  searchOverlay: false,
  searchValueGlobal: '',
  searchResultLimit: searchResultsLimitDefault,
});

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({});
  const [autocompleteSearchString, setAutocompleteSearchString] = useState('');
  const [autocompleteMatches, setAutocompleteMatches] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [searchOverlay, setSearchOverlay] = useState(false);
  const [searchValueGlobal, setSearchValueGlobal] = useState('');
  const [searchResultLimit, setSearchResultLimit] = useState(searchResultsLimitDefault);

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
        autocompleteSearchString,
        setAutocompleteSearchString,
        autocompleteMatches,
        setAutocompleteMatches,
        isSearching,
        setIsSearching,
        searchOverlay,
        setSearchOverlay,
        searchValueGlobal,
        setSearchValueGlobal,
        searchResultLimit,
        setSearchResultLimit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export { SearchContext, SearchProvider };
