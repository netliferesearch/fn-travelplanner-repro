import Link from 'next/link';
import React from 'react';
import { resolveLinkMultiple } from '../../utils/resolveLinkMultiple';
import useLanguage from '../../hooks/useLanguage';
import Grid from '../layout/Grid';

export const SearchItem = (item, itemIndex = 0) => {
  const {
    locTitle: itemLocTitle,
    title: itemTitle,
    locShortDescription: itemLocShortDescription,
    _id: itemId,
    place: itemPlace,
    region: itemRegion,
  } = item;

  const itemLocations = [itemPlace, itemRegion].filter(loc => loc);
  const language = useLanguage();

  return (
    // Single search result
    <li key={itemId}>
      <Link
        prefetch={false}
        // Because these links can be of all kinds, we expand 'resolveLink' and call it 'resolveLinkMultiple'
        href={resolveLinkMultiple(item, language)}
      >
        {/* .analytics-search-item and e.attr.data-analytics-index are needed to get behaviour analytics */}
        <a className="analytics-search-item group block" data-analytics-index={itemIndex + 1}>
          <Grid subGrid={9}>
            <div className="col-span-3">
              <div className="relative w-full" style={{ paddingBottom: '67%' }} />
            </div>
            <div className="group-hover:text-blue-dark col-span-6 flex flex-col items-start">
              <h2 classification="sans" headingLevel="h2" sizeOverride="h3" className="!mb-0">
                {itemLocTitle?.en || itemTitle}
              </h2>

              {/* Display item type or attraction category */}
              {itemLocations && (
                <div className="text-grey-aa mb-1.5">
                  {itemLocations.map(loc => loc?.locTitle).join(', ')}
                </div>
              )}

              {itemLocShortDescription && <div>{itemLocShortDescription?.en}</div>}
            </div>
          </Grid>
        </a>
      </Link>
    </li>
  );
};
