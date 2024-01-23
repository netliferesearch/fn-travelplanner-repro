import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TravelPlannerContext = createContext();

const TravelPlannerProvider = ({ children }) => {
  const [showUi, setShowUi] = useState(true);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [mapPadding, setMapPadding] = useState({ left: 0 });
  const [currentRoute, setCurrentRoute] = useState(null);
  const [scrollRestoration, setScrollRestoration] = useState({});
  const [debouncedViewport, setDebouncedViewport] = useState({});
  const [productFilters, setProductFilters] = useState({});

  return (
    <TravelPlannerContext.Provider
      value={{
        showUi,
        setShowUi,
        selectedTabIndex,
        setSelectedTabIndex,
        mapPadding,
        setMapPadding,
        currentRoute,
        setCurrentRoute,
        scrollRestoration,
        setScrollRestoration,
        debouncedViewport,
        setDebouncedViewport,
        productFilters,
        setProductFilters,
      }}
    >
      {children}
    </TravelPlannerContext.Provider>
  );
};

TravelPlannerProvider.propTypes = {
  children: PropTypes.node,
};

export { TravelPlannerContext, TravelPlannerProvider };
