import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';

const LanguageSelectorContext = createContext({});

function LanguageSelectorProvider({ children, altRoutes }) {
  return (
    <LanguageSelectorContext.Provider value={{ altRoutes }}>
      {children}
    </LanguageSelectorContext.Provider>
  );
}

function useAltRoutes() {
  const { altRoutes } = useContext(LanguageSelectorContext);
  const router = useRouter();

  function navigate(lang) {
    // Keep the query string while switching between languages
    if (typeof window === 'undefined') return;
    const query = new URLSearchParams(window.location.search).toString();
    const queryString = query ? `?${query}` : '';

    // If no altRoute is defined, navigate to the homepage for the correct language
    if (!altRoutes?.[lang]) {
      router.push(`/${lang}`);
      return;
    }

    // Navigate to the correct page
    router.push(altRoutes[lang] + queryString);
  }

  return { navigate, altRoutes };
}

export { LanguageSelectorProvider, useAltRoutes };
