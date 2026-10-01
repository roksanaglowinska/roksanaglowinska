import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roksanaglowinska.pl';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/polityka-prywatnosci', '/regulamin'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
