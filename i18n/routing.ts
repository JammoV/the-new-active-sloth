import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    localeDetection: false,
    localeCookie: false,
    localePrefix: process.env.I18N_USE_LOCALE_PREFIX === 'true' ? 'always' : 'as-needed',
    domains: [
        {
            domain: process.env.I18N_DOMAIN_NL,
            defaultLocale: 'nl',
            locales: ['nl'],
        },
        {
            domain: process.env.I18N_DOMAIN_EN,
            defaultLocale: 'en',
            locales: ['en'],
        }
    ]
})
