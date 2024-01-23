import groq from 'groq';
import { clientGROQ } from '../client';

// Get one Campaign by language, slug and type
export const getOneCampaign = async ({ lang, campaignSlug, regionSlug }) => {
  const query = groq`*[
    _type == "Campaign"
    && locSlug[$lang].current == $campaignSlug
    && campaignRegion->locSlug[$lang].current == $regionSlug
    && isActive == true
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    isActive,
    locTitle,
    locSlug,
    locShortDescription,
    campaignRegion->{
      region->{_id},
      locTitle,
      locSlug,
      locShortDescription,
      campaignRegionLogo{
        _type,
        asset->{
          title,
          altText,
          description,
          url,
        }
      },
      campaignRegionColor{hex},
      coverImage{
        locDescription,
        image{type, format, url, secure_url, public_id, width, height},
      }
    },
    campaignColor->{color{hex}},
    coverImage{
      locDescription,
      image{context, type, format, url, secure_url, public_id, width, height},
    },
    topLinks[]{_key, locTitle, locUrl},
    content[]{
      _key,
      _type,
      title,
      locTitle,
      locLink,
      snapSeaGalleryId,
      url,
      "__typename": _type,
      "deRaw": de,
      "enRaw": en,
      "noRaw": no,
      cloudinaryImages[]{mainImage,locDescription, image{height, public_id, width, context, url}},
      status,
      quote,
      cite{locTitle, locUrl},
      campaigns[]{
        campaign->{
          _id,
          isActive,
          locTitle,
          locSlug,
          locShortDescription,
          campaignRegion->{
            region->{_id},
            locTitle,
            locSlug,
            locShortDescription,
            campaignRegionColor{hex},
            campaignRegionLogo{_type, asset{title, altText, description, url}},
            coverImage{locDescription, image{context, type, format, url, secure_url, public_id, width, height}},
          },
          campaignColor->{color{hex}},
          coverImage{locDescription, image{context, type, format, url, secure_url, public_id, width, height}},
        },
      },
      locDescription,
      relevantArticles[]->{
        title,
        locTitle,
        slug,
        locSlug,
        locShortDescription,
        cloudinaryImages{
          altText,
          locDescription,
          mainImage,
          image{
            height,
            public_id,
            width,
            url
          },
        },
        images{
          altText,
          mainImage,
          imageRef{cloudinaryId},
        },
        coverImage{
          image{public_id},
          locDescription,
        },
      },
      locHighlightedArticles{
        no[]->{
          title,
          locTitle,
          slug,
          locSlug,
          locShortDescription,
          cloudinaryImages{
            altText,
            locDescription,
            mainImage,
            image{
              height,
              public_id,
              width,
              url
            },
          },
          images{
            altText,
            mainImage,
            imageRef{cloudinaryId},
          },
          coverImage{
            image{public_id},
            locDescription,
          },
        },
        en[]->{
          title,
          locTitle,
          slug,
          locSlug,
          locShortDescription,
          cloudinaryImages{
            altText,
            locDescription,
            mainImage,
            image{
              height,
              public_id,
              width,
              url
            },
          },
          images{
            altText,
            mainImage,
            imageRef{cloudinaryId},
          },
          coverImage{
            image{public_id},
            locDescription,
          },
        },
        de[]->{
          title,
          locTitle,
          slug,
          locSlug,
          locShortDescription,
          cloudinaryImages{
            altText,
            locDescription,
            mainImage,
            image{
              height,
              public_id,
              width,
              url
            },
          },
          images{
            altText,
            mainImage,
            imageRef{cloudinaryId},
          },
          coverImage{
            image{public_id},
            locDescription,
          },
        },
      },
      campaign->{
        _id,
        isActive,
        locTitle,
        locSlug,
        locShortDescription,
        campaignRegion->{
          region->{_id},
          locTitle,
          locSlug,
          locShortDescription,
          campaignRegionColor{hex},
          campaignRegionLogo{_type, asset{title, altText, description, url}},
          coverImage{locDescription, image{type, format, url, secure_url, width, height}},
        },
        campaignColor->{color{hex}},
        coverImage{locDescription, image{type, format, url, secure_url, width, height}},
      },
      "product": relevantProducts->{
        "__typename": _type,
        _id,
        title,
        locTitle,
        slug,
        locSlug,
        cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
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
      },
      locHighlightedOneProduct{
        no->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        },
        en->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        },
        de->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        }
      },
      "products": relevantProducts[]->{
        "__typename": _type,
        _id,
        title,
        locTitle,
        slug,
        locSlug,
        cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
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
      },
      locHighlightedProducts{
        no[]->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        },
        en[]->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        },
        de[]->{
          "__typename": _type,
          _id,
          title,
          locTitle,
          slug,
          locSlug,
          cloudinaryImages[]{mainImage, image{height, public_id, width, url}},
          place->{
            _id,
            title,
            locTitle,
            slug,
            locSlug,
            geopoint,
          },
        }
      },
      locCampaigns{
        "__typename": _type,
        no[]{
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
        en[]{
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
        de[]{
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
      },
    },
  }`;
  return clientGROQ.fetch(query, { lang, campaignSlug, regionSlug });
};
