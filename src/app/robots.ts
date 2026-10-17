import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://yourwebsite.com'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you have any admin or private routes later, you can disallow them like this:
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}