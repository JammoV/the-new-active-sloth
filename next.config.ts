import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
    images: {
        qualities: [50, 75, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXTJS_IMAGE_HOSTNAME,
            },
        ],
    }
}

export default withNextIntl(nextConfig)
