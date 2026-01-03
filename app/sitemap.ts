import type { MetadataRoute } from 'next'
import { getDynamicBlogSlugs } from '@/client/contentful/BlogApi'

export async function generateSitemaps() {
    return [{ id: 'nl' }, { id: 'en' }]
}

export default async function sitemap(props: {
    id: Promise<string>
}): Promise<MetadataRoute.Sitemap> {
    const id = await props.id
    const locale = id === 'nl' ? 'nl-NL' : 'en-US'
    const baseUrl =
        locale === 'nl-NL'
            ? 'https://www.theactivesloth.nl'
            : 'https://www.theactivesloth.com'
    const dynamicBlogSlugs = await getDynamicBlogSlugs(locale)
    const categorySlugs =
        locale === 'nl-NL'
            ? ['/azie', '/midden-amerika', '/europa', '/overig']
            : ['/asia', '/central-america', '/europe', '/other']

    const dynamicBlogUrls = dynamicBlogSlugs.map(({ slug }) => {
        return {
            url: `${baseUrl}${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    }) satisfies MetadataRoute.Sitemap

    const categoryUrls = categorySlugs.map((categorySlug) => {
        return {
            url: `${baseUrl}${categorySlug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    }) satisfies MetadataRoute.Sitemap

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/${locale === 'nl-NL' ? 'artikelen' : 'posts'}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ] satisfies MetadataRoute.Sitemap

    return [...staticUrls, ...dynamicBlogUrls, ...categoryUrls]
}
