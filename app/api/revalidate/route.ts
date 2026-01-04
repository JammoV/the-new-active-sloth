import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import { getBlogPostById } from '@/client/contentful/BlogApi'

const revalidatePost = async (
    entityId: string,
    locale: string
): Promise<string[]> => {
    try {
        const post = await getBlogPostById(entityId, locale)

        if (post) {
            revalidatePath(`/${post.category.slug}/${post.slug}`)
            revalidatePath(`/${post.category.slug}`)
            return [
                `/${post.category.slug}/${post.slug}`,
                `/${post.category.slug}`,
            ]
        } else {
            return []
        }
    } catch (error) {
        return []
    }
}

export async function POST(request: NextRequest) {
    const headersList = await headers()
    const token = headersList.get('token')

    if (token !== process.env.CONTENTFUL_REVALIDATE_TOKEN) {
        return new Response('Invalid token', { status: 401 })
    }

    const { entityId } = await request.json()

    if (!entityId) {
        return Response.json({
            revalidated: false,
            now: Date.now(),
            message: 'Missing entity ID to revalidate',
            entityId,
        })
    }

    if (entityId) {
        const nlResults = await revalidatePost(entityId, 'nl-NL')
        const enResults = await revalidatePost(entityId, 'en-US')
        revalidatePath(`/artikelen`)
        revalidatePath(`/posts`)
        revalidatePath(`/`)

        if (nlResults.length > 0 || enResults.length > 0) {
            return Response.json({
                revalidated: true,
                now: Date.now(),
                message: 'Revalidated',
                entityId,
                paths: { 'nl-NL': nlResults, 'en-US': enResults },
            })
        } else {
            return Response.json({
                revalidated: false,
                now: Date.now(),
                message: 'Failed to revalidate post',
                entityId,
            })
        }
    }
}
