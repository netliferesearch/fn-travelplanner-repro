import groq from 'groq';
import { _clientGROQ } from '../client';

export const getPlacesMetaData = async () => {
  const query = groq`*[
    _type == "Place"
    && !(_id in path('drafts.**'))
    && defined(geopoint.lng)
    && defined(geopoint.lat)
    && defined(region->_id)
  ]{
    _id,
    geopoint,
    important,
    locShortDescription,
    locDescription,
    fjordNorwayPlace,
    publicAccess,
    slug,
    smokingAllowed,
    region->{
      _id,
    },
    title
  }`;
  return _clientGROQ.fetch(query); // Ignore cache
};
