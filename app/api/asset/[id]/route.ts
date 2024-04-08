import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const searchParams = request.nextUrl.searchParams

    if (!searchParams.get('quality')) {
        searchParams.set('quality', '75')
    }

    /**
     * Fetch the image from the Directus assets endpoint
     */
    const assetUrl = `${process.env.DIRECTUS_BASE_URL}/assets/${params.id}?${searchParams.toString()}`

    /**
     * Fetch the asset from the remote URL
     */
    const assetResponse = await fetch(assetUrl)

    /**
     * Retrieve the Blob from the response
     */
    const blob = await assetResponse.blob()

    /**
     * Turn the Blob into a Buffer, so it can be returned to the client
     */
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const response = new NextResponse(buffer)

    response.headers.set('content-type', blob.type)

    return response
}
