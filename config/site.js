module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Soundtracktor', // Navigation and Site Title
  titleAlt: 'Soundtracktor', // Title for JSONLD
  description: 'A blog about music and tech',
  url: 'https://soundtracktor.com/blog', // Domain of your site. No trailing slash!
  siteUrl: 'https://soundtracktor.com/blog', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Justin', // Author for schemaORGJSONLD
  themeColor: '#3654EB',
  backgroundColor: '#d3e0ff',
  twitter: '@miuki_miu', // Twitter Username
};
