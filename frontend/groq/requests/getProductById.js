import groq from 'groq';
import { clientGROQ } from '../client';

export const getProductById = id => {
  const query = groq`*[
    _id == $id
  ]{
    _id,
    _type,
    title,
    locTitle,
    category->{_id, title, locTitle},
    subCategory->{_id, title, locTitle},
    place->{
      title,
      locTitle,
    },
    region->{
      title,
      locTitle,
    },
  }`;
  return clientGROQ.fetch(query, { id }).then(result => result);
};
