import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import { getBlogPostById } from '@/client/contentful/BlogApi'

const revalidatePost = async (entityId: string, locale: string): Promise<boolean> => {
    try {
        const post = await getBlogPostById(entityId, locale)

        if (post) {
            revalidatePath(`/${post.category.slug}/${post.slug}`)
            revalidatePath(`/${post.category.slug}`)
            revalidatePath(`/artikelen`)
            revalidatePath(`/`)

            return true
        } else {
            return false
        }
    } catch (error) {
        return false
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
        const nlResult = await revalidatePost(entityId, 'nl-NL')
        const enResult = await revalidatePost(entityId, 'en-US')

        if (nlResult || enResult) {
            return Response.json({
                revalidated: true,
                now: Date.now(),
                message: 'Revalidated',
                entityId,
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
