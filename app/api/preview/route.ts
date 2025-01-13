import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getBlogPostBySlug } from '@/client/contentful/BlogApi'
import * as process from 'node:process'

export async function GET(request: Request) {
    // Parse query string parameters
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const slug = searchParams.get('slug')

    // Check the secret and next parameters
    // This secret should only be known to this Route Handler and the CMS
    if (token !== process.env.CONTENTFUL_PREVIEW_URL_TOKEN || !slug) {
        return new Response('Invalid token', { status: 401 })
    }

    // Fetch the headless CMS to check if the provided `slug` exists
    // getPostBySlug would implement the required fetching logic to the headless CMS
    const post = await getBlogPostBySlug(slug, true)

    // If the slug doesn't exist prevent draft mode from being enabled
    if (!post) {
        return new Response('Invalid slug', { status: 401 })
    }

    // Enable Draft Mode by setting the cookie
    const draft = await draftMode()

    draft.enable()

    // Redirect to the path from the fetched post
    // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
    redirect('/posts/' + post.slug)
}
