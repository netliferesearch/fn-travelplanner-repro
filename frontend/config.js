// This doesn't seem to return the wanted output (window.location.hostname)
// at build time, because window is not available in node.
const hostname =
  typeof window === 'object' && window.location.hostname !== ''
    ? window.location.hostname
    : 'localhost';

const localStorage =
  typeof window === 'object' && window.localStorage !== '' ? window.localStorage : undefined;

const location = typeof window === 'object' && window.location !== '' ? window.location : undefined;

const inDevelopment = process.env.NODE_ENV === 'development';
const inProduction = process.env.NODE_ENV === 'production';
const inTest = process.env.NODE_ENV === 'test';

// * Debug mode
export const debugBuildTime = inDevelopment || inTest || false; // The last one is to force true locally

// * i18n: The languages we support
export const languages = [
  { name: 'no', title: 'Norwegian', lang: 'no', path: '/' },
  { name: 'en_GB', title: 'English (UK)', lang: 'en', path: '/en/' },
  { name: 'de_DE', title: 'German', lang: 'de', path: '/de/' },
  // { name: 'da_DK', title: 'Danish', lang: 'da', path: '/da/', fallback: 'no' }, // Exmple where 'Norwegian' might override 'English' as a fallback
];
export const languageSelect = language => languages.filter(f => f.lang === language)[0];
export const languageSelectInactive = language => languages.filter(f => f.lang !== language);
export const languageDefault = languageSelect('no');

// * Secrets
const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;
// * Warning
const showWarningProduction = process.env.ENVIRONMENT === 'develop' && dataset === 'production';
// * Public
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// * Default 'guest' user (Guest Guest, verified)
const guestUserId = '25456c09-7ee2-45d8-9f68-fd939d116b77';

// * Category ID for 'services' > 'transport'
const categoryIdTransport = '48bc50b3-bfff-4b14-9760-f00a1205de35';

// * cloudinary cred
const cloudinaryName = 'djew0njor';

const mapboxApiAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
// * ApolloClient > link > HttpLink > uri
const apiSanity = `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`;

// * Fetch Api (direct)
const apiSanityFetchApi = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`;

// * ApolloClient > defaultOptions > query > fetchPolicy
// Use 'no-cache' to avoid caching, 'cache-first' is default
// TODO: go over to 'cache-first' policy once we're in production
// const fetchPolicy = inProduction ? 'cache-first' : 'no-cache';
const fetchPolicy = inProduction ? 'no-cache' : 'no-cache';

export const PORT_LOCAL_SANITY = '3000';
export const PORT_LOCAL_NEXT = '4000'; // Just a reference. This is passed at 'scripts' level in 'package.json'.
export const URL_LOCAL = `http://${hostname}`;

// * Netlify's build environment variables
// See: https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
// URL: This URL represents the main address to your site. It can be either a Netlify subdomain or your own custom domain if you set one;
//      for example, https://petsof.netlify.app or https://www.petsofnetlify.com.
// DEPLOY_URL: This URL represents the unique URL for an individual deploy. It starts with a unique ID that identifies the deploy;
//      for example, https://5b243e66dd6a547b4fee73ae--petsof.netlify.app.
const netlifyUrl = process.env.URL;
const netlifyDeployPrimeUrl = process.env.DEPLOY_PRIME_URL;

// * Get the base url dynamically so that we can resolve where we are AT RUNTIME
// This is important because a string variable will stay set at build-time,
// which will give us a wrong path as 'window.location.hostname' is not available
// within 'node'.
export const getBaseUrl = () => {
  // Attempt to get values from 'netlify.toml' file first
  if (baseUrl) {
    return baseUrl;
  }
  // Use 'Netlify' environment variables if available
  if (netlifyUrl && netlifyDeployPrimeUrl) {
    if (netlifyUrl === netlifyDeployPrimeUrl) {
      // This is 'production'
      return netlifyUrl;
    }
    // This is 'staging'
    return netlifyDeployPrimeUrl;
  }
  return inDevelopment ? `http://${hostname}:${PORT_LOCAL_NEXT}` : `https://${hostname}`;
};

// * Date formatting
const monthFormat = 'dd/MM/yyyy'; // Norway and UK
const monthFormatUs = 'MM/dd/yyyy'; // US, for when that time comes

// * Time-based variables
const plannerStatusTimeout = '5000'; // 5 seconds (in milliseconds)
const myPlanLSTimeout = '1800000'; // 30 minutes (in milliseconds)

// * Use this to update tests
const updateTests = false;

// * 'myPlan'
// Default values
const defaultMyPlan = {
  _type: 'Ixinerary', // TODO: Mission X
  title: '',
  duration: {
    timeStart: '',
    timeEnd: '',
  },
  plan: [],
  official: false,
};

// * 'traveller'
// Fjord Norway's default ID
const travellerFjordNorwayId = '83c4aee1-63a0-46ae-9098-63d0579afbed';
// Default values
const defaultTraveller = {
  _type: 'Traveller',
  itineraries: [], // List of 'itinerary' objects
  ixineraries: [], // List of 'ixinerary' objects
  // Values below are defined by 'Auth0', but are initialized here
  firstName: '',
  lastName: '',
  email: '',
  emailVerified: false,
  lastUpdated: '',
  locale: '',
  name: '',
  nickname: '',
  picture: '',
  sub: '',
};

// * Page titles
const pageTitleAppend = ' - Fjord Norway';
const pageTitleFallback = 'Fjord Norway';

// * Page types
const pageTypes = [
  'activity',
  'article',
  'campaign',
  'categories', // TODO: resolveLink() doesn't take this into consideration
  'events',
  'fullscreen',
  'home',
  'page',
  'place',
  'profile',
  'provider', // TODO: resolveLink() doesn't take this into consideration - but we aren't using this yet
  'region',
  'register',
  'search',
  'service',
  'travel-planner',
];
const pageTypesAddedByResolveLink = [
  'activities',
  'attractions',
  'destinations',
  'inspiration',
  'services',
];
const pageTypesAll = [...pageTypes, ...pageTypesAddedByResolveLink];

// * Map
// See: https://docs.mapbox.com/api/navigation/directions/
// From docs: For automotive routing. This profile shows the fastest routes by preferring high-speed roads like highways. Requests using this profile accept up to 25 coordinates.
const defaultMapCoordinatesMax = 25;
// Default padding for map
const defaultMapPadding = 50;
// Transition duration in milliseconds
const defaultMapTransition = 1000;

// Zoom levels for the map
const zoom = [
  {
    name: 'Extra-Remote',
    level: 7,
  },
  {
    name: 'Remote',
    level: 8,
  },
  {
    name: 'Rural',
    level: 10,
  },
  {
    name: 'Urban',
    level: 12,
  },
  {
    name: 'MaxAfterZoom',
    level: 24,
  },
];
const zoomMaxLevel = 'Urban';
const zoomShowProductsLevel = 'Rural';

// * Google Ads
const adDfpNetworkId = '22381252584';
const adSite = 'fjordnorway';

// * Google Tag Manager
const gtmId = 'GTM-NBTRKT';

// * Day trip global variables
const MINIMUM_DURATION = 2;
const MAXIMUM_DURATION = 10;

export const config = {
  adDfpNetworkId,
  adSite,
  apiSanity,
  apiSanityFetchApi,
  categoryIdTransport,
  cloudinaryName,
  dataset,
  defaultMapCoordinatesMax,
  defaultMapPadding,
  defaultMapTransition,
  defaultMyPlan,
  defaultTraveller,
  fetchPolicy,
  gtmId,
  guestUserId,
  hostname,
  inDevelopment,
  inProduction,
  inTest,
  localStorage,
  location,
  mapboxApiAccessToken,
  monthFormat,
  monthFormatUs,
  myPlanLSTimeout,
  pageTypes,
  pageTypesAll,
  pageTitleAppend,
  pageTitleFallback,
  plannerStatusTimeout,
  projectId,
  showWarningProduction,
  travellerFjordNorwayId,
  updateTests,
  zoom,
  zoomMaxLevel,
  zoomShowProductsLevel,
  MINIMUM_DURATION,
  MAXIMUM_DURATION,
};

export const isrRevalidateShort = process.env.ENVIRONMENT === 'develop' ? 60 * 1 : 60 * 5; // 1 minute in develop, 5 minutes in production
export const isrRevalidate = process.env.ENVIRONMENT === 'develop' ? 60 * 5 : 60 * 30; // 5 minutes in develop, 30 minutes in production
export const isrRevalidateMedium = process.env.ENVIRONMENT === 'develop' ? 60 * 5 : 60 * 60 * 2; // 5 minutes in develop, 2 hours in production
export const isrRevalidateLong = process.env.ENVIRONMENT === 'develop' ? 60 * 5 : 60 * 60 * 8; // 5 minutes in develop, 8 hours in production
