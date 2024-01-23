// All queries are defined on this file. When making requests from React page components,
//  or directly from 'requests.js' file, we only use the exported 'gql' template literal tags from this file.

import gql from 'graphql-tag';

// Site Settings
export const allSiteSettingsQuery = gql`
  query AllSiteSettingsQuery {
    allSiteSettings {
      title
      description
      googleGTM
      isMVP
      footerLinks {
        __typename
        ... on Page {
          _id
          title
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
        ... on Register {
          _id
          locTitle {
            en
            de
            no
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
      }
      footerLinksLeft {
        __typename
        ... on Page {
          _id
          title
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
        ... on Register {
          _id
          locTitle {
            en
            de
            no
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
      }
    }
    allLandingPage {
      _id
      locTitle {
        en
        de
        no
      }
      locShortDescription {
        en
        de
        no
      }
      featureImage {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
    }
    allLandingPageInspiration {
      _id
      locTitle {
        en
        de
        no
      }
      locShortDescription {
        en
        de
        no
      }
      featureImage {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
      highlightedArticles {
        _id
        regionSubscriber {
          _id
          title
        }
        region {
          _id
        }
        articleCategory {
          _id
          locTitle {
            no
            en
            de
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
        cloudinaryImages {
          mainImage
          image {
            height
            public_id
            width
            url
          }
        }
        coverImage {
          image {
            public_id
          }
          locDescription {
            en
            de
            no
          }
        }
        locTitle {
          en
          de
          no
        }
        slug {
          current
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
        locShortDescription {
          en
          de
          no
        }
      }
      locHighlightedArticles {
        no {
          _id
          regionSubscriber {
            _id
            title
          }
          region {
            _id
          }
          articleCategory {
            _id
            locTitle {
              no
              en
              de
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
          }
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
        en {
          _id
          regionSubscriber {
            _id
            title
          }
          region {
            _id
          }
          articleCategory {
            _id
            locTitle {
              no
              en
              de
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
          }
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
        de {
          _id
          regionSubscriber {
            _id
            title
          }
          region {
            _id
          }
          articleCategory {
            _id
            locTitle {
              no
              en
              de
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
          }
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
      }
    }
    LandingPageEvents(id: "eventsLanding") {
      _id
      locTitle {
        en
        de
        no
      }
      locShortDescription {
        en
        de
        no
      }
      featureImage {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
      highlightedArticles {
        _id
        cloudinaryImages {
          mainImage
          image {
            height
            public_id
            width
            url
          }
        }
        coverImage {
          image {
            public_id
          }
          locDescription {
            en
            de
            no
          }
        }
        locTitle {
          en
          de
          no
        }
        slug {
          current
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
        locShortDescription {
          en
          de
          no
        }
      }
      locHighlightedArticles {
        no {
          _id
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
        en {
          _id
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
        de {
          _id
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          locTitle {
            en
            de
            no
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            en
            de
            no
          }
        }
      }
    }
  }
`;

// Provider
export const allProviderQuery = gql`
  query AllProviderQuery {
    allProvider {
      _id
      title
    }
  }
`;
export const oneProviderQuery = gql`
  query oneProviderQuery($id: ID!) {
    Provider(id: $id) {
      _id
      title
      contactPoint {
        telephone
      }
      address {
        postalAddress {
          addressCountry
          addressLocality
          county
          municipality
          postalCode
          streetAddress
        }
      }
      geopoint {
        lat
        lng
      }
      slug {
        current
      }
    }
  }
`;

// Traveller
export const oneTravellerQuery = gql`
  query OneTravellerQuery($id: ID!) {
    Traveller(id: $id) {
      _id
      _type
      firstName
      lastName
      ixineraries {
        __typename
        ... on Ixinerary {
          _id
          title
        }
      }
      lastUpdated
      locale
      sub
    }
  }
`;
export const oneTravellerIxinerariesQuery = gql`
  query OneTravellerIxinerariesQuery($id: ID!) {
    Traveller(id: $id) {
      _id
      ixineraries {
        __typename
        ... on Ixinerary {
          _id
          title
        }
      }
    }
  }
`;

// Itinerary
export const allItineraryQuery = gql`
  query AllItineraryQuery {
    allItinerary {
      _id
      editHash
      official
      title
    }
  }
`;
export const oneItineraryQuery = gql`
  query OneItineraryQuery($id: ID!) {
    Itinerary(id: $id) {
      _id
      _type
      editHash
      title
      duration {
        timeEnd
        timeStart
      }
      official
      plan {
        __typename
        ... on PlannedPlace {
          _id
          duration {
            timeStart
            timeEnd
          }
          place {
            __typename
            ... on Place {
              _id
              _type
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
              important
              region {
                _id
              }
            }
          }
          products {
            __typename
            ... on PlannedActivity {
              _id
              duration {
                timeStart
                timeEnd
              }
              activity {
                __typename
                ... on Activity {
                  _id
                  _type
                  title
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  slug {
                    current
                  }
                  locSlug {
                    no {
                      current
                    }
                    en {
                      current
                    }
                    de {
                      current
                    }
                  }
                  category {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                  }
                  subCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                  }
                  geopoint {
                    lat
                    lng
                  }
                  place {
                    _id
                    title
                    geopoint {
                      lat
                      lng
                    }
                    important
                  }
                  images {
                    mainImage
                    imageRef {
                      ... on Images {
                        cloudinaryId
                        url
                      }
                    }
                  }
                }
              }
            }
            ... on PlannedService {
              _id
              duration {
                timeStart
                timeEnd
              }
              service {
                __typename
                ... on Service {
                  _id
                  _type
                  title
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  slug {
                    current
                  }
                  locSlug {
                    no {
                      current
                    }
                    en {
                      current
                    }
                    de {
                      current
                    }
                  }
                  category {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                  }
                  subCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                  }
                  geopoint {
                    lat
                    lng
                  }
                  place {
                    _id
                    title
                    geopoint {
                      lat
                      lng
                    }
                    important
                  }
                  images {
                    mainImage
                    imageRef {
                      ... on Images {
                        cloudinaryId
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// All region and places
export const allRegionAndPlaceQuery = gql`
  query AllRegionAndPlaceQuery {
    allRegion(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
        title: { neq: null }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      image {
        public_id
      }
      mainImage {
        locDescription {
          no
          de
          en
        }
        image {
          public_id
        }
      }
    }
    allPlace(
      sort: { title: ASC }
      where: { _: { is_draft: false }, slug: { _type: { eq: "slug" } }, title: { neq: null } }
    ) {
      _id
      _type
      title
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      image {
        public_id
      }
    }
  }
`;
// Region
export const allRegionQuery = gql`
  query AllRegionQuery {
    allRegion(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
        title: { neq: null }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      image {
        public_id
      }
      mainImage {
        locDescription {
          no
          de
          en
        }
        image {
          public_id
        }
      }
    }
  }
`;
export const oneRegionQuery = gql`
  query OneRegionQuery($id: ID!) {
    Region(id: $id) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      image {
        public_id
      }
      mainImage {
        locDescription {
          no
          de
          en
        }
        image {
          public_id
          height
          width
          context {
            custom {
              credit
              caption
              created
              alt
            }
          }
        }
      }
      SoMeTitle {
        no
        en
        de
      }
      SoMeHashTag
      snapSeaGalleryId
      socialMedia {
        fbTitle
        fbUrl
        instaTitle
        instaUrl
        ytTitle
        ytUrl
      }
      highlightedPlaces {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantPlaces {
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          image {
            public_id
          }
        }
        locHighlightedPlaces {
          no {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            image {
              public_id
            }
          }
          en {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            image {
              public_id
            }
          }
          de {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            image {
              public_id
            }
          }
        }
      }
      highlightedServices {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantServices {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locShortDescription {
            no
            en
            de
          }
          facilities {
            __typename
            ... on FacilityProductOption {
              facility {
                _id
                facilityType
                locTitle {
                  no
                  en
                  de
                }
                locShortDescription {
                  no
                  en
                  de
                }
                subCategories {
                  __typename
                  ... on ServiceSubCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                    slug {
                      current
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                  }
                }
              }
              facilityType
              facilityText
              facilityNumber
              facilityAscent {
                facilityAscentMeters
              }
              facilityDifficulty {
                facilityDifficultyEasy
                facilityDifficultyMedium
                facilityDifficultyChallenging
                facilityDifficultyExpert
              }
              facilityDistance {
                facilityDistanceKilometers
              }
              facilityDuration {
                facilityDurationShort
                facilityDurationDay
                facilityDurationMultiday
              }
              facilityFishing {
                facilityFishingFreshwater
                facilityFishingDeepsea
                facilityFishingFjord
                facilityFishingRiver
              }
              facilitySeason {
                facilitySeasonSpring
                facilitySeasonSummer
                facilitySeasonAutumn
                facilitySeasonWinter
              }
              facilitySkiing {
                facilitySkiCrosscountry
                facilitySkiCentre
                facilitySkiTouring
              }
              facilitySurface {
                facilitySurfaceAsphalt
                facilitySurfaceGravel
                facilitySurfacePath
                facilitySurfaceScree
              }
              facilityTerrain {
                facilityTerrainMountainArea
                facilityTerrainForestArea
                facilityTerrainCoastalArea
                facilityTerrainGlacier
                facilityTerrainCave
                facilityTerrainGorge
                facilityTerrainNationalPark
                facilityTerrainLake
                facilityTerrainRiver
                facilityTerrainWaterfall
              }
            }
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedServices {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ServiceSubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ServiceSubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ServiceSubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      highlightedArticles {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantArticles {
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
        }
        locHighlightedArticles {
          no {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          en {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          de {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
        }
      }
      highlightedActivities {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantActivities {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locShortDescription {
            no
            en
            de
          }
          facilities {
            __typename
            ... on FacilityProductOption {
              facility {
                _id
                facilityType
                locTitle {
                  no
                  en
                  de
                }
                locShortDescription {
                  no
                  en
                  de
                }
                subCategories {
                  __typename
                  ... on ActivitySubCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                    slug {
                      current
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                  }
                }
              }
              facilityType
              facilityText
              facilityNumber
              facilityAscent {
                facilityAscentMeters
              }
              facilityDifficulty {
                facilityDifficultyEasy
                facilityDifficultyMedium
                facilityDifficultyChallenging
                facilityDifficultyExpert
              }
              facilityDistance {
                facilityDistanceKilometers
              }
              facilityDuration {
                facilityDurationShort
                facilityDurationDay
                facilityDurationMultiday
              }
              facilityFishing {
                facilityFishingFreshwater
                facilityFishingDeepsea
                facilityFishingFjord
                facilityFishingRiver
              }
              facilitySeason {
                facilitySeasonSpring
                facilitySeasonSummer
                facilitySeasonAutumn
                facilitySeasonWinter
              }
              facilitySkiing {
                facilitySkiCrosscountry
                facilitySkiCentre
                facilitySkiTouring
              }
              facilitySurface {
                facilitySurfaceAsphalt
                facilitySurfaceGravel
                facilitySurfacePath
                facilitySurfaceScree
              }
              facilityTerrain {
                facilityTerrainMountainArea
                facilityTerrainForestArea
                facilityTerrainCoastalArea
                facilityTerrainGlacier
                facilityTerrainCave
                facilityTerrainGorge
                facilityTerrainNationalPark
                facilityTerrainLake
                facilityTerrainRiver
                facilityTerrainWaterfall
              }
            }
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedActivities {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      # Just like 'highlightedActivities'
      highlightedEvents {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        # Just like 'relevantActivities'
        relevantEvents {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locShortDescription {
            no
            en
            de
          }
          facilities {
            __typename
            ... on FacilityProductOption {
              facility {
                _id
                facilityType
                locTitle {
                  no
                  en
                  de
                }
                locShortDescription {
                  no
                  en
                  de
                }
                subCategories {
                  __typename
                  ... on ActivitySubCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                    slug {
                      current
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                  }
                }
              }
              facilityType
              facilityText
              facilityNumber
              facilityAscent {
                facilityAscentMeters
              }
              facilityDifficulty {
                facilityDifficultyEasy
                facilityDifficultyMedium
                facilityDifficultyChallenging
                facilityDifficultyExpert
              }
              facilityDistance {
                facilityDistanceKilometers
              }
              facilityDuration {
                facilityDurationShort
                facilityDurationDay
                facilityDurationMultiday
              }
              facilityFishing {
                facilityFishingFreshwater
                facilityFishingDeepsea
                facilityFishingFjord
                facilityFishingRiver
              }
              facilitySeason {
                facilitySeasonSpring
                facilitySeasonSummer
                facilitySeasonAutumn
                facilitySeasonWinter
              }
              facilitySkiing {
                facilitySkiCrosscountry
                facilitySkiCentre
                facilitySkiTouring
              }
              facilitySurface {
                facilitySurfaceAsphalt
                facilitySurfaceGravel
                facilitySurfacePath
                facilitySurfaceScree
              }
              facilityTerrain {
                facilityTerrainMountainArea
                facilityTerrainForestArea
                facilityTerrainCoastalArea
                facilityTerrainGlacier
                facilityTerrainCave
                facilityTerrainGorge
                facilityTerrainNationalPark
                facilityTerrainLake
                facilityTerrainRiver
                facilityTerrainWaterfall
              }
            }
          }
          event {
            bookingUrl
            recurring
            showings {
              bookingUrl
              date
              schedule {
                hour
                minutes
              }
            }
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedEvents {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      campaignCTA {
        status
        campaign {
          _id
          isActive
          locTitle {
            no
            en
            de
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          campaignRegion {
            region {
              _id
            }
            locTitle {
              no
              en
              de
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            campaignRegionLogo {
              _type
              asset {
                title
                altText
                description
                url
              }
            }
            campaignRegionColor {
              hex
            }
            coverImage {
              locDescription {
                no
                en
                de
              }
              image {
                type
                format
                url
                secure_url
                width
                height
              }
            }
          }
          campaignColor {
            color {
              hex
            }
          }
          coverImage {
            locDescription {
              no
              en
              de
            }
            image {
              type
              format
              url
              secure_url
              width
              height
            }
          }
        }
      }
    }
  }
`;

// One place
export const onePlaceQuery = gql`
  query OnePlaceQuery($id: ID!) {
    Place(id: $id) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      video
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        de {
          current
        }
        en {
          current
        }
      }
      region {
        title
        slug {
          current
        }
        locTitle {
          no
          en
          de
        }
        locSlug {
          no {
            current
          }
          de {
            current
          }
          en {
            current
          }
        }
      }
      locShortDescription {
        no
        en
        de
      }

      image {
        public_id
        height
        width
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
      geopoint {
        lat
        alt
      }
      fjordNorwayPlace
      important
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      highlightedArticles {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantArticles {
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
        }
        locHighlightedArticles {
          no {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          en {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          de {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
        }
      }
      highlightedActivities {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantActivities {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedActivities {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      highlightedEvents {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        # Just like 'relevantActivities'
        relevantEvents {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locShortDescription {
            no
            en
            de
          }
          facilities {
            __typename
            ... on FacilityProductOption {
              facility {
                _id
                facilityType
                locTitle {
                  no
                  en
                  de
                }
                locShortDescription {
                  no
                  en
                  de
                }
                subCategories {
                  __typename
                  ... on ActivitySubCategory {
                    _id
                    title
                    locTitle {
                      no
                      en
                      de
                    }
                    slug {
                      current
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                  }
                }
              }
              facilityType
              facilityText
              facilityNumber
              facilityAscent {
                facilityAscentMeters
              }
              facilityDifficulty {
                facilityDifficultyEasy
                facilityDifficultyMedium
                facilityDifficultyChallenging
                facilityDifficultyExpert
              }
              facilityDistance {
                facilityDistanceKilometers
              }
              facilityDuration {
                facilityDurationShort
                facilityDurationDay
                facilityDurationMultiday
              }
              facilityFishing {
                facilityFishingFreshwater
                facilityFishingDeepsea
                facilityFishingFjord
                facilityFishingRiver
              }
              facilitySeason {
                facilitySeasonSpring
                facilitySeasonSummer
                facilitySeasonAutumn
                facilitySeasonWinter
              }
              facilitySkiing {
                facilitySkiCrosscountry
                facilitySkiCentre
                facilitySkiTouring
              }
              facilitySurface {
                facilitySurfaceAsphalt
                facilitySurfaceGravel
                facilitySurfacePath
                facilitySurfaceScree
              }
              facilityTerrain {
                facilityTerrainMountainArea
                facilityTerrainForestArea
                facilityTerrainCoastalArea
                facilityTerrainGlacier
                facilityTerrainCave
                facilityTerrainGorge
                facilityTerrainNationalPark
                facilityTerrainLake
                facilityTerrainRiver
                facilityTerrainWaterfall
              }
            }
          }
          event {
            bookingUrl
            recurring
            showings {
              bookingUrl
              date
              schedule {
                hour
                minutes
              }
            }
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedEvents {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locShortDescription {
              no
              en
              de
            }
            facilities {
              __typename
              ... on FacilityProductOption {
                facility {
                  _id
                  facilityType
                  locTitle {
                    no
                    en
                    de
                  }
                  locShortDescription {
                    no
                    en
                    de
                  }
                  subCategories {
                    __typename
                    ... on ActivitySubCategory {
                      _id
                      title
                      locTitle {
                        no
                        en
                        de
                      }
                      slug {
                        current
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                    }
                  }
                }
                facilityType
                facilityText
                facilityNumber
                facilityAscent {
                  facilityAscentMeters
                }
                facilityDifficulty {
                  facilityDifficultyEasy
                  facilityDifficultyMedium
                  facilityDifficultyChallenging
                  facilityDifficultyExpert
                }
                facilityDistance {
                  facilityDistanceKilometers
                }
                facilityDuration {
                  facilityDurationShort
                  facilityDurationDay
                  facilityDurationMultiday
                }
                facilityFishing {
                  facilityFishingFreshwater
                  facilityFishingDeepsea
                  facilityFishingFjord
                  facilityFishingRiver
                }
                facilitySeason {
                  facilitySeasonSpring
                  facilitySeasonSummer
                  facilitySeasonAutumn
                  facilitySeasonWinter
                }
                facilitySkiing {
                  facilitySkiCrosscountry
                  facilitySkiCentre
                  facilitySkiTouring
                }
                facilitySurface {
                  facilitySurfaceAsphalt
                  facilitySurfaceGravel
                  facilitySurfacePath
                  facilitySurfaceScree
                }
                facilityTerrain {
                  facilityTerrainMountainArea
                  facilityTerrainForestArea
                  facilityTerrainCoastalArea
                  facilityTerrainGlacier
                  facilityTerrainCave
                  facilityTerrainGorge
                  facilityTerrainNationalPark
                  facilityTerrainLake
                  facilityTerrainRiver
                  facilityTerrainWaterfall
                }
              }
            }
            event {
              bookingUrl
              recurring
              showings {
                bookingUrl
                date
                schedule {
                  hour
                  minutes
                }
              }
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      highlightedServices {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantServices {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          place {
            _id
            title
            slug {
              current
            }
            geopoint {
              lat
              lng
            }
          }
        }
        locHighlightedServices {
          no {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          en {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          de {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
      }
      SoMeTitle {
        no
        en
        de
      }
      SoMeHashTag
      snapSeaGalleryId
      socialMedia {
        fbTitle
        fbUrl
        instaTitle
        instaUrl
        ytTitle
        ytUrl
      }
    }
  }
`;

// Service
export const allServiceRegionQuery = gql`
  query AllServiceRegionQuery($regionId: ID!) {
    allService(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { eq: $regionId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      category {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      region {
        __typename
        ... on Region {
          _id
        }
      }
      geopoint {
        lat
        lng
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      # images {
      #   mainImage
      #   imageRef {
      #     ... on Images {
      #       cloudinaryId
      #       url
      #     }
      #   }
      # }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
    }
  }
`;
export const allServiceCategoriesAndSubcategoriesQuery = gql`
  query AllServiceCategoriesAndSubcategoriesQuery {
    allService(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      category {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
    }
  }
`;
export const oneServiceQuery = gql`
  query OneServiceQuery($id: ID!) {
    Service(id: $id) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      category {
        _id
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        title
        locTitle {
          no
          en
          de
        }
      }
      place {
        __typename
        ... on Place {
          _id
          title
          slug {
            current
          }
          geopoint {
            lat
            lng
          }
          important
        }
      }
      provider {
        __typename
        ... on Provider {
          _id
          title
          slug {
            current
          }
        }
      }
      region {
        __typename
        ... on Region {
          _id
          title
          locTitle {
            no
            en
            de
          }
          locShortDescription {
            no
            en
            de
          }
          locDescription {
            noRaw
            enRaw
            deRaw
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      geopoint {
        lat
        lng
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      # This 'images' query is slightly different from the one that returns all the services
      # images {
      #   mainImage
      #   imageRef {
      #     ... on Images {
      #       cloudinaryId
      #       copyAddressPostal
      #       copyName
      #       copyPhone
      #       created
      #       description
      #       mimeType
      #       url
      #     }
      #   }
      # }
      cloudinaryImages {
        mainImage
        locDescription {
          no
          en
          de
        }
        image {
          public_id
          height
          width
          url
          context {
            custom {
              credit
              caption
              created
              alt
            }
          }
        }
      }

      # The fields below are not in the query that returns all the services
      address {
        postalAddress {
          addressCountry
          addressLocality
          municipality
          postalCode
          streetAddress
        }
      }
      certificates {
        blaattFlagg
        greenKey
        iso14001
        miljofyrtaarn
        norskOkoturisme
        svanen
      }
      contactPoint {
        bookingUrl
        email
        telephone
        webURL
      }
      externalSystems {
        ... on ExternalSystem {
          externalURI
          title
        }
      }
      fromPrice
    }
  }
`;
export const allServiceCategoryQuery = gql`
  query AllServiceCategoryQuery {
    allServiceCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;
export const getServiceByCategoryQuery = gql`
  query GetServiceByCategoryQuery($categoryId: ID!) {
    allService(
      sort: { title: ASC }
      limit: 3
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        category: { _id: { eq: $categoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
    }
  }
`;
export const getThreeServicesBySubCategoryQuery = gql`
  query GetThreeServicesBySubCategoryQuery($subCategoryId: ID!) {
    allService(
      sort: { title: ASC }
      limit: 3
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        subCategory: { _id: { eq: $subCategoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
    }
  }
`;
export const getAllServicesBySubCategoryQuery = gql`
  query GetAllServicesBySubCategoryQuery($subCategoryId: ID!) {
    allService(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        subCategory: { _id: { eq: $subCategoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
    }
  }
`;

// Activity
export const allActivityEventsQuery = gql`
  query AllActivityEventsQuery {
    allActivity(
      where: {
        _: { is_draft: false }
        isEvent: { eq: true }
        place: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      region {
        _id
        locTitle {
          no
          en
          de
        }
      }
      category {
        _id
        locTitle {
          no
          en
          de
        }
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        locTitle {
          no
          en
          de
        }
        _id
      }
    }
  }
`;

export const allActivityStaticQuery = gql`
  query AllActivityLimitedQuery {
    allActivity(
      sort: { title: ASC }
      limit: 200 # was 1000
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      # images {
      #   cloudinaryId
      # }
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      category {
        _id
      }
      subCategory {
        _id
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
    }
  }
`;

// All activity and service categogy and subcategory
export const allActivitiyAndServiceCategoriesAndSubcategoriesQuery = gql`
  query allCategoriesAndSubCategories {
    allActivityCategory {
      _type
      title
      _id
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        cloudinaryId
        url
      }
      featureImageCloudinary {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
    }
    allActivitySubCategory {
      _type
      title
      _id
      activityCategory {
        _id
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        cloudinaryId
        url
      }
      featureImageCloudinary {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
    }
    allServiceCategory {
      _type
      title
      _id
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        cloudinaryId
        url
      }
      featureImageCloudinary {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
    }
    allServiceSubCategory {
      _type
      title
      _id
      serviceCategory {
        _id
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        cloudinaryId
        url
      }
      featureImageCloudinary {
        public_id
        context {
          custom {
            credit
            caption
            created
            alt
          }
        }
      }
    }
  }
`;

export const allActivityRegionQuery = gql`
  query AllActivityRegionQuery($regionId: ID!) {
    allActivity(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { eq: $regionId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      category {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      region {
        __typename
        ... on Region {
          _id
        }
      }
      geopoint {
        lat
        lng
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      images {
        mainImage
        imageRef {
          ... on Images {
            cloudinaryId
            url
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
      isEvent
    }
  }
`;
export const allActivityCategoriesAndSubcategoriesQuery = gql`
  query AllActivityCategoriesAndSubcategoriesQuery {
    allActivity(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      category {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        _type
        title
        locTitle {
          no
          en
          de
        }
      }
    }
  }
`;
export const oneActivityQuery = gql`
  query OneActivityQuery($id: ID!) {
    Activity(id: $id) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      category {
        _id
        title
        locTitle {
          no
          en
          de
        }
      }
      subCategory {
        _id
        title
        locTitle {
          no
          en
          de
        }
      }
      place {
        __typename
        ... on Place {
          _id
          title
          slug {
            current
          }
          geopoint {
            lat
            lng
          }
          important
        }
      }
      provider {
        __typename
        ... on Provider {
          _id
          title
          slug {
            current
          }
        }
      }
      region {
        __typename
        ... on Region {
          _id
          title
          locTitle {
            no
            en
            de
          }
          locShortDescription {
            no
            en
            de
          }
          locDescription {
            noRaw
            enRaw
            deRaw
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
        }
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      geopoint {
        lat
        lng
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
      # This 'images' query is slightly different from the one that returns all the activities
      # images {
      #   mainImage
      #   imageRef {
      #     ... on Images {
      #       cloudinaryId
      #       copyAddressPostal
      #       copyName
      #       copyPhone
      #       created
      #       description
      #       mimeType
      #       url
      #     }
      #   }
      # }
      cloudinaryImages {
        mainImage
        locDescription {
          no
          en
          de
        }
        image {
          public_id
          height
          width
          url
          context {
            custom {
              credit
              caption
              created
              alt
            }
          }
        }
      }
      # The fields below are not in the query that returns all the activities
      address {
        postalAddress {
          addressCountry
          addressLocality
          county
          municipality
          postalCode
          streetAddress
        }
      }
      certificates {
        blaattFlagg
        greenKey
        iso14001
        miljofyrtaarn
        norskOkoturisme
        svanen
      }
      contactPoint {
        bookingUrl
        email
        telephone
        webURL
      }
      externalSystems {
        ... on ExternalSystem {
          externalURI
          title
        }
      }
      fromPrice
    }
  }
`;
export const allActivityCategoryQuery = gql`
  query AllActivityCategoryQuery {
    allActivityCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;
export const allActivitySubCategoryQuery = gql`
  query allActivitySubCategoryQuery {
    allActivitySubCategory {
      _id
      title
      activityCategory {
        _id
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;

export const getActivityByCategoryQuery = gql`
  query GetActivityByCategoryQuery($categoryId: ID!) {
    allActivity(
      sort: { title: ASC }
      limit: 3
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        category: { _id: { eq: $categoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
    }
  }
`;
export const getThreeActivitiesBySubCategoryQuery = gql`
  query GetThreeActivitiesBySubCategoryQuery($subCategoryId: ID!) {
    allActivity(
      sort: { title: ASC }
      limit: 3
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        subCategory: { _id: { eq: $subCategoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
    }
  }
`;

export const getAllActivitiesBySubCategoryQuery = gql`
  query GetAllActivitiesBySubCategoryQuery($subCategoryId: ID!) {
    allActivity(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        subCategory: { _id: { eq: $subCategoryId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      cloudinaryImages {
        image {
          height
          public_id
          width
          url
        }
      }
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
      category {
        _id
      }
      place {
        _id
        title
        slug {
          current
        }
        geopoint {
          lat
          lng
        }
        important
      }
      subCategory {
        _id
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
    }
  }
`;

// Place
export const allPlaceQuery = gql`
  query AllPlaceQuery {
    allPlace(
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        region: { _id: { neq: null } }
        slug: { _type: { eq: "slug" } }
      }
    ) {
      _id
      title
      important
      fjordNorwayPlace
    }
  }
`;
export const allPlaceTitleQuery = gql`
  query AllPlaceTitleQuery {
    allPlace(
      sort: { locTitle: { no: ASC } }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        region: { _id: { neq: null } }
      }
    ) {
      title
      locTitle {
        no
      }
    }
  }
`;
export const allPlaceFullQuery = gql`
  query AllPlaceFullQuery {
    allPlace(
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        region: { _id: { neq: null } }
        slug: { _type: { eq: "slug" } }
      }
    ) {
      _id
      geopoint {
        lat
        lng
      }
      region {
        _id
      }
      important
      fjordNorwayPlace
      publicAccess
      slug {
        current
      }
      smokingAllowed
      title
    }
  }
`;

// Article
export const allArticleQuery = gql`
  query AllArticles {
    allArticle(
      where: {
        _: { is_draft: false }
        #locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      articleCategory {
        _id
        locTitle {
          no
          en
          de
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
      coverImage {
        image {
          public_id
        }
        locDescription {
          en
          de
          no
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
      region {
        __typename
        ... on Region {
          _id
          title
        }
      }
      regionSubscriber {
        _id
      }
    }
  }
`;
export const oneArticleQuery = gql`
  query OneArticleQuery($id: ID!) {
    Article(id: $id) {
      _id
      _updatedAt
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      season {
        en
        no
        de
      }
      coverImage {
        locDescription {
          en
          no
          de
        }
        image {
          public_id
          height
          width
          context {
            custom {
              credit
              caption
              created
              alt
            }
          }
        }
      }
      articleCategory {
        _id
        locTitle {
          no
          en
          de
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
      content {
        __typename
        ... on CampaignCTA {
          status
          campaign {
            _id
            isActive
            locTitle {
              no
              en
              de
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            campaignRegion {
              region {
                _id
              }
              locTitle {
                no
                en
                de
              }
              locSlug {
                no {
                  current
                }
                en {
                  current
                }
                de {
                  current
                }
              }
              locShortDescription {
                no
                en
                de
              }
              campaignRegionLogo {
                _type
                asset {
                  title
                  altText
                  description
                  url
                }
              }
              campaignRegionColor {
                hex
              }
              coverImage {
                locDescription {
                  no
                  en
                  de
                }
                image {
                  type
                  format
                  url
                  secure_url
                  width
                  height
                }
              }
            }
            campaignColor {
              color {
                hex
              }
            }
            coverImage {
              locDescription {
                no
                en
                de
              }
              image {
                type
                format
                url
                secure_url
                width
                height
              }
            }
          }
        }
        ... on HighlightedCampaigns {
          locCampaigns {
            no {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
            en {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
            de {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
          }
        }
        ... on CallToAction {
          title {
            no
            en
            de
          }
          url {
            no
            en
            de
          }
        }
        ... on CrowdriffId {
          crowdriffId
        }
        ... on ImageList {
          locTitle {
            en
            de
            no
          }
          cloudinaryImages {
            locDescription {
              en
              de
              no
            }
            mainImage
            image {
              height
              public_id
              width
              url
              context {
                custom {
                  credit
                  caption
                  created
                  alt
                }
              }
            }
          }
        }
        ... on Video {
          title {
            en
            de
            no
          }
          url {
            en
            de
            no
          }
        }
        ... on LocaleRichText {
          noRaw
          enRaw
          deRaw
        }
        ... on HighlightedOneProduct {
          product: relevantProducts {
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          locHighlightedOneProduct {
            no {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            en {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            de {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
          }
        }
        ... on HighlightedProducts {
          locTitle {
            en
            de
            no
          }
          products: relevantProducts {
            __typename
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          locHighlightedProducts {
            no {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            en {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            de {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
          }
        }
      }

      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      region {
        __typename
        ... on Region {
          _id
          title
        }
      }
      regionSubscriber {
        _id
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
      bookingUrl
      locBookingBtnText {
        no
        en
        de
      }
      videoUrl
      relatedProducts {
        __typename
        ... on Activity {
          _id
          title
        }
        ... on Service {
          _id
          title
        }
      }
      locHighlightedProducts {
        no {
          __typename
          ... on Activity {
            _id
            title
          }
          ... on Service {
            _id
            title
          }
        }
        en {
          __typename
          ... on Activity {
            _id
            title
          }
          ... on Service {
            _id
            title
          }
        }
        de {
          __typename
          ... on Activity {
            _id
            title
          }
          ... on Service {
            _id
            title
          }
        }
      }
      relatedArticles {
        __typename
        ... on Article {
          _id
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            en {
              current
            }
            de {
              current
            }
            no {
              current
            }
          }
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
        }
      }
      metadata {
        duration {
          no
          en
          de
        }
        distance {
          no
          en
          de
        }
        transport {
          no
          en
          de
        }
        season {
          no
          en
          de
        }
      }
      steps {
        ... on TripStep {
          title
          tripDistance {
            no
            en
            de
          }
          tripDuration {
            no
            en
            de
          }
          tripTravelTime {
            no
            en
            de
          }
          locDescription {
            noRaw
            enRaw
            deRaw
          }
          cloudinaryImages {
            mainImage
            image {
              height
              public_id
              width
              url
              context {
                custom {
                  credit
                  caption
                  created
                  alt
                }
              }
            }
          }
          videoUrl {
            en
            de
            no
          }
        }
        relevantProducts {
          __typename
          ... on Activity {
            _id
            title
            locTitle {
              no
              en
              de
            }
            cloudinaryImages {
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
          ... on Service {
            _id
            title
            locTitle {
              no
              en
              de
            }
            cloudinaryImages {
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            place {
              _id
              title
              slug {
                current
              }
              geopoint {
                lat
                lng
              }
            }
          }
        }
        locHighlightedProducts {
          no {
            __typename
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          en {
            __typename
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          de {
            __typename
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
        }
        Places {
          ... on Place {
            _id
            title
            geopoint {
              lat
              lng
            }
          }
        }
      }
    }
  }
`;

// Provider
export const allArticleCategoryQuery = gql`
  query AllArticleCategoryQuery {
    allArticleCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;

// Pages
export const allPagesQuery = gql`
  query AllPages {
    allPage {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }

      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      region {
        __typename
        ... on Region {
          _id
          title
        }
      }
      images {
        mainImage
        imageRef {
          ... on Images {
            cloudinaryId
            url
            description
            copyName
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          public_id
          height
          width
          url
          context {
            custom {
              credit
              caption
              created
              alt
            }
          }
        }
      }
      bookingUrl
      locBookingBtnText {
        no
        en
        de
      }
      videoUrl
      relatedProducts {
        __typename
        ... on Activity {
          _id
          title
        }
        ... on Service {
          _id
          title
        }
      }
      relatedArticles {
        __typename
        ... on Article {
          _id
          title
        }
      }
    }
  }
`;
export const onePageQuery = gql`
  query OnePageQuery($id: ID!) {
    Page(id: $id) {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }

      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      region {
        __typename
        ... on Region {
          _id
          title
        }
      }
      images {
        mainImage
        imageRef {
          ... on Images {
            cloudinaryId
            url
            description
            copyName
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
      bookingUrl
      locBookingBtnText {
        no
        en
        de
      }
      videoUrl
      relatedProducts {
        __typename
        ... on Activity {
          _id
          title
        }
        ... on Service {
          _id
          title
        }
      }
      relatedArticles {
        __typename
        ... on Article {
          _id
          title
        }
      }
    }
  }
`;

// HomePage
export const allHomePageQuery = gql`
  query AllHomePage {
    allHomePage {
      _id
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        locAltText {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        image {
          public_id
          resource_type
          url
          secure_url
        }
      }
      gettingHere {
        locTitle {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        locMapCallout {
          no
          en
          de
        }
        articles {
          __typename
          ... on Article {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
          }
        }
      }
      regionsOverview {
        locTitle {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        locRegionsCTA {
          no
          en
          de
        }
      }
      highlightedArticles {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantArticles {
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
        }
        locHighlightedArticles {
          no {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          en {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          de {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
        }
      }
    }
  }
`;
export const oneHomePageQuery = gql`
  query OneHomePageQuery($id: ID!) {
    HomePage(id: $id) {
      _id
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      featureImage {
        locAltText {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        image {
          public_id
          resource_type
          url
          secure_url
        }
      }
      gettingHere {
        locTitle {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        locMapCallout {
          no
          en
          de
        }
        articles {
          __typename
          ... on Article {
            _id
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
          }
        }
      }
      regionsOverview {
        locTitle {
          no
          en
          de
        }
        locShortDescription {
          no
          en
          de
        }
        locRegionsCTA {
          no
          en
          de
        }
      }
      highlightedArticles {
        locTitle {
          no
          en
          de
        }
        locDescription {
          no
          en
          de
        }
        relevantArticles {
          title
          locTitle {
            no
            en
            de
          }
          slug {
            current
          }
          locSlug {
            no {
              current
            }
            en {
              current
            }
            de {
              current
            }
          }
          locShortDescription {
            no
            en
            de
          }
          cloudinaryImages {
            altText
            locDescription {
              no
              en
              de
            }
            mainImage
            image {
              height
              public_id
              width
              url
            }
          }
          images {
            altText
            mainImage
            imageRef {
              cloudinaryId
            }
          }
          coverImage {
            image {
              public_id
            }
            locDescription {
              en
              de
              no
            }
          }
        }
        locHighlightedArticles {
          no {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          en {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          de {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
        }
      }
    }
  }
`;

// A single service category query, used to fetch the category object necessary
// for the top menu item 'Transport' on 'SiteHeader'.
export const oneServiceCategoryQuery = gql`
  query OneServiceCategoryQuery($id: ID!) {
    ServiceCategory(id: $id) {
      _type
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
    }
  }
`;

// A single document query, of ANY type.
// Meant to return the 'type' of the document when we only know the 'id'.
export const oneDocumentQuery = gql`
  query OneProductQuery($id: ID!) {
    Document(id: $id) {
      __typename
    }
  }
`;

// * Search

export const allSearchItemsQuery = gql`
  query AllSearchItemsQuery {
    allPlace(
      sort: { title: ASC }
      where: { _: { is_draft: false }, slug: { _type: { eq: "slug" } }, title: { neq: null } }
    ) {
      _id
      _type
      title
      slug {
        current
      }
    }
    allRegion(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
        title: { neq: null }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allService(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allActivity(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { neq: null } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allArticle(sort: { title: ASC }, where: { _: { is_draft: false } }) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allPage(
      sort: { title: ASC }
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
        title: { neq: null }
      }
    ) {
      _id
      _type
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;

// * Facilities

export const allFacilityQuery = gql`
  query AllFacilityQuery {
    allFacility(where: { _: { is_draft: false }, facilityType: { neq: null } }) {
      _id
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      subCategories {
        __typename
        ... on ActivitySubCategory {
          _id
          title
        }
        ... on ServiceSubCategory {
          _id
          title
        }
      }
      facilityType
    }
  }
`;

// * Register

export const allRegisterQuery = gql`
  query AllRegisterQuery {
    allRegister(where: { _: { is_draft: false } }) {
      _id
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;

export const oneRegisterQuery = gql`
  query OneRegisterQuery($id: ID!) {
    Register(id: $id) {
      _id
      locTitle {
        no
        en
        de
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
    }
  }
`;

// * Campaigns

export const allCampaignQuery = gql`
  query AllCampaignQuery {
    allCampaign(where: { _: { is_draft: false } }) {
      _id
      isActive
      locTitle {
        no
        en
        de
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      campaignRegion {
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
    }
  }
`;

export const oneCampaignQuery = gql`
  query OneCampaignQuery($id: ID!) {
    Campaign(id: $id) {
      _id
      isActive
      locTitle {
        no
        en
        de
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      campaignRegion {
        region {
          _id
        }
        locTitle {
          no
          en
          de
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
        locShortDescription {
          no
          en
          de
        }
        campaignRegionLogo {
          _type
          asset {
            title
            altText
            description
            url
          }
        }
        campaignRegionColor {
          hex
        }
        coverImage {
          locDescription {
            no
            en
            de
          }
          image {
            type
            format
            url
            secure_url
            width
            height
          }
        }
      }
      campaignColor {
        color {
          hex
        }
      }
      coverImage {
        locDescription {
          no
          en
          de
        }
        image {
          type
          format
          url
          secure_url
          width
          height
        }
      }
      topLinks {
        _key
        locTitle {
          no
          en
          de
        }
        locUrl {
          no
          en
          de
        }
      }
      content {
        __typename
        # This differs from 'OneArticleQuery' - start
        ... on PlannerCTA {
          status
        }
        ... on HighlightedCampaigns {
          locCampaigns {
            no {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
            en {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
            de {
              __typename
              ... on HighlightedCampaign {
                _type
                campaign {
                  __typename
                  ... on Campaign {
                    _id
                    isActive
                    locTitle {
                      no
                      en
                      de
                    }
                    locSlug {
                      no {
                        current
                      }
                      en {
                        current
                      }
                      de {
                        current
                      }
                    }
                    locShortDescription {
                      no
                      en
                      de
                    }
                    campaignRegion {
                      region {
                        _id
                      }
                      locTitle {
                        no
                        en
                        de
                      }
                      locSlug {
                        no {
                          current
                        }
                        en {
                          current
                        }
                        de {
                          current
                        }
                      }
                      locShortDescription {
                        no
                        en
                        de
                      }
                      coverImage {
                        locDescription {
                          no
                          en
                          de
                        }
                        image {
                          type
                          format
                          url
                          secure_url
                          width
                          height
                        }
                      }
                    }
                    coverImage {
                      locDescription {
                        no
                        en
                        de
                      }
                      image {
                        type
                        format
                        url
                        secure_url
                        width
                        height
                      }
                    }
                  }
                }
                readMoreText {
                  no
                  en
                  de
                }
                status
              }
            }
          }
        }
        ... on Blockquote {
          quote {
            no
            en
            de
          }
          cite {
            locTitle {
              no
              en
              de
            }
            locUrl {
              no
              en
              de
            }
          }
        }
        ... on HighlightedArticles {
          _key
          _type
          locTitle {
            no
            en
            de
          }
          locDescription {
            no
            en
            de
          }
          relevantArticles {
            title
            locTitle {
              no
              en
              de
            }
            slug {
              current
            }
            locSlug {
              no {
                current
              }
              en {
                current
              }
              de {
                current
              }
            }
            locShortDescription {
              no
              en
              de
            }
            cloudinaryImages {
              altText
              locDescription {
                no
                en
                de
              }
              mainImage
              image {
                height
                public_id
                width
                url
              }
            }
            images {
              altText
              mainImage
              imageRef {
                cloudinaryId
              }
            }
            coverImage {
              image {
                public_id
              }
              locDescription {
                en
                de
                no
              }
            }
          }
          locHighlightedArticles {
            no {
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                no {
                  current
                }
                en {
                  current
                }
                de {
                  current
                }
              }
              locShortDescription {
                no
                en
                de
              }
              cloudinaryImages {
                altText
                locDescription {
                  no
                  en
                  de
                }
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              images {
                altText
                mainImage
                imageRef {
                  cloudinaryId
                }
              }
              coverImage {
                image {
                  public_id
                }
                locDescription {
                  en
                  de
                  no
                }
              }
            }
            en {
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                no {
                  current
                }
                en {
                  current
                }
                de {
                  current
                }
              }
              locShortDescription {
                no
                en
                de
              }
              cloudinaryImages {
                altText
                locDescription {
                  no
                  en
                  de
                }
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              images {
                altText
                mainImage
                imageRef {
                  cloudinaryId
                }
              }
              coverImage {
                image {
                  public_id
                }
                locDescription {
                  en
                  de
                  no
                }
              }
            }
            de {
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                no {
                  current
                }
                en {
                  current
                }
                de {
                  current
                }
              }
              locShortDescription {
                no
                en
                de
              }
              cloudinaryImages {
                altText
                locDescription {
                  no
                  en
                  de
                }
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              images {
                altText
                mainImage
                imageRef {
                  cloudinaryId
                }
              }
              coverImage {
                image {
                  public_id
                }
                locDescription {
                  en
                  de
                  no
                }
              }
            }
          }
        }
        # This differs from 'OneArticleQuery' - end
        ... on CallToAction {
          title {
            no
            en
            de
          }
          url {
            no
            en
            de
          }
        }
        ... on CrowdriffId {
          crowdriffId
        }
        ... on ImageList {
          locTitle {
            en
            de
            no
          }
          cloudinaryImages {
            locDescription {
              en
              de
              no
            }
            mainImage
            image {
              height
              public_id
              width
              url
              context {
                custom {
                  credit
                  caption
                  created
                  alt
                }
              }
            }
          }
        }
        ... on Video {
          title {
            en
            de
            no
          }
          url {
            en
            de
            no
          }
        }
        ... on LocaleRichText {
          noRaw
          enRaw
          deRaw
        }
        ... on HighlightedOneProduct {
          product: relevantProducts {
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          locHighlightedOneProduct {
            no {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            en {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            de {
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
          }
        }
        # This differs from 'OneArticleQuery' - start
        ... on CampaignHighlightedProducts {
          locTitle {
            en
            de
            no
          }
          locLink {
            locTitle {
              en
              de
              no
            }
            locUrl {
              en
              de
              no
            }
          }
          products: relevantProducts {
            __typename
            ... on Activity {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
            ... on Service {
              _id
              title
              locTitle {
                no
                en
                de
              }
              slug {
                current
              }
              locSlug {
                en {
                  current
                }
                de {
                  current
                }
                no {
                  current
                }
              }
              cloudinaryImages {
                mainImage
                image {
                  height
                  public_id
                  width
                  url
                }
              }
              place {
                _id
                title
                slug {
                  current
                }
                geopoint {
                  lat
                  lng
                }
              }
            }
          }
          locHighlightedProducts {
            no {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            en {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
            de {
              __typename
              ... on Activity {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
              ... on Service {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  en {
                    current
                  }
                  de {
                    current
                  }
                  no {
                    current
                  }
                }
                cloudinaryImages {
                  mainImage
                  image {
                    height
                    public_id
                    width
                    url
                  }
                }
                place {
                  _id
                  title
                  slug {
                    current
                  }
                  geopoint {
                    lat
                    lng
                  }
                }
              }
            }
          }
        }
        # This differs from 'OneArticleQuery' - end
      }
    }
  }
`;

// * Queries used by the api

// Get all activities by region AND all categories and subcategories
export const allActivityByRegionAndCategoriesAndSubCategoriesQuery = gql`
  query AllActivityByRegionAndCategoriesAndSubCategoriesQuery($regionId: ID!) {
    allActivity(
      sort: { title: ASC }
      # limit: 2
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { eq: $regionId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      locTitle {
        no
        en
        de
      }
      category {
        _id
      }
      subCategory {
        _id
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      place {
        _id
        title
        geopoint {
          lat
          lng
        }
        important
      }
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
    }
    allActivityCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allActivitySubCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      activityCategory {
        _id
        title
        locTitle {
          no
          en
          de
        }
        slug {
          current
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
    }
  }
`;

// Get all service by region AND all categories and subcategories
export const allServiceByRegionAndCategoriesAndSubCategoriesQuery = gql`
  query AllServiceByRegionAndCategoriesAndSubCategoriesQuery($regionId: ID!) {
    allService(
      sort: { title: ASC }
      # limit: 2
      where: {
        _: { is_draft: false }
        geopoint: { lng: { neq: null }, lat: { neq: null } }
        place: { _id: { neq: null } }
        region: { _id: { eq: $regionId } }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      title
      locTitle {
        no
        en
        de
      }
      category {
        _id
      }
      subCategory {
        _id
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      place {
        _id
        title
        geopoint {
          lat
          lng
        }
        important
      }
      # PS: this one differs on 'activities' - begin
      locShortDescription {
        no
        en
        de
      }
      # PS: this one differs on 'activities' - end
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      cloudinaryImages {
        mainImage
        image {
          height
          public_id
          width
          url
        }
      }
    }
    allServiceCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
    allServiceSubCategory {
      _id
      title
      locTitle {
        no
        en
        de
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      serviceCategory {
        _id
        title
        locTitle {
          no
          en
          de
        }
        slug {
          current
        }
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
    }
  }
`;

// STATIC QUERIES
export const allDocumentsForStaticPathCreationQuery = gql`
  query AllDocumentsForStaticPathCreationQuery {
    allActivityLimited: allActivity(
      limit: 200
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allServiceLimited: allService(
      limit: 200
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allServiceSubCategory(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      serviceCategory {
        _id
      }
    }

    allServiceCategory(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allActivitySubCategory(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      activityCategory {
        _id
      }
    }

    allActivityCategory(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allPlace(where: { _: { is_draft: false }, slug: { _type: { eq: "slug" } } }) {
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allRegion(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allArticle(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allCampaign(where: { _: { is_draft: false } }) {
      _id
      isActive
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
      campaignRegion {
        locSlug {
          no {
            current
          }
          en {
            current
          }
          de {
            current
          }
        }
      }
    }

    allPage(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allRegister(
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;

export const allDocumentsForDynamicSitemapPathCreationQuery = gql`
  query AllDocumentsForStaticPathCreationQuery {
    allActivityOffsetted: allActivity(
      offset: 200
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }

    allServiceOffsetted: allService(
      offset: 200
      where: {
        _: { is_draft: false }
        # locSlug: { _type: { eq: "LocaleSlug" } }
      }
    ) {
      _id
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
`;
/*

  ACTIVITIES AND SERVICES BY SLUG

*/
// TODO: this can be done better
const productQueryValues = `_id
  _type
  title
  locTitle {
    no
    en
    de
  }
  locShortDescription {
    no
    en
    de
  }
  locDescription {
    noRaw
    enRaw
    deRaw
  }
  category {
    _id
    title
    locTitle {
      no
      en
      de
    }
  }
  subCategory {
    _id
    title
    locTitle {
      no
      en
      de
    }
  }
  place {
    __typename
    ... on Place {
      _id
      title
      slug {
        current
      }
      geopoint {
        lat
        lng
      }
      important
    }
  }
  provider {
    __typename
    ... on Provider {
      _id
      title
      slug {
        current
      }
    }
  }
  region {
    __typename
    ... on Region {
      _id
      title
      locTitle {
        no
        en
        de
      }
      locShortDescription {
        no
        en
        de
      }
      locDescription {
        noRaw
        enRaw
        deRaw
      }
      slug {
        current
      }
      locSlug {
        no {
          current
        }
        en {
          current
        }
        de {
          current
        }
      }
    }
  }
  geopoint {
    lat
    lng
  }
  slug {
    current
  }
  locSlug {
    no {
      current
    }
    en {
      current
    }
    de {
      current
    }
  }

  cloudinaryImages {
    mainImage
    locDescription {
      no
      en
      de
    }
    image {
      public_id
      height
      width
      url
      context {
        custom {
          credit
          caption
          created
          alt
        }
      }
    }
  }
  # The fields below are not in the query that returns all the activities
  address {
    postalAddress {
      addressCountry
      addressLocality
      county
      municipality
      postalCode
      streetAddress
    }
  }
  certificates {
    blaattFlagg
    greenKey
    iso14001
    miljofyrtaarn
    norskOkoturisme
    svanen
  }
  contactPoint {
    bookingUrl
    email
    telephone
    webURL
  }
  externalSystems {
    ... on ExternalSystem {
      externalURI
      title
    }
  }
  fromPrice
`;

export const activityBySlug = gql`
  query ActivityBySlug($slug: String) {
    enActivity: allActivity(where: { locSlug: { en: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
    }

    noActivity: allActivity(where: { locSlug: { no: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
    }

    deActivity: allActivity(where: { locSlug: { de: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ActivitySubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
      event {
        bookingUrl
        recurring
        showings {
          bookingUrl
          date
          schedule {
            hour
            minutes
          }
        }
      }
    }
  }
`;
export const serviceyBySlug = gql`
  query ServiceyBySlug($slug: String) {
    enService: allService(where: { locSlug: { en: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
    }

    noService: allService(where: { locSlug: { no: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
    }

    deService: allService(where: { locSlug: { de: { current: { eq: $slug } } } }) {
      ${productQueryValues}
      facilities {
        __typename
        ... on FacilityProductOption {
          facility {
            _id
            facilityType
            locTitle {
              no
              en
              de
            }
            locShortDescription {
              no
              en
              de
            }
            subCategories {
              __typename
              ... on ServiceSubCategory {
                _id
                title
                locTitle {
                  no
                  en
                  de
                }
                slug {
                  current
                }
                locSlug {
                  no {
                    current
                  }
                  en {
                    current
                  }
                  de {
                    current
                  }
                }
              }
            }
          }
          facilityType
          facilityText
          facilityNumber
          facilityAscent {
            facilityAscentMeters
          }
          facilityDifficulty {
            facilityDifficultyEasy
            facilityDifficultyMedium
            facilityDifficultyChallenging
            facilityDifficultyExpert
          }
          facilityDistance {
            facilityDistanceKilometers
          }
          facilityDuration {
            facilityDurationShort
            facilityDurationDay
            facilityDurationMultiday
          }
          facilityFishing {
            facilityFishingFreshwater
            facilityFishingDeepsea
            facilityFishingFjord
            facilityFishingRiver
          }
          facilitySeason {
            facilitySeasonSpring
            facilitySeasonSummer
            facilitySeasonAutumn
            facilitySeasonWinter
          }
          facilitySkiing {
            facilitySkiCrosscountry
            facilitySkiCentre
            facilitySkiTouring
          }
          facilitySurface {
            facilitySurfaceAsphalt
            facilitySurfaceGravel
            facilitySurfacePath
            facilitySurfaceScree
          }
          facilityTerrain {
            facilityTerrainMountainArea
            facilityTerrainForestArea
            facilityTerrainCoastalArea
            facilityTerrainGlacier
            facilityTerrainCave
            facilityTerrainGorge
            facilityTerrainNationalPark
            facilityTerrainLake
            facilityTerrainRiver
            facilityTerrainWaterfall
          }
        }
      }
    }
  }
`;
