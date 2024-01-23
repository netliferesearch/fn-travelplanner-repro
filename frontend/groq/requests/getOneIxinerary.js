import groq from 'groq';
import { _clientGROQ } from '../client';

export const getOneIxinerary = async ({ id }) => {
  const query = groq`*[_type == "Ixinerary" && _id == $id && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    editHash, // TODO: ideally we shouldn't have to fetch it!
    title,
    duration,
    official,
    plan[]{
      ...,
      products[]{
        ...,
        activityx{
          ...,
          categoryRef->{_id, title, locSlug, locTitle},
        },
        servicex{
          ...,
          categoryRef->{_id, title, locSlug, locTitle},
        },
      },
    },
  }`;
  return _clientGROQ.fetch(query, { id });
};
