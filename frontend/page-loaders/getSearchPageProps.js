import { debugBuildTime, isrRevalidateLong } from '../config';
import { getSiteSettingsEssential } from '../groq/requests/getSiteSettingsEssential';
import resolveLink from '../src/utils/resolveLink';

export default function getSearchPageProps() {
  const getStaticProps = async () => {
    debugBuildTime && console.time('⏳ Time to fetch SearchPage data');
    const siteSettingsEssential = await getSiteSettingsEssential();
    debugBuildTime && console.timeEnd('⏳ Time to fetch SearchPage data');

    const siteSettings = {
      ...siteSettingsEssential,
    };

    return {
      props: {
        siteSettings,
        altRoutes: {
          no: resolveLink('no', ['search']),
          en: resolveLink('en', ['search']),
          de: resolveLink('de', ['search']),
        },
      },
      revalidate: isrRevalidateLong,
    };
  };

  return getStaticProps;
}
