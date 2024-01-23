import groq from 'groq';
import { clientGROQ } from '../../groq/client';

const getSearchResults = async ({ query, page, language, paginationLimit }) => {
  const currentQuery = String(query || '');
  const currentPage = Number(page || 1);
  const currentPagination = Number(paginationLimit || 50);

  // * Get relevant subcategory ID
  // This is faster than doing a join in the main query
  const categoryQuery = groq`*[_type in ["ActivitySubCategory", "ServiceSubCategory", "ArticleCategory"] && [title, locTitle.no, locTitle.en, locTitle.de] match $query][0]{_id}`;
  const relevantCategory = await clientGROQ.fetch(categoryQuery, {
    query: currentQuery,
  });

  // * Get search results
  const start = (currentPage - 1) * currentPagination;
  const end = start + currentPagination;

  // Use English fallback on German
  const fallback = language === 'de' ? 'en' : language;

  const searchCriteria = groq`
    (
      (!defined(noLandingPage) || noLandingPage == false)
      // only includes places with 'geopoint'
      && (defined(geopoint) || _type != "Place")
      // exclude results without slug (with exceptions)
      && (defined(locSlug[$language].current) || defined(locSlug[$fallback].current) || _type in ["ThingsToDoPage"])
    )
    && (
      [
        title,
        locTitle.no, locTitle.en, locTitle.de,
        locDescription.no, locDescription.en, locDescription.de,
        locShortDescription.no, locShortDescription.en, locShortDescription.de,
      ] match $query ||
      subCategory._ref == $categoryId ||
      articleCategory._ref == $categoryId
    )
  `;

  const requestedData = groq`
    _id,
    _type,
    title,
    locTitle,
    locShortDescription,
    // slug,
    locSlug,
    "categoryArticleLocTitle": articleCategory->{locTitle},
    "categoryPlaceLocTitle": placeCategory->{locTitle},
    "categoryProductLocTitle": category->{locTitle},
    "subCategoryProductLocTitle": subCategory->{locTitle},
    "dayTripPlace": dayTripPlace->{place->{_id, locSlug, locTitle}},
    cloudinaryImages[0..0]{
      image {
        url,
        "altText": context.custom.alt
      },
    },
    image {
      secure_url,
      "altText": context.custom.alt
    },
    coverImage {
      image {
      secure_url,
      "altText": context.custom.alt
      }
    },
    // Only show place and region if there aren't multiple references
    !defined(regionSubscriber) => {
      "place":  place->{_id, locSlug, locTitle},
      "region": region->{locTitle},
    }
  `;
  const responseOrder = groq`score(
    boost([title, locTitle.no, locTitle.en, locTitle.de] match $query, 2),
    boost(_type == "Place", 2),
    boost(_type == "ThingsToDoPage", 3),
    boost(subCategory._ref == $categoryId, 3),
  )`;

  const groqQuery = groq`
    {
      "all": *[
        _type in ["Activity", "Article", "Page", "Place", "Region", "Service", "Provider", "ThingsToDoPage", "DayTrip"]
        && ${searchCriteria} && expired != true
      ] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "activities": *[_type == "Activity" && expired != true && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "articles": *[_type == "Article" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "pages": *[_type in ["Page", "ThingsToDoPage"] && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "places": *[_type == "Place" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "regions": *[_type == "Region" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "services": *[_type == "Service" && expired != true && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "providers": *[_type == "Provider" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "thingsToDo": *[_type == "ThingsToDoPage" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "dayTrips": *[_type == "DayTrip" && ${searchCriteria}] | ${responseOrder} [${start}...${end}] { ${requestedData} },
      "totals": {
        "all": count(*[
          (
            _type == "Activity"
            || _type == "Article"
            || _type == "DayTrip"
            || _type in ["Page", "ThingsToDoPage"]
            || _type == "Place"
            || _type == "Region"
            || _type == "Service"
            || _type == "Provider"
            || _type == "ThingsToDoPage"
          ) && ${searchCriteria}
        ]),
        "activities": count(*[_type == "Activity" && expired != true && ${searchCriteria}]),
        "articles": count(*[_type == "Article" && ${searchCriteria}]),
        "pages": count(*[_type == "Page" && ${searchCriteria}]),
        "places": count(*[_type == "Place" && ${searchCriteria}]),
        "regions": count(*[_type == "Region" && ${searchCriteria}]),
        "services": count(*[_type == "Service" && expired != true && ${searchCriteria}]),
        "providers": count(*[_type == "Provider" && ${searchCriteria}]),
        "thingsToDo": count(*[_type == "ThingsToDoPage" && ${searchCriteria}]),
        "dayTrips": count(*[_type == "DayTrip" && ${searchCriteria}]),
      }
    }
  `;

  const results = await clientGROQ.fetch(groqQuery, {
    query: currentQuery,
    categoryId: relevantCategory?._id || '',
    language,
    fallback,
  });

  const nextPageExists = Math.ceil(results.totals.all / currentPagination) > currentPage;
  const prevPageExists = currentPage - 1 > 0;

  return {
    results,
    currentQuery,
    currentPage,
    nextPage: nextPageExists ? currentPage + 1 : null,
    prevPage: prevPageExists ? currentPage - 1 : null,
  };
};

export default getSearchResults;
