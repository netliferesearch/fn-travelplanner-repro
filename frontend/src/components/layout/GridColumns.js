/* eslint-disable no-useless-concat */
/**
 *  A simple container that defines commonly used responsive grid column patterns
 *  Optional className overrides for fine tuning unique instances.
 *
 *  Should be used as a direct child of a <Grid> component.
 *  If no contentType is defined, will default to a full 12 column width.
 *
 *  @example
 *  <GridColumns
 *    className=""
 *    contentType="introText"
 *  >
 *    Children go here
 *  </GridColumns>
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GridColumns = ({ className, children, contentType }) => (
  <div
    className={classNames(
      '',
      // Standard full width layout:
      contentType === 'fullWidth' && 'col-span-12',

      // The text here (h1 + short description) needs to accommodate the map of Norway on right side:
      contentType === 'pageHeaderDestination' &&
        'xs:col-start-2 col-start-1 md:col-start-2 ' + 'xs:col-span-8 col-span-12 md:col-span-6',
      // For category tag (breadcrumb) + h1 (+ short description when appropriate on regular pages) + metadata:
      contentType === 'pageHeaderText' &&
        'xs:col-start-2 col-start-1 sm:col-start-2 lg:col-start-2 xl:col-start-2 ' +
          'xs:col-span-10 col-span-12 sm:col-span-8 lg:col-span-7 xl:col-span-6 ',
      // Text in the header when a small image is used
      contentType === 'pageHeaderTextWithImage' &&
        'xs:col-start-2 col-start-1 lg:col-start-2 xl:col-start-2 ' +
          'xs:col-span-8 col-span-12 lg:col-span-5 xl:col-span-5 ',
      // Small image at top right side of an article
      contentType === 'pageHeaderImageSm' &&
        'col-start-1 lg:col-start-7  ' + 'col-span-12 lg:col-span-6  ',
      // For under h1 if there is no image on a page / blog article
      contentType === 'break' &&
        'xs:col-start-2 col-start-1 sm:col-start-1 lg:col-start-2 ' +
          'xs:col-span-11 col-span-12 sm:col-span-12 lg:col-span-11',
      // For shortDescription below top image on blog articles:
      contentType === 'introText' &&
        'col-start-1 md:col-start-3 lg:col-start-3 ' + 'col-span-12 md:col-span-9 lg:col-span-8 ',
      // css columns (not grid)
      // 'col-gap-md col-fill-balance-all ' +
      // 'col-count-1 md:col-count-2 '

      // For general body text in an article. When unsure, use this:
      contentType === 'bodyText' &&
        '2xs:col-start-2 col-start-1 sm:col-start-3 md:col-start-3 lg:col-start-4 xl:col-start-4 ' +
          '2xs:col-span-10 col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 xl:col-span-6',
      // Indented body text, mainly for blog articles with a theme icon at the top
      contentType === 'bodyTextIndented' &&
        '2xs:col-start-2 col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-4 xl:col-start-4 ' +
          '2xs:col-span-10 col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-7 xl:col-span-6',
      // Standard image in the article body
      contentType === 'bodyImage' &&
        'col-start-1 sm:col-start-3 md:col-start-3 lg:col-start-4 xl:col-start-4 ' +
          'col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-7',
      // Indented image in the article body — for use in trip steps
      contentType === 'bodyImageIndented' &&
        'col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-4 xl:col-start-4 ' +
          'col-span-12 sm:col-span-10 md:col-span-9 lg:col-span-8 xl:col-span-8',
      // Wide image that breaks out of the text column in an article
      contentType === 'bodyImageWide' &&
        'col-start-1 md:col-start-2 ' + 'col-span-12 md:col-span-10 ',
      // For large block quote text that breaks out of the main body column
      contentType === 'blockQuoteText' &&
        'col-start-1 md:col-start-2 ' + 'col-span-12 md:col-span-10',
      className,
    )}
  >
    {children}
  </div>
);

GridColumns.defaultProps = {
  contentType: 'fullWidth',
};

GridColumns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Define type of content for correct layout.
   *  Options:
   *  fullWidth (default), introText, bodyText, bodyTextIndented, bodyImage, bodyImageIndented, bodyImageWide, blockQuoteText, pageHeaderText, pageHeaderDestination
   * */
  contentType: PropTypes.string,
};

export default GridColumns;
