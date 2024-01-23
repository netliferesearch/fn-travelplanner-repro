import getSearchPageProps from '../../page-loaders/getSearchPageProps';
import SearchResults from '../../src/components/templates/SearchResults';

const LANG = 'en';

export const getStaticProps = getSearchPageProps();

export const SearchPage = ({ siteSettings }) => (
  <SearchResults paramsLang={LANG} dataAllSiteSettings={siteSettings} />
);

export default SearchPage;
