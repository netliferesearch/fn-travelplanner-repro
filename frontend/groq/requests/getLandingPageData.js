import groq from 'groq';
import { clientGROQ } from '../client';

// Get array with one landing page by _id
export const getLandingPageData = async id => {
  const query = groq`*[
      _id == $id && (
        _type == "LandingPage"
        || _type == "LandingPageInspiration"
        || _type == "LandingPageEvents"
        || _type == "LandingPageAttractions"
      )
  ]{
    _id,
    _type,
    title,
    locTitle,
    locShortDescription,
    featureImage{public_id, context{custom{credit, caption, created, alt}}},
    "highlightedArticles": highlightedArticles|order(title asc)[0..3]->{
      _id,
      regionSubscriber[]->{_id, title},
      region->{_id},
      articleCategory->{_id, locTitle, locSlug},
      cloudinaryImages{mainImage, image{height, public_id, width, url}},
      coverImage{image{public_id}, locDescription},
      locTitle,
      slug,
      locSlug,
      locShortDescription,
    },
    locHighlightedArticles{
      "no": no|order(title asc)[0..3]->{
        _id,
        regionSubscriber[]->{_id, title},
        region->{_id},
        articleCategory->{_id, locTitle, locSlug},
        cloudinaryImages{mainImage, image{height, public_id, width, url}},
        coverImage{image{public_id}, locDescription},
        locTitle,
        slug,
        locSlug,
        locShortDescription,
      },
      "en": en|order(title asc)[0..3]->{
        _id,
        regionSubscriber[]->{_id, title},
        region->{_id},
        articleCategory->{_id, locTitle, locSlug},
        cloudinaryImages{mainImage, image{height, public_id, width, url}},
        coverImage{image{public_id}, locDescription},
        locTitle,
        slug,
        locSlug,
        locShortDescription,
      },
      "de": de|order(title asc)[0..3]->{
        _id,
        regionSubscriber[]->{_id, title},
        region->{_id},
        articleCategory->{_id, locTitle, locSlug},
        cloudinaryImages{mainImage, image{height, public_id, width, url}},
        coverImage{image{public_id}, locDescription},
        locTitle,
        slug,
        locSlug,
        locShortDescription,
      },
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
  return clientGROQ.fetch(query, { id });
};
