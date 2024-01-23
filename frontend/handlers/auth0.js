import { initAuth0 } from '@auth0/nextjs-auth0';
import { getBaseUrl } from './../config';

// Workaround for dynamic 'AUTH0_BASE_URL' env variable
export default initAuth0({
  baseURL: getBaseUrl(),
});
