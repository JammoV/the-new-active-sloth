import { defineRouting } from 'next-intl/routing'

const LOCALE_NL = 'nl-NL'
const LOCALE_EN = 'en-US'

export const routing = defineRouting({
    locales: [LOCALE_NL, LOCALE_EN],
    defaultLocale: LOCALE_NL,
    localePrefix: {
        mode: 'as-needed',
        prefixes: {
            'nl-NL': '/nl',
            'en-US': '/en',
        },
    },
    domains: [
        {
            domain: 'www.theactivesloth.nl',
            defaultLocale: LOCALE_NL,
            locales: [LOCALE_NL],
        },
        {
            domain: 'www.theactivesloth.com',
            defaultLocale: LOCALE_EN,
            locales: [LOCALE_EN],
        },
    ],
    pathnames: {
        '/posts': {
            'nl-NL': '/artikelen',
            'en-US': '/posts',
        },
    } as Record<string, Record<string, string> | string>,
})
