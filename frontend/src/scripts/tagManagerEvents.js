import { getTranslation } from '../utils/langUtil';
import { getProductById } from '../../groq/requests/getProductById';

const debug = false;

const sendTrackingEvent = data => {
  if (typeof window !== 'undefined') {
    debug && console.log('This is being sent to Analytics', data);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
  return null;
};

// Event for creating, saving or sharing calendar
export const trackCalendar = ({ trackingType }) => {
  const eventType = trackingType ?? 'saveCalendar';
  const calendarData = {
    event: `web.${eventType}`,
  };
  debug && console.log('from trackcalendar', { calendarData });
  sendTrackingEvent(calendarData);
};

// Event adding activity, service or trip to calendar
export const trackActivity = ({ trackingType, item }) => {
  const productTitle = getTranslation({
    language: 'no',
    translationObj: item?.locTitle,
    fallback: item?.title,
  });
  const event = trackingType ?? 'add';
  const productType = item?._type;
  const productCategory = item?.category?.locTitle?.no || item?.category?.title;
  const productSubCategory = item?.subCategory?.locTitle?.no || item?.subCategory?.title;
  const destination = item?.region?.locTitle?.no || item?.region?.title;
  const place = item?.place?.locTitle?.no || item?.place?.title;

  const activityData = {
    event: `web.${event}`,
    productTitle,
    product_type: productType,
    product_category: productCategory,
    product_sub_category: productSubCategory,
    destination,
    place,
  };

  sendTrackingEvent(activityData);
};

export const trackProduct = ({ trackingType, item }) => {
  const productTitle = getTranslation({
    language: 'no',
    translationObj: item?.locTitle,
    fallback: item.title,
  });
  const event = trackingType;
  const productType = item?._type;
  const productCategory = item?.category?.locTitle?.no || item?.category?.title;
  const productSubCategory = item?.subCategory?.locTitle?.no || item?.subCategory?.title;
  const destination = item?.region?.locTitle?.no || item?.region?.title;
  const place = item?.place?.locTitle?.no || item?.place?.title;

  const productData = {
    productTitle,
    event,
    product_type: productType,
    product_category: productCategory,
    product_sub_category: productSubCategory,
    destination,
    place,
  };

  sendTrackingEvent(productData);
};

export const trackVirtualPageview = ({
  pagePath,
  item,
  attraction,
  statusCode,
  isPlanPage,
  siteSettings,
  currentCategory,
  dataHome,
}) => {
  // To get Page Title for landing pages
  // Types of objects in siteSettings - inspirationLanding, allLandingPage, eventsLanding
  const { inspirationLanding, allLandingPage, eventsLanding } = siteSettings || {};
  // Get language from pagePath to get correct translation for Page Title
  let locTitle;
  if (allLandingPage) {
    locTitle = allLandingPage[0].locTitle;
  } else if (inspirationLanding) {
    locTitle = inspirationLanding[0].locTitle;
  } else if (eventsLanding) {
    locTitle = eventsLanding?.locTitle;
  } else if (currentCategory) {
    locTitle = currentCategory?.locTitle;
  } else if (dataHome) {
    locTitle = dataHome?.locTitle;
  }
  let landingPageTitle;
  if (locTitle) {
    landingPageTitle = '';
    // Special usecase for naming 404
  } else if (statusCode === 404) {
    landingPageTitle = '404';
    // Special use case for naming Plan page
  } else if (isPlanPage) {
    landingPageTitle = 'Plan page';
  }

  // Get the destination of product (item.region), attraction (attraction.region) or destination (item.title)
  const destination =
    item?.region?.title || attraction?.region?.title || item?.title || 'Fjord Norway';
  const pageTitle = '';

  const trackingData = {
    statusCode,
    fn_destination: destination,
    ...(item?.articleCategory?.locTitle?.en === 'Tour suggestions'
      ? {
          tf_content: item?.articleCategory?.locTitle?.en,
          tf_time: item?.metadata?.duration?.en,
          tf_distance: item?.metadata?.distance?.en,
          tf_transport: item?.metadata?.transport?.en,
          tf_period: item?.season?.en,
        }
      : {}),
    event: 'virtual_pageview',
    page_title: pageTitle || landingPageTitle,
    page_path: pagePath,
  };
  sendTrackingEvent(trackingData);
};

const createItem = item => {
  debug && console.log('from_create', item);
  const newItem = {
    item_name: getTranslation({
      language: 'no',
      translationObj: item?.locTitle,
      fallback: item.title,
    }), // insert productTitle
    item_brand: item?.region?.locTitle?.no || item?.region?.title, // insert destination
    item_category: item?._type || item?.type, // Insert product_type
    item_category2: item?.category?.locTitle?.no || item?.category?.title, // Insert product_category
    item_category3: item?.subCategory?.locTitle?.no || item?.subCategory?.title, // insert product sub_category
    item_place: item?.place?.locTitle?.no || item?.place?.title, // insert place
  };
  return newItem;
};

// Supports trackingTypes view_item, add_to_cart, remove_from_cart
export const trackEcommerceEvent = async ({ trackingType, item }) => {
  const productType = item?._type || item?.type;
  if (
    productType?.toLowerCase().includes('service') ||
    productType?.toLowerCase().includes('activity')
  ) {
    if (item?.isFullItem === false) {
      const id = item._id || item.id;
      const [fullItem] = await getProductById(id);
      const trackingData = {
        event: trackingType,
        ecommerce: {
          items: [createItem(fullItem)],
        },
      };
      sendTrackingEvent(trackingData);
    } else {
      const trackingData = {
        event: trackingType,
        ecommerce: {
          items: [createItem(item)],
        },
      };
      sendTrackingEvent(trackingData);
    }
  }
};

export const trackTourSuggestionEvent = ({ trackingType, ecommerce }) => {
  const trackingData = {
    event: trackingType,
    ecommerce,
  };
  sendTrackingEvent(trackingData);
};

export const trackCart = ({ trackingType, transactionId, plan }) => {
  const planItems = [];
  plan.forEach(plannedPlace => {
    const placeRegion = plannedPlace?.place?.region?.title;
    plannedPlace?.products.forEach(({ activityx, servicex }) => {
      if (activityx) {
        planItems.push(createItem({ ...activityx, region: { title: placeRegion } }));
      }
      if (servicex) planItems.push(createItem({ ...servicex, region: { title: placeRegion } }));
    });
  });
  const trackingData = {
    event: trackingType,
    currency: 'NOK',
    transactionId,
    ecommerce: {
      items: planItems,
    },
  };
  sendTrackingEvent(trackingData);
};

export const trackSearch = ({ trackingType, value, hitCount }) => {
  const trackingData = {
    event: trackingType ?? 'search',
    searchTerm: value,
    hitCount: hitCount ?? 0,
    hasHits: !!hitCount ?? false,
  };
  debug && console.log('from trackSearch', { trackingData });
  sendTrackingEvent(trackingData);
};

export const trackLanguageSelector = ({ trackingType, fromLanguage, toLanguage, position }) => {
  const trackingData = {
    event: trackingType ?? 'languageSwitch',
    fromLanguage,
    toLanguage,
    position,
  };
  debug && console.log('from trackLanguageSelector', { trackingData });
  sendTrackingEvent(trackingData);
};
