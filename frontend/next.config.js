const fs = require('fs');

const adServiceUrls =
  '*.google.com *.google.no *.googleadservices.com adservice.google.de *.g.doubleclick.net *.googlesyndication.com static.sojern.com csi.gstatic.com api.hubapi.com forms.hubspot.com';

const analyticsUrls =
  '*.analytics.google.com *.googletagmanager.com *.googleapis.com www.gstatic.com *.google-analytics.com connect.facebook.net *.googletagservices.com *.cookiebot.com *.skyra.no';

const snapSeaUrls = 'https://snapsea.fra1.digitaloceanspaces.com/ https://app.snapsea.io/';

const apiServiceUrls = '*.mapbox.com';

const videoUrls = 'www.youtube.com player.vimeo.com';
// * Webpack 5 no longer polyfills Node.js core modules automatically which means
//   if you use them in your code running in browsers or alike, you will have to
//   install compatible modules from npm and include them yourself.
// * See: https://webpack.js.org/configuration/resolve/#resolvefallback

/* eslint-disable */
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on 'node' modules
    if (!isServer) {
      config.resolve.fallback = {
        // Don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        fs: false,
        // Resolve 'path' module with a polyfill
        path: require.resolve('path-browserify'),
      };
    }
    return config;
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'media.newmindmedia.com',
      'api.mapbox.com',
      'images.citybreakcdn.com',
      'images.citybreak.com',
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    // Vercel
    ENVIRONMENT: process.env.ENVIRONMENT,
    // Sanity
    SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_STUDIO_API_PROJECT_ID,
    SANITY_STUDIO_API_DATASET: process.env.SANITY_STUDIO_API_DATASET,
    SANITY_STUDIO_API_TOKEN: process.env.SANITY_STUDIO_API_TOKEN,
    // Auth0
    AUTHO_BASE_URL: process.env.AUTHO_BASE_URL,
    // Mapbox
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    // Netlify
    URL: process.env.URL,
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
    // GTM
    googleTagManager: fs.readFileSync('./src/vendor/googleTagManager.js').toString(),
    // Next.js
    NEXT_IMAGE_ALLOWED_DOMAINS: 'localhost,cdn.sanity.io,res.cloudinary.com,media.newmindmedia.com',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self' ${adServiceUrls} blob:; \
              script-src 'self' 'unsafe-eval' 'unsafe-inline' ${analyticsUrls} ${apiServiceUrls} ${videoUrls} ${adServiceUrls}; \
              script-src-elem 'self' 'unsafe-inline' ${analyticsUrls} ${apiServiceUrls} ${videoUrls} ${adServiceUrls} ${snapSeaUrls} blob:;\
              connect-src 'self' ws: www.facebook.com www.dalsnibba.no dalsnibba.no *.sanity.io vitals.vercel-insights.com vimeo.com *.hsforms.com ${adServiceUrls} ${analyticsUrls} ${apiServiceUrls};\
              worker-src 'self' blob:;\
              frame-src 'self' ${videoUrls} ${adServiceUrls} ${analyticsUrls} ${apiServiceUrls} ${snapSeaUrls};\
              img-src 'self' res.cloudinary.com d3qvqlc701gzhm.cloudfront.net ${adServiceUrls} ${analyticsUrls} ${apiServiceUrls} data: http: https: blob:; \
              media-src 'self' res.cloudinary.com ${adServiceUrls} data: http: https:; \
              style-src 'self' 'unsafe-inline' ${apiServiceUrls} ${adServiceUrls} ${snapSeaUrls} fonts.googleapis.com www.googletagmanager.com; \
              object-src 'none'; \
              report-uri https://netlifedesign.report-uri.com/r/d/csp/enforce;`,
          },
          {
            key: 'X-Robots-Tag',
            value: process.env.ENVIRONMENT === 'production' ? 'index,follow' : 'noindex,nofollow',
          },
        ],
      },
    ];
  },
};
