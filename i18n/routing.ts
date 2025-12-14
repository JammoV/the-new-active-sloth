import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    localePrefix: process.env.I18N_USE_LOCALE_PREFIX,
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
        },
    ],
    pathnames: {
        '/posts': {
            nl: '/artikelen',
            en: '/posts',
        },
    } as Record<string, Record<string, string> | string>,
})
