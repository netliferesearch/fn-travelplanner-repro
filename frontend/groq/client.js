import { createClient } from '@sanity/client';
import NodeCache from 'node-cache';
import { config } from '../config';

const { dataset, projectId, inProduction } = config;
const sanityCache = new NodeCache({ stdTTL: 60 * 5 });

const clientOptions = {
  projectId,
  dataset,
  apiVersion: '2022-03-20',
};

const enableMemoryCache = true;
const debug = !inProduction && false;

// Proxy that wraps GROQ client and caches results in memory
const proxyHandler = {
  get(target, prop, receiver) {
    const method = target[prop];

    if (method instanceof Function) {
      return (...args) => {
        const cacheKey = JSON.stringify(args).replace(/\s+/g, ' ');
        let result;
        const cachedResponse = sanityCache.get(cacheKey);

        if (cachedResponse && enableMemoryCache) {
          result = cachedResponse;
          debug && console.log(`(Cache HIT) clientGROQ.${prop} -> ${cacheKey.slice(0, 50)}...`);
        } else {
          result = method.apply(target, args);
          sanityCache.set(cacheKey, result);
          debug && console.log(`(Cache MISS) clientGROQ.${prop} -> ${cacheKey.slice(0, 50)}...`);
        }

        return result;
      };
    }

    return Reflect.get(target, prop, receiver);
  },
};

// GROQ client proxy that includes CDN and memory caching
export const clientGROQ = new Proxy(
  createClient({
    ...clientOptions,
    useCdn: Boolean(inProduction),
  }),
  proxyHandler,
);

export const clientWithToken = createClient({
  ...clientOptions,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: false,
});

// Vanilla GROQ client without CDN or memory caching
// * Use this if you depend on having fresh data
export const _clientGROQ = createClient({
  ...clientOptions,
  useCdn: false,
});
