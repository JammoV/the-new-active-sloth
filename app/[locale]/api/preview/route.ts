import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import * as process from 'node:process'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const slug = searchParams.get('slug')

    if (token !== process.env.CONTENTFUL_PREVIEW_URL_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 })
    }

    const post = await getBlogPostBySlug(slug, true)

    if (!post) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    const draft = await draftMode()

    draft.enable()

    redirect(`/${post.category.slug}/${post.slug}`)
}
