import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { SearchResult } from '../modules/SearchResult';
import { fetchSearchResults } from '../../utils/fetchSearchResults';
import { searchDelay } from '../primitives/Search/config';
import useDebounce from '../../hooks/useDebounce';
import useLanguage from '../../hooks/useLanguage';
import useUrlState from '../../hooks/useUrlState';
import { isNotEmptyObject } from '../../utils/isEmptyUtil';
import SearchInput from '../primitives/Search/SearchInput';

const SearchResults = () => {
  const [currentCategory, setCurrentCategory] = useUrlState('type');
  const [searchValue, setSearchValue] = useUrlState('q');
  const [searchMatches, setSearchMatches] = useState({});
  const debouncedSearchValue = useDebounce(searchValue, searchDelay);
  const language = useLanguage();

  const searchResults = useQuery(
    ['searchResults', debouncedSearchValue, language],
    () => fetchSearchResults({ query: debouncedSearchValue, language }),
    { staleTime: 10000 },
  );

  // Set API results into state
  useEffect(() => {
    // If any are found, build the object that's rendered in 'renderMatches'
    if (searchResults.data && isNotEmptyObject(searchResults.data)) {
      setSearchMatches(searchResults.data.results);
    }

    return () => {};
  }, [searchResults]);

  return (
    <>
      <Head>
        <title>SearchResults</title>
      </Head>

      <div className="mx-auto max-w-6xl">
        <SearchInput
          className="w-full"
          focus
          hiddenLabel
          label="What are you looking for?"
          onChangeHandler={value => {
            setSearchValue(value);
          }}
          placeholder="Search for regions, things to do, places to stay, etc."
          value={searchValue}
        />

        {searchResults.isLoading && (
          <div className="xs:col-span-11 xs:col-start-1 col-span-12">Spinner</div>
        )}

        {!searchResults.isLoading && isNotEmptyObject(searchMatches) && (
          <SearchResult
            searchMatches={searchMatches}
            searchValue={searchValue}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        )}
      </div>
    </>
  );
};

export default SearchResults;
