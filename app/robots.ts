import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lefauteuilnoir-demo.fr'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // On désindexe la page mentions légales pour ne pas la voir dans les résultats de recherche
      disallow: ['/mentions-legales'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}