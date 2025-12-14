import { draftMode } from 'next/headers'
import { redirect } from '@/i18n/navigation'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import * as process from 'node:process'
import { getRoutingLocale } from '@/utils/locales'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const slug = searchParams.get('slug')
    const locale = searchParams.get('locale') || 'nl-NL'
    const routingLocale = getRoutingLocale(locale)

    console.log(`Preview request received with slug: ${slug} and locale: ${locale}`)

    if (token !== process.env.CONTENTFUL_PREVIEW_URL_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 })
    }

    const post = await getBlogPostBySlug(locale, slug, true)

    if (!post) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    const draft = await draftMode()

    draft.enable()

    console.log(`Preview mode enabled for post: ${post.title} (${post.slug})`)

    return redirect({
        href: `/${post.category.slug}/${post.slug}`,
        locale: routingLocale
    })
}
