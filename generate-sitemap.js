const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.9 },
    { url: '/about-us', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'weekly', priority: 0.7 },
    { url: '/mobile-app-design-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/professional-logo-design-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/social-media-marketing-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/search-engine-optimization-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/stationary', changefreq: 'weekly', priority: 0.7 },
    { url: '/lp', changefreq: 'weekly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/terms-conditions', changefreq: 'weekly', priority: 0.7 },
    { url: '/thank-you', changefreq: 'weekly', priority: 0.7 },
    
    // Add more routes as needed
  ];

  const stream = new SitemapStream({ hostname: 'https://webdesignmania.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  stream.pipe(writeStream);
  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream); // wait until the stream is fully written
}

generateSitemap().then(() => {
  console.log('Sitemap generated successfully');
});
