import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// Utils
import { getUrlLang } from '../utils/langUtil';

const LanguageContext = createContext({
  language: 'no',
});

const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const initialHtmlLang = getUrlLang(router.asPath);
  const [language, setLanguage] = useState(initialHtmlLang);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export { LanguageContext, LanguageProvider };
