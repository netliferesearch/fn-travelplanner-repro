import groq from 'groq';
import { clientGROQ } from '../client';

// Get one Provider by language and slug
export const getOneProvider = async ({ lang, slug }) => {
  const fallbackLang = lang === 'de' ? 'en' : lang;

  const query = groq`*[
    _type == "Provider"
    // && defined(geopoint) // TODO: necessary?
    && (locSlug[$lang].current == $slug || locSlug[$fallbackLang].current == $slug)
    && !(_id in path('drafts.**'))
  ][0]{
    _id,
    _type,
    locTitle,
    locSlug,
    locShortDescription,
    locDescription,
    region->{
      _id,
      locTitle,
      locSlug,
      locShortDescription,
    },
    geopoint,
    image{
      width,
      height,
      public_id,
      url,
      context{
        custom
      },
    },
    cloudinaryImages[]{
      mainImage,
      locDescription,
      image{
        width,
        height,
        public_id,
        url,
        secure_url,
        context{
          custom
        },
      },
    },
    address,
    contactPoint,
    socialMedia,
    SoMeTitle,
    snapSeaGalleryId,
    SoMeHashTag,
}`;
  return clientGROQ.fetch(query, { lang, slug, fallbackLang });
};
