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