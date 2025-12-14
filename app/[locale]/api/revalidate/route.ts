import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import { getBlogPostById } from '@/client/contentful/BlogApi'

export async function POST(request: NextRequest) {
    const headersList = await headers()
    const token = headersList.get('token')

    if (token !== process.env.CONTENTFUL_REVALIDATE_TOKEN) {
        return new Response('Invalid token', { status: 401 })
    }

    const { entityId, locale } = await request.json()

    if (!entityId) {
        return Response.json({
            revalidated: false,
            now: Date.now(),
            message: 'Missing entity ID to revalidate',
        })
    }

    if (!locale) {
        return Response.json({
            revalidated: false,
            now: Date.now(),
            message: 'Missing locale to revalidate',
        })
    }

    if (entityId) {
        try {
            const post = await getBlogPostById(entityId, locale)

            if (post) {
                revalidatePath(`/${post.category.slug}/${post.slug}`)
                revalidatePath(`/${post.category.slug}`)
                revalidatePath(`/artikelen`)
                revalidatePath(`/`)

                return Response.json({
                    revalidated: true,
                    now: Date.now(),
                    message: 'Revalidated',
                })
            } else {
                return Response.json({
                    revalidated: false,
                    now: Date.now(),
                    message: 'Could not find post to revalidate',
                })
            }
        } catch (error) {
            return Response.json({
                revalidated: false,
                now: Date.now(),
                message: 'Failed to retrieve post to revalidate',
            })
        }
    }
}
