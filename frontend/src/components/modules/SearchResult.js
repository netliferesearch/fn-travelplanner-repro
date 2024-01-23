import React from 'react';
import { SearchItem } from './SearchItem';
import { SearchTab } from '../primitives/SearchTab';

export const SearchResult = ({ searchMatches, currentCategory, setCurrentCategory }) => {
  const { totals, ...searchResult } = searchMatches;
  const { all, ...counts } = totals;

  const sortedCounts = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  let searchResultCurrentCategory = searchResult[currentCategory];

  if (searchResult[currentCategory] === undefined) {
    searchResultCurrentCategory = searchResult.all;
  }

  return (
    <>
      <div className="xs:col-span-9 xs:col-start-1 col-span-12">
        <div className="xs:col-span-9 xs:col-start-1 col-span-12">
          <nav className="mb-4 flex flex-wrap gap-2">
            <SearchTab
              category=""
              counts={all}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />

            {sortedCounts.map(category => (
              <SearchTab
                key={`serp-tab-${category}`}
                category={category}
                counts={counts[category]}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            ))}
          </nav>
        </div>

        <p className="text-grey-aa mb-4" aria-live="polite">
          Showing {counts[currentCategory] || all} results
        </p>
      </div>

      <div className="xs:col-start-1 xs:col-span-11 col-span-12 md:col-span-9 md:col-start-2">
        <ul className="mb-16 space-y-16">
          {searchResultCurrentCategory.map((item, i) => SearchItem(item, i))}
        </ul>
      </div>
    </>
  );
};
