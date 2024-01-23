import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import imageUrlBuilder from '@sanity/image-url';
import { config } from '../config';
import { createOrReplace } from './mutations';

const { apiSanity, dataset, fetchPolicy, projectId, inDevelopment } = config;

// Use this to debug locally
const debug = inDevelopment && true;

// Mutations - Get the authentication token from local storage if it exists

// * Fetching (R)
export const clientGQL = new ApolloClient({
  link: new HttpLink({ uri: apiSanity }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: { query: { fetchPolicy } },
});

// * Mutating (CUD) - We don't use Apollo here
// Post mutation with callback
export const clientMutateWithCallback = async (
  mutations,
  queryType,
  dryRun,
  callbackSuccess,
  callbackError,
  baseUrl = '',
) => {
  const body = {
    mutations,
    dryRun,
  };
  debug && console.log(`[client.js] 🔗 ${baseUrl}/api/mutation`);
  fetch(`${baseUrl}/api/mutation`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (!response.ok) {
        const errorBody = {
          source: `[client.js] ⛔ ${queryType}`,
          errorStatus: response.status,
          errorStatusText: response.statusText,
        };
        debug && console.error(errorBody);
        return errorBody;
      }
      return response.json();
    })
    .then(result => {
      if (result.errorStatus) {
        // Handle '!response.ok'
        debug && console.log(`[client.js] ⛔ result ${queryType}`, result);
        callbackError(result);
      } else {
        debug && console.log(`[client.js] ✅ result ${queryType}`, result);
        callbackSuccess();
      }
      return result;
    })
    .catch(error => {
      debug && console.error(`[client.js] ⛔ ${queryType}`, error);
      callbackError();
      return error.message;
    });
};

export const clientSaveItineraryWithCallback = async (
  itinerary,
  dryRun,
  callbackSuccess,
  callbackError,
) => {
  const body = {
    mutations: [createOrReplace(itinerary)],
    dryRun,
  };
  fetch('/api/itinerary/save', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (!response.ok) {
        const errMsg = `[client.js] ⛔ 'clientSaveItineraryWithCallback' -> Network response was not OK - response ${JSON.stringify(
          response,
        )}`;
        debug && console.error(errMsg);
        throw new Error(errMsg);
      }
      return response.json();
    })
    .then(result => {
      debug && console.log(`[client.js] ✅ result 'clientSaveItineraryWithCallback'`, result);
      callbackSuccess();
      return result;
    })
    .catch(error => {
      debug && console.error(`[client.js] ⛔ 'clientSaveItineraryWithCallback'`, error);
      callbackError();
      return error.message;
    });
};

// Get a pre-configured url-builder from your sanity client
const imgBuilder = imageUrlBuilder({
  projectId,
  dataset,
});

// Use this function to correctly extract the image url.
// This function has a few methods that can be exposed. See https://www.sanity.io/docs/image-url
export const imageBuilderResolver = source => imgBuilder.image(source);
