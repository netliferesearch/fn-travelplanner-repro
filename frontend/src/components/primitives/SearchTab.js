import classnames from 'classnames';
import React from 'react';

export const SearchTab = ({ category, counts, currentCategory, setCurrentCategory }) => {
  if (!counts) {
    return null;
  }

  const isSelectedCategory = currentCategory === category;

  const buttonClass = classnames(
    'whitespace-nowrap py-2 px-4 font-medium',
    isSelectedCategory ? 'bg-blue-dark text-white' : 'bg-grey-light text-blue-dark',
  );

  return (
    <button className={buttonClass} onClick={() => setCurrentCategory(category)}>
      A category {counts}
    </button>
  );
};
