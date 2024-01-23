import groq from 'groq';
import { clientGROQ, _clientGROQ } from './client';

// Travellers
export const getAllTravellerIds = async id => {
  const query = groq`*[_type == "Traveller" && _id == $id]{
    _id,
    itineraries[]->{
      _id,
      plan[]->{
        _id,
        products[]->{
          _id,
        }
      }
    }
  }`;
  return _clientGROQ.fetch(query, { id }); // _clientGROQ skips both CDN and memory caching
};

export const getAllTravellerItineraries = async id => {
  const query = groq`*[_type == "Traveller" && _id == $id]{
    itineraries[]->{
      _id,
    }
  }`;
  return _clientGROQ.fetch(query, { id }); // _clientGROQ skips both CDN and memory caching
};

export const getAllTravellerIxineraries = async id => {
  const query = groq`*[_type == "Traveller" && _id == $id][0]{
    ixineraries,
  }`;
  return _clientGROQ.fetch(query, { id }); // _clientGROQ skips both CDN and memory caching
};

export const getActivitiesByPlaceId = async id => {
  const query = groq`*[
    _type == "Activity" &&
    place._ref == $id &&
    !(_id in path('drafts.**')) &&
    defined(place) &&
    defined(region) &&
    defined(geopoint.lng) &&
    defined(geopoint.lat)
  ] | order(title){
    category->{_id, title, locTitle},
    cloudinaryImages,
    geopoint,
    images,
    locDescription,
    locShortDescription,
    locSlug,
    locTitle,
    place->{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
      geopoint,
      region->{
        _id,
      },
      important
    },
    region->{_id, title, locTitle, locShortDescription, slug, locSlug},
    slug,
    subCategory->{_id, title, locTitle},
    title,
    _id,
    _type
  }`;
  return clientGROQ.fetch(query, { id });
};

export const getServicesByPlaceId = async id => {
  const query = groq`*[
    _type == "Service" &&
    place._ref == $id &&
    !(_id in path('drafts.**')) &&
    defined(place) &&
    defined(region) &&
    defined(geopoint.lng) &&
    defined(geopoint.lat)
  ] | order(title){
    category->{_id, title, locTitle},
    cloudinaryImages,
    geopoint,
    images,
    locDescription,
    locShortDescription,
    locSlug,
    locTitle,
    place->{
      _id,
      title,
      locTitle,
      slug,
      locSlug,
      geopoint,
      region->{
        _id,
      },
      important
    },
    provider->,
    region->{_id, title, locTitle, locShortDescription, slug, locSlug},
    slug,
    subCategory->{_id, title, locTitle},
    title,
    _id,
    _type
  }`;
  return clientGROQ.fetch(query, { id });
};
