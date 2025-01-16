import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const path = searchParams.get('path')

    if (token !== process.env.CONTENTFUL_REVALIDATE_TOKEN) {
        return new Response('Invalid token', { status: 401 })
    }

    if (path) {
        revalidatePath(path)
        return Response.json({ revalidated: true, now: Date.now() })
    }

    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
    })
}
