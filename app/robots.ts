import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/*.CVS', '/*.Zip$', '/*.Svn$', '/*.Idea$', '/*.Sql$'],
        },
        sitemap: [`https://www.theactivesloth.nl/sitemap.xml`],
    }
}
