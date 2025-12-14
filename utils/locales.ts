export const getContentFullLocale = (locale: string) => {
    switch (locale) {
        case 'nl':
            return 'nl-NL'
        case 'en':
            return 'en-US'
        default:
            return 'nl-NL'
    }
}

export const getRoutingLocale = (locale: string): 'nl' | 'en' => {
    const routingLocale = locale.slice(0, 2)

    if (routingLocale === 'en') {
        return 'en'
    }

    return 'nl'
}