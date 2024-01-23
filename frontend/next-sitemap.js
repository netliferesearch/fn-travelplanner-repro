const siteUrl = 'https://www.somewhere.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/plan/*', '/registrer-arrangement', '/api/*', '/api', '/server-sitemap.xml'],
  // ...other options
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
    policies:
      process.env.ENVIRONMENT === 'production'
        ? [{ userAgent: '*', allow: '/' }]
        : [{ userAgent: '*', disallow: '/' }],
  },
};
