import groq from 'groq';
import { _clientGROQ } from '../client';

export const getPrintedPlan = async ({ id }) => {
  const query = groq`*[_type == "Ixinerary" && _id == $id && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    editHash, // TODO: ideally we shouldn't have to fetch it!
    title,
    duration,
    official,
    plan[]{
      ...,
      place {
        ...,
        placeRef->{
          locTitle,
          locShortDescription,
          image{public_id},
        },
      },
      products[]{
        ...,
        activityx{
          ...,
          activityRef->{
            _id,
            "address": address.postalAddress,
            "telephone": contactPoint.telephone,
            "email": contactPoint.email,
            "locWebUrl": contactPoint.locWebUrl,
          },
        },
        servicex{
          ...,
          serviceRef->{
            _id,
            "address": address.postalAddress,
            "telephone": contactPoint.telephone,
            "email": contactPoint.email,
            "locWebUrl": contactPoint.locWebUrl,
          },
        },
      }
    }
  }`;
  return _clientGROQ.fetch(query, { id });
};
