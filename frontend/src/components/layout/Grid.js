/**
 *  A simple container to pass grid content into.
 *  Optional className overrides (TODO: needed?)
 *
 *  @example
 *  <Grid
 *    className=""
 *  >
 *    Children go here
 *  </Grid>
 *
 *  If defining a subgrid, make sure it matches with the container column definition
 *  At the moment, the subgrid only lines up with the main grid at one breakpoint
 *  (i.e. largest - but maybe that's ok, it's where it matters most)
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({ className, children, subGrid }) => (
  <div
    className={classNames(
      'grid',
      'gap-x-4 md:gap-x-6 lg:gap-x-8',
      'gap-y-3 md:gap-y-4 lg:gap-y-6',
      !subGrid && 'grid-cols-12',
      subGrid === 11 && 'grid-cols-11',
      subGrid === 10 && 'grid-cols-10',
      subGrid === 9 && 'grid-cols-9',
      subGrid === 8 && 'grid-cols-8',
      subGrid === 7 && 'grid-cols-7',
      subGrid === 6 && 'grid-cols-6',
      subGrid === 5 && 'grid-cols-5',
      className,
    )}
  >
    {children}
  </div>
);

Grid.defaultProps = {
  className: '',
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subGrid: PropTypes.number,
};

export default Grid;
