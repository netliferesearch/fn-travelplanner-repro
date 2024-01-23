function redirects() {
  return false;
}
export async function middleware(req) {
  return redirects(req);
}
