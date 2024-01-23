import groq from 'groq';
import { clientWithToken } from '../client';

export const getAllPlannedPlaces = async () => {
  const query = groq`*[
    _type == "PlannedPlace"
  ]{
    _id
  }`;

  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};

export const getAllPlannedActivities = async () => {
  const query = groq`*[
    _type == "PlannedActivity" && (_id in path('drafts.**'))
  ]{
    _id
  }`;

  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};

export const getAllPlannedServices = async () => {
  const query = groq`*[
    _type == "PlannedService" && (defined(place) || defined(itinerary))
  ]{
    _id
  }`;
  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};

export const getAllArticles = async () => {
  const query = groq`*[
    _type == "Article"
  ]{
    _id
  }`;
  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};
export const getAllServices = async () => {
  // const query = groq`*[_type == 'Service' && (_id in path('drafts.**'))]{_id}`;
  const query = groq`*[_type == 'Service']{_id}`;

  const response = await clientWithToken.fetch(query);
  return response;
};

export const getAllActivities = async () => {
  const query = groq`*[
    // _type == "Activity"
    _type == "Activity" && (_id in path('drafts.**'))
  ]{
    _id
  }`;
  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};

export const getAllTravellersWithItineraries = async () => {
  const query = groq`*[
    _type == "Traveller" && (defined(itineraries))
  ]{
    _id
  }`;
  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};

export const getTravellersWithNonEmptyItineraries = async () => {
  const query = groq`*[_type == "Traveller" && defined(itineraries) && count(itineraries) > 0]{
    _id,
  }`;
  const response = await clientWithToken.fetch(query);
  return response.map(obj => obj);
};
