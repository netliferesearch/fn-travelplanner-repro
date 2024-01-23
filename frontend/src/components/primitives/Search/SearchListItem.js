import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function SearchListItem({ children }) {
  return (
    <li
      className="
        w-full
        bg-white py-2 pl-4
        pr-3
      "
      key={uuidv4()}
    >
      {children}
    </li>
  );
}

export default SearchListItem;
