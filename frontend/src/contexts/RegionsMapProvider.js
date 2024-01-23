import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RegionsMapContext = createContext({
  descriptionIsShowing: false,
  hoveredRegion: '',
});

const RegionsMapProvider = ({ children }) => {
  const [descriptionIsShowing, setDescriptionIsShowing] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState('');

  return (
    <RegionsMapContext.Provider
      value={{
        descriptionIsShowing,
        setDescriptionIsShowing,
        hoveredRegion,
        setHoveredRegion,
      }}
    >
      {children}
    </RegionsMapContext.Provider>
  );
};

RegionsMapProvider.propTypes = {
  children: PropTypes.node,
};

export { RegionsMapContext, RegionsMapProvider };
