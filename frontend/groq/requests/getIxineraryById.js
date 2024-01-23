import groq from 'groq';
import { clientGROQ } from '../client';

export const getIxineraryById = async id => {
  const query = groq`*[_type == "Ixinerary" && _id == $id && !(_id in path('drafts.**'))][0]{
    _id,
    editHash,
  }`;
  return clientGROQ.fetch(query, { id });
};
