import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TravellerContext = createContext({
  traveller: {},
});

const TravellerProvider = ({ children }) => {
  const [traveller, setTraveller] = useState({});

  return (
    <TravellerContext.Provider
      value={{
        traveller,
        setTraveller,
      }}
    >
      {children}
    </TravellerContext.Provider>
  );
};

TravellerProvider.propTypes = {
  children: PropTypes.node,
};

export { TravellerContext, TravellerProvider };
