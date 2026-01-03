import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = (await headers()).get('host')

    const isNL = host?.endsWith('.nl')

    const sitemapUrl = isNL
        ? 'https://www.theactivesloth.nl/sitemap/nl.xml'
        : 'https://www.theactivesloth.com/sitemap/en.xml'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/*.CVS', '/*.Zip$', '/*.Svn$', '/*.Idea$', '/*.Sql$'],
        },
        sitemap: [sitemapUrl],
    }
}
