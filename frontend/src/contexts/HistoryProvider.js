import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const HistoryContext = createContext({
  history: [],
});

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const router = useRouter();

  // Create a new array with the history and add a new item every time the router changes
  useEffect(() => {
    setHistory([...history, router.route]);
  }, [router]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

HistoryProvider.propTypes = {
  children: PropTypes.node,
};

export { HistoryContext, HistoryProvider };
