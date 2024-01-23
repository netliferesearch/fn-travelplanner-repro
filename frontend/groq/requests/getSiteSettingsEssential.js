import groq from 'groq';
import { clientGROQ } from '../client';

// Get footer links
export const getSiteSettingsEssential = async () => {
  const query = groq`*[_type == "SiteSettings" && !(_id in path('drafts.**'))]{
    footerLinks[]->{_id, slug, locSlug, title, locTitle, "__typename": _type},
    footerLinksLeft[]->{_id, slug, locSlug, title, locTitle, "__typename": _type},
    googleGTM
  }`;
  return clientGROQ.fetch(query);
};
