import groq from 'groq';
import { clientGROQ } from '../client';

// Get one Region by language and slug
// TODO: Remove unused data from this query
export const getOneRegion = async ({ lang, slug }) => {
  const query = groq`*[_type == "Region" && locSlug[$lang].current == $slug && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    title,
    locTitle,
    slug,
    locSlug,
    locShortDescription,
    locDescription,
    image{public_id},
    mainImage{
      locDescription,
      image{
        public_id,
        height,
        width,
        context,
        created,
      }
    },
    SoMeTitle,
    SoMeHashTag,
    snapSeaGalleryId,
    socialMedia,

    // * Highlighted places
    highlightedPlaces {
      locTitle,
      locDescription,
      relevantPlaces[@->.noLandingPage != true && defined(@->.geopoint)]->{
        _id,
        _type,
        address,
        geopoint,
        image,
        locShortDescription,
        locSlug,
        locTitle,
        title,
        description,
        "mainImagePublicId": image.public_id,
        "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
        "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
      },
      locHighlightedPlaces {
        no[@->.noLandingPage != true && defined(@->.geopoint)]->{
          _id,
          _type,
          address,
          geopoint,
          image,
          locShortDescription,
          locSlug,
          locTitle,
          title,
          description,
          "mainImagePublicId": image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        },
        en[@->.noLandingPage != true && defined(@->.geopoint)]->{
          _id,
          _type,
          address,
          geopoint,
          image,
          locShortDescription,
          locSlug,
          locTitle,
          title,
          description,
          "mainImagePublicId": image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        },
        de[@->.noLandingPage != true && defined(@->.geopoint)]->{
          _id,
          _type,
          address,
          geopoint,
          image,
          locShortDescription,
          locSlug,
          locTitle,
          title,
          description,
          "mainImagePublicId": image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        },
      },
    },

    // * Highlighted services
    highlightedServices {
      locTitle,
      locDescription,
      relevantServices[0..2]->{
        _id,
        _type,
        address,
        cloudinaryImages[0..0],
        "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
        "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
        "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        category->,
        contactPoint,
        externalSystems,
        facilities[]->{
          ...,
          facility->{
            _id,
            facilityType,
            locTitle,
            locShortDescription,
            subCategories[]->{
              _id,
              title,
              locTitle,
              slug,
              locSlug,
            },
          },
        },
        fromPrice,
        geoDistancePlace,
        geopoint,
        geopointZoom,
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
        },
        slug,
        title,
        description,
      },
      locHighlightedServices{
        no[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{
            ...,
            facility->{
              _id,
              facilityType,
              locTitle,
              locShortDescription,
              subCategories[]->{
                _id,
                title,
                locTitle,
                slug,
                locSlug,
              },
            },
          },
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
        en[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{
            ...,
            facility->{
              _id,
              facilityType,
              locTitle,
              locShortDescription,
              subCategories[]->{
                _id,
                title,
                locTitle,
                slug,
                locSlug,
              },
            },
          },
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
        de[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{
            ...,
            facility->{
              _id,
              facilityType,
              locTitle,
              locShortDescription,
              subCategories[]->{
                _id,
                title,
                locTitle,
                slug,
                locSlug,
              },
            },
          },
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
      },
    },

    // * Highlighted articles
    highlightedArticles {
      ...,
      relevantArticles[0..3]->{
        _id,
        _type,
        articleCategory->,
        cloudinaryImages[0..0],
        coverImage,
        locShortDescription,
        locSlug,
        locTitle,
        slug,
        title,
      },
      locHighlightedArticles{
        no[0..3]->{
          _id,
          _type,
          articleCategory->,
          cloudinaryImages[0..0],
          coverImage,
          locShortDescription,
          locSlug,
          locTitle,
          slug,
          title,
        },
        en[0..3]->{
          _id,
          _type,
          articleCategory->,
          cloudinaryImages[0..0],
          coverImage,
          locShortDescription,
          locSlug,
          locTitle,
          slug,
          title,
        },
        de[0..3]->{
          _id,
          _type,
          articleCategory->,
          cloudinaryImages[0..0],
          coverImage,
          locShortDescription,
          locSlug,
          locTitle,
          slug,
          title,
        },
      }
    },

    // * Highlighted activities
    highlightedActivities {
      ...,
      relevantActivities[0..2]->{
        _id,
        _type,
        address,
        cloudinaryImages[0..0],
        "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
        "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
        "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        category->,
        contactPoint,
        externalSystems,
        facilities[]->{..., facility->},
        fromPrice,
        geoDistancePlace,
        geopoint,
        geopointZoom,
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
        },
        slug,
        title,
        description,
      },
      locHighlightedActivities {
        no[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{..., facility->},
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
        en[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{..., facility->},
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
        de[0..2]->{
          _id,
          _type,
          address,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          category->,
          contactPoint,
          externalSystems,
          facilities[]->{..., facility->},
          fromPrice,
          geoDistancePlace,
          geopoint,
          geopointZoom,
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
          },
          slug,
          title,
          description,
        },
      }
    },

    // * Highlighted events
    highlightedEvents {
      ...,
      relevantEvents[0..2]->{
        _id,
        _type,
        address,
        category->,
        cloudinaryImages[0..0],
        "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
        "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
        "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
        contactPoint,
        externalSystems,
        fromPrice,
        geoDistancePlace,
        geopoint,
        image,
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
        },
        slug,
        title,
        description,
      },
      locHighlightedEvents {
        no[0..2]->{
          _id,
          _type,
          address,
          category->,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          contactPoint,
          externalSystems,
          fromPrice,
          geoDistancePlace,
          geopoint,
          image,
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
          },
          slug,
          title,
          description,
          isEvent,
          event,
        },
        en[0..2]->{
          _id,
          _type,
          address,
          category->,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          contactPoint,
          externalSystems,
          fromPrice,
          geoDistancePlace,
          geopoint,
          image,
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
          },
          slug,
          title,
          description,
          isEvent,
          event,
        },
        de[0..2]->{
          _id,
          _type,
          address,
          category->,
          cloudinaryImages[0..0],
          "mainImagePublicId": cloudinaryImages[mainImage == true][0].image.public_id,
          "fallbackImagePublicId": cloudinaryImages[][0].image.public_id,
          "imageSecureUrl": cloudinaryImages[][0].image.secure_url,
          contactPoint,
          externalSystems,
          fromPrice,
          geoDistancePlace,
          geopoint,
          image,
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
          },
          slug,
          title,
          description,
          isEvent,
          event,
        },
      }
    },

    // * Campaign CTA
    campaignCTA{
      _type,
      status,
      campaign->{
        _id,
        isActive,
        locTitle,
        locSlug,
        locShortDescription,
        campaignColor->{color{hex}},
        coverImage,
        campaignRegion->{
          region->{_id},
          locTitle,
          locSlug,
          locShortDescription,
          campaignRegionLogo,
          campaignRegionColor,
          coverImage,
        }
      }
    },
    locCampaignCTA{
      no{
        _type,
        status,
        campaign->{
          _id,
          isActive,
          locTitle,
          locSlug,
          locShortDescription,
          campaignColor->{color{hex}},
          coverImage,
          campaignRegion->{
            region->{_id},
            locTitle,
            locSlug,
            locShortDescription,
            campaignRegionLogo,
            campaignRegionColor,
            coverImage,
          }
        }
      },
      en{
        _type,
        status,
        campaign->{
          _id,
          isActive,
          locTitle,
          locSlug,
          locShortDescription,
          campaignColor->{color{hex}},
          coverImage,
          campaignRegion->{
            region->{_id},
            locTitle,
            locSlug,
            locShortDescription,
            campaignRegionLogo,
            campaignRegionColor,
            coverImage,
          }
        }
      },
      de{
        _type,
        status,
        campaign->{
          _id,
          isActive,
          locTitle,
          locSlug,
          locShortDescription,
          campaignColor->{color{hex}},
          coverImage,
          campaignRegion->{
            region->{_id},
            locTitle,
            locSlug,
            locShortDescription,
            campaignRegionLogo,
            campaignRegionColor,
            coverImage,
          }
        }
      }
    },
    highlightedCampaigns{
      locCampaigns{
        no[0..0]{
          _type,
          campaign->{
            _id,
            isActive,
            locTitle,
            locSlug,
            locShortDescription,
            campaignColor->{color{hex}},
            coverImage,
            campaignRegion->{
              region->{_id},
              locTitle,
              locSlug,
              locShortDescription,
              campaignRegionLogo,
              campaignRegionColor,
              coverImage,
            }
          },
          readMoreText{
            no,
            en,
            de,
          },
          status,
        },
        en[0..0]{
          _type,
          campaign->{
            _id,
            isActive,
            locTitle,
            locSlug,
            locShortDescription,
            campaignColor->{color{hex}},
            coverImage,
            campaignRegion->{
              region->{_id},
              locTitle,
              locSlug,
              locShortDescription,
              campaignRegionLogo,
              campaignRegionColor,
              coverImage,
            }
          },
          readMoreText{
            no,
            en,
            de,
          },
          status,
        },
        de[0..0]{
          _type,
          campaign->{
            _id,
            isActive,
            locTitle,
            locSlug,
            locShortDescription,
            campaignColor->{color{hex}},
            coverImage,
            campaignRegion->{
              region->{_id},
              locTitle,
              locSlug,
              locShortDescription,
              campaignRegionLogo,
              campaignRegionColor,
              coverImage,
            }
          },
          readMoreText{
            no,
            en,
            de,
          },
          status,
        },
      }
    }
  }`;

  return clientGROQ.fetch(query, { lang, slug });
};
