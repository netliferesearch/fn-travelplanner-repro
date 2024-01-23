// All requests are made from this file. When making requests from React page components,
//  we only use the exported functions from this file.

import { clientGQL } from './client';
import {
  // Site Settings
  allSiteSettingsQuery,
  // Categories and subcategories
  allActivitiyAndServiceCategoriesAndSubcategoriesQuery,
  // Provider
  allProviderQuery,
  oneProviderQuery,
  // Traveller
  oneTravellerQuery,
  oneTravellerIxinerariesQuery,
  // Itinerary
  allItineraryQuery,
  oneItineraryQuery,
  // Service
  allServiceRegionQuery,
  oneServiceQuery,
  allServiceCategoryQuery,
  allServiceCategoriesAndSubcategoriesQuery,
  getServiceByCategoryQuery,
  getThreeServicesBySubCategoryQuery,
  getAllServicesBySubCategoryQuery,
  serviceyBySlug,
  // Activity
  allActivityEventsQuery,
  allActivityRegionQuery,
  oneActivityQuery,
  allActivityCategoryQuery,
  allActivityCategoriesAndSubcategoriesQuery,
  getActivityByCategoryQuery,
  getThreeActivitiesBySubCategoryQuery,
  getAllActivitiesBySubCategoryQuery,
  activityBySlug,
  // Region and place
  allRegionAndPlaceQuery,
  // Region
  allRegionQuery,
  oneRegionQuery,
  // Place
  allPlaceQuery,
  allPlaceTitleQuery,
  allPlaceFullQuery,
  onePlaceQuery,
  // Article
  allArticleQuery,
  oneArticleQuery,
  allArticleCategoryQuery,
  // HomePage
  allHomePageQuery,
  oneHomePageQuery,
  // Page
  allPagesQuery,
  onePageQuery,
  // Search
  allSearchItemsQuery,
  // Facility
  allFacilityQuery,
  // Campaign
  allCampaignQuery,
  oneCampaignQuery,
  // Register
  allRegisterQuery,
  oneRegisterQuery,
  // One service category
  oneServiceCategoryQuery,
  // Document (generic)
  oneDocumentQuery,
  // Static paths
  allDocumentsForStaticPathCreationQuery,
  // Dynamic sitemap paths
  allDocumentsForDynamicSitemapPathCreationQuery,
  // API calls
  allActivityByRegionAndCategoriesAndSubCategoriesQuery,
  allServiceByRegionAndCategoriesAndSubCategoriesQuery,
} from './queries';

// Use this for debuging
const debug = false;

// Site Settings
export async function getAllSiteSettings() {
  const { data } = await clientGQL.query({ query: allSiteSettingsQuery });
  return {
    ...data?.allSiteSettings,
    allLandingPage: data?.allLandingPage,
    inspirationLanding: data?.allLandingPageInspiration,
    eventsLanding: data?.LandingPageEvents,
  };
}

// Static paths
export async function getDocumentsForStaticPaths() {
  const { data } = await clientGQL.query({ query: allDocumentsForStaticPathCreationQuery });
  return data || null;
}

// Dynamic sitemap paths
export async function getDocumentsForDynamicSitemapPaths() {
  const { data } = await clientGQL.query({ query: allDocumentsForDynamicSitemapPathCreationQuery });
  return data || null;
}

// Categories and subcategories
export async function allActivitiyAndServiceCategoriesAndSubcategories() {
  const { data } = await clientGQL.query({
    query: allActivitiyAndServiceCategoriesAndSubcategoriesQuery,
  });
  return {
    ...data,
  };
}
// Provider
export async function getAllProvider() {
  const { data } = await clientGQL.query({ query: allProviderQuery });
  return data?.allProvider;
}
export async function getOneProvider({ id }) {
  const { data } = await clientGQL.query({
    query: oneProviderQuery,
    variables: { id },
  });
  return data?.Provider;
}

// Traveller
export async function getOneTraveller({ id }) {
  const { data } = await clientGQL.query({
    query: oneTravellerQuery,
    variables: { id },
  });
  return data?.Traveller;
}
export async function getOneTravellerIxineraries({ id }) {
  const { data } = await clientGQL.query({
    query: oneTravellerIxinerariesQuery,
    variables: { id },
  });
  return data?.Traveller;
}

// Itinerary
export async function getAllItinerary() {
  const { data } = await clientGQL.query({ query: allItineraryQuery });
  return data?.allItinerary;
}
export async function getOneItinerary({ id }) {
  const { data } = await clientGQL.query({
    query: oneItineraryQuery,
    variables: { id },
  });
  return data?.Itinerary;
}

// Service
export async function getAllServiceRegion({ regionId }) {
  const { data } = await clientGQL.query({
    query: allServiceRegionQuery,
    variables: { regionId },
  });
  const output = data?.allService;
  return output || null;
}
export async function getOneService({ id }) {
  const { data } = await clientGQL.query({
    query: oneServiceQuery,
    variables: { id },
  });
  return data?.Service;
}
export async function getAllServiceCategories() {
  const { data } = await clientGQL.query({ query: allServiceCategoryQuery });
  return data?.allServiceCategory;
}
export async function getAllServiceCategoriesAndSubcategories() {
  const { data } = await clientGQL.query({ query: allServiceCategoriesAndSubcategoriesQuery });
  return data?.allService;
}
export async function getServicesByCategory({ categoryId }) {
  const { data } = await clientGQL.query({
    query: getServiceByCategoryQuery,
    variables: { categoryId },
  });
  return data?.allService || [];
}
export async function getThreeServicesBySubCategory({ subCategoryId }) {
  const { data } = await clientGQL.query({
    query: getThreeServicesBySubCategoryQuery,
    variables: { subCategoryId },
  });
  return data?.allService || [];
}
export async function getAllServicesBySubCategory({ subCategoryId }) {
  const { data } = await clientGQL.query({
    query: getAllServicesBySubCategoryQuery,
    variables: { subCategoryId },
  });
  return data?.allService || [];
}
export async function getServiceBySlug({ slug }) {
  const { data } = await clientGQL.query({
    query: serviceyBySlug,
    variables: { slug },
  });
  return data || null;
}

// Activity
export async function getAllActivityEvents() {
  const { data } = await clientGQL.query({ query: allActivityEventsQuery });
  const output = data?.allActivity;
  return output || null;
}
export async function getAllActivityRegion({ regionId }) {
  const { data } = await clientGQL.query({
    query: allActivityRegionQuery,
    variables: { regionId },
  });
  const output = data?.allActivity;
  return output || null;
}
export async function getOneActivity({ id }) {
  const { data } = await clientGQL.query({
    query: oneActivityQuery,
    variables: { id },
  });
  return data?.Activity;
}
export async function getAllActivityCategories() {
  const { data } = await clientGQL.query({ query: allActivityCategoryQuery });
  return data?.allActivityCategory;
}
export async function getAllActivityCategoriesAndSubcategories() {
  const { data } = await clientGQL.query({ query: allActivityCategoriesAndSubcategoriesQuery });
  return data?.allActivity;
}
export async function getActivitiesByCategory({ categoryId }) {
  const { data } = await clientGQL.query({
    query: getActivityByCategoryQuery,
    variables: { categoryId },
  });
  return data?.allActivity || [];
}
export async function getThreeActivitiesBySubCategory({ subCategoryId }) {
  const { data } = await clientGQL.query({
    query: getThreeActivitiesBySubCategoryQuery,
    variables: { subCategoryId },
  });
  return data?.allActivity || [];
}
export async function getAllActivitiesBySubCategory({ subCategoryId }) {
  const { data } = await clientGQL.query({
    query: getAllActivitiesBySubCategoryQuery,
    variables: { subCategoryId },
  });
  return data?.allActivity || [];
}

export async function getActivityBySlug({ slug }) {
  const { data } = await clientGQL.query({
    query: activityBySlug,
    variables: { slug },
  });
  return data || null;
}

// All region and place
export async function getAllRegionAndPlace() {
  const { data } = await clientGQL.query({ query: allRegionAndPlaceQuery });
  const output = [...data?.allRegion, ...data?.allPlace.filter(f => f.geopoint !== null)]; // Filter out undefined 'geopoint'
  return output || null;
}
// Region
export async function getAllRegion() {
  const { data } = await clientGQL.query({ query: allRegionQuery });
  const output = data?.allRegion;
  return output || null;
}
export async function getOneRegion({ id }) {
  const { data } = await clientGQL.query({
    query: oneRegionQuery,
    variables: { id },
  });
  return data?.Region;
}

// Place
export async function getAllPlace() {
  const { data } = await clientGQL.query({ query: allPlaceQuery });
  const output = data?.allPlace.filter(f => f.geopoint !== null); // Filter out undefined 'geopoint'
  return output || null;
}
export async function getAllTitlePlace() {
  const { data } = await clientGQL.query({ query: allPlaceTitleQuery });
  const output = data?.allPlace.filter(f => f.geopoint !== null); // Filter out undefined 'geopoint'
  return output || null;
}
export async function getAllPlaceFull() {
  const { data } = await clientGQL.query({ query: allPlaceFullQuery });
  const output = data?.allPlace.filter(f => f.geopoint !== null); // Filter out undefined 'geopoint'
  return output || null;
}
export async function getOnePlace({ id }) {
  const { data } = await clientGQL.query({
    query: onePlaceQuery,
    variables: { id },
  });
  return data?.Place;
}

// Articles
export async function getAllArticles() {
  const { data } = await clientGQL.query({ query: allArticleQuery });
  const output = data?.allArticle;
  return output || null;
}
export async function getOneArticle({ id }) {
  const { data } = await clientGQL.query({
    query: oneArticleQuery,
    variables: { id },
  });
  return data?.Article;
}
export async function getAllArticleCategories() {
  const { data } = await clientGQL.query({ query: allArticleCategoryQuery });
  const output = data?.allArticleCategory;
  return output || null;
}

// HomePage
export async function getAllHomePage() {
  const { data } = await clientGQL.query({ query: allHomePageQuery });
  const output = data?.allHomePage;
  return output || null;
}
export async function getOneHomePage({ id }) {
  const { data } = await clientGQL.query({
    query: oneHomePageQuery,
    variables: { id },
  });
  return data?.HomePage;
}

// Pages
export async function getAllPages() {
  const { data } = await clientGQL.query({ query: allPagesQuery });
  const output = data?.allPage;
  return output || null;
}
export async function getOnePage({ id }) {
  const { data } = await clientGQL.query({
    query: onePageQuery,
    variables: { id },
  });
  return data?.Page;
}

// Search
export async function getAllSearchItems() {
  debug && console.log('🔎 Getting all search items');
  const { data } = await clientGQL.query({ query: allSearchItemsQuery });
  const output = {
    ...data,
  };
  return output || null;
}

// Facility
export async function getAllFacility() {
  const { data } = await clientGQL.query({ query: allFacilityQuery });
  return data?.allFacility;
}

// Campaign
export async function getAllCampaign() {
  const { data } = await clientGQL.query({ query: allCampaignQuery });
  return data?.allCampaign;
}
export async function getOneCampaign({ id }) {
  const { data } = await clientGQL.query({ query: oneCampaignQuery, variables: { id } });
  return data?.Campaign;
}

// Register
export async function getAllRegister() {
  const { data } = await clientGQL.query({ query: allRegisterQuery });
  return data?.allRegister;
}
export async function getOneRegister({ id }) {
  const { data } = await clientGQL.query({ query: oneRegisterQuery, variables: { id } });
  return data?.Register;
}

// Service category object
export async function getServiceCategoryObj({ id }) {
  const { data } = await clientGQL.query({ query: oneServiceCategoryQuery, variables: { id } });
  return data?.ServiceCategory;
}

// Document ~ generic call that fetches any document by its '_id'
export async function getOneDocument({ id }) {
  const { data } = await clientGQL.query({
    query: oneDocumentQuery,
    variables: { id },
  });
  return data?.Document?.__typename;
}

// Get all activity by region AND get categories and subcategories
export async function allActivityByRegionAndCategoriesAndSubCategories({ regionId }) {
  const { data } = await clientGQL.query({
    query: allActivityByRegionAndCategoriesAndSubCategoriesQuery,
    variables: { regionId },
  });
  const output = data;
  return output || null;
}
// Get all serivce by region AND get categories and subcategories
export async function allServiceByRegionAndCategoriesAndSubCategories({ regionId }) {
  const { data } = await clientGQL.query({
    query: allServiceByRegionAndCategoriesAndSubCategoriesQuery,
    variables: { regionId },
  });
  const output = data;
  return output || null;
}
