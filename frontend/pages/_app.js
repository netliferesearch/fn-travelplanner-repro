import 'focus-visible';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  const altRoutes = pageProps.altRoutes || { no: '/no', en: '/en', de: '/de' };

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} altRoutes={altRoutes} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
