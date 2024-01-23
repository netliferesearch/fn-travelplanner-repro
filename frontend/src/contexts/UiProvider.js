import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UiContext = createContext({
  uiDarkMode: false,
  uiIsLoading: false,
  uiIsAnimating: false,
  uiVisitedUrls: [],
});

const UiProvider = ({ children }) => {
  const [uiDarkMode, setUiDarkMode] = useState(false);
  const [uiIsLoading, setUiIsLoading] = useState(false);
  const [uiIsAnimating, setUiIsAnimating] = useState(false);
  const [uiVisitedUrls, setUiVisitedUrls] = useState([]);

  return (
    <UiContext.Provider
      value={{
        uiDarkMode,
        setUiDarkMode,
        uiIsLoading,
        setUiIsLoading,
        uiIsAnimating,
        setUiIsAnimating,
        uiVisitedUrls,
        setUiVisitedUrls,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

UiProvider.propTypes = {
  children: PropTypes.node,
};

export { UiContext, UiProvider };
