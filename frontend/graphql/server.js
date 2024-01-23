//! This File is only for mutations that happens on the server

import { createIfNotExists } from './mutations';

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_API_DATASET;
const sanityWriteToken = process.env.SANITY_STUDIO_API_TOKEN;

const mutationUrl = dryRun =>
  `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?dryRun=${dryRun}`;

const serverMutate = async (mutations, queryType, dryRun) => {
  const body = {
    mutations,
  };
  return fetch(mutationUrl(dryRun), {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sanityWriteToken}`,
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(result => console.log(`[client.js] ✅ ${queryType}`, result))
    .catch(error => console.error(`[client.js] ⛔ ${queryType}`, error));
};

export const serverSubmitActivityDraft = async (obj, { dryRun = false }) => {
  const mutations = [createIfNotExists(obj)];
  return serverMutate(mutations, 'submitActivityDraft', dryRun);
};
