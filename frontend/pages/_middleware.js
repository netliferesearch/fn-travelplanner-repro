import redirects from '../src/utils/redirects';

export async function middleware(req) {
  return redirects(req);
}
