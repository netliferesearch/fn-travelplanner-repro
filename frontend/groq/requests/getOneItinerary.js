import groq from 'groq';
import { clientGROQ } from '../client';

export const getOneItinerary = async ({ id }) => {
  const query = groq`*[_type == "Itinerary" && _id == $id && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    editHash,
    title,
    duration,
    official,
    plan[]->{
      "__typename": _type,
      _id,
      duration,
      place->{
        "__typename": _type,
        _type,
        _id,
        title,
        slug,
        geopoint,
        important,
      },
      products[]->{
        "__typename": _type,
        _id,
        duration,
        activity->{
          "__typename": _type,
          _type,
          _id,
          title,
          locTitle,
          locShortDescription,
          slug,
          locSlug,
          category->{_id, title, locTitle},
          subCategory->{_id, title, locTitle},
          geopoint{lat, lng},
          place->{
            _id,
            title,
            geopoint{lat, lng},
            region->{
              _id,
            },
            important,
          },
          images{
            mainImage,
            imageRef->{
              cloudinaryId,
              url,
            },
          },
        },
        service->{
          "__typename": _type,
          _type,
          _id,
          title,
          locTitle,
          locShortDescription,
          slug,
          locSlug,
          category->{_id, title, locTitle},
          subCategory->{_id, title, locTitle},
          geopoint{lat, lng},
          place->{
            _id,
            title,
            geopoint{lat, lng},
            region->{
              _id,
            },
            important,
          },
          images{
            mainImage,
            imageRef->{
              cloudinaryId,
              url,
            },
          },
        },
      }
    }
  }`;
  return clientGROQ.fetch(query, { id });
};
