import type { MetadataRoute } from 'next'
import { getDynamicBlogSlugs } from '@/client/contentful/BlogApi'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const dynamicBlogSlugs = await getDynamicBlogSlugs()

    const dynamicBlogUrls = dynamicBlogSlugs.map(({ slug }) => {
        return {
            url: `https://www.theactivesloth.nl${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    }) satisfies MetadataRoute.Sitemap

    const categoryUrls = ['/azie', '/midden-amerika', '/europa', '/overig'].map(
        (categorySlug) => {
            return {
                url: `https://www.theactivesloth.nl${categorySlug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            }
        }
    ) satisfies MetadataRoute.Sitemap

    const staticUrls = [
        {
            url: 'https://www.theactivesloth.nl',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://www.theactivesloth.nl/artikelen',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ] satisfies MetadataRoute.Sitemap

    return [...staticUrls, ...dynamicBlogUrls, ...categoryUrls]
}
