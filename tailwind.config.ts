import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'object-bottom',
        'object-center',
        'object-left',
        'object-left-bottom',
        'object-left-top',
        'object-right',
        'object-right-bottom',
        'object-right-top',
        'object-top',
    ],
    theme: {
        screens: {
            desktop: '1280px',
            tablet: '768px',
            mobile: '378px',
        },
        extend: {
            fontSize: {
                xs: '14px',
                md: '16px', // tip
                lg: '18px', // paragraph
                xl: '20px', //h4 / intro
                '2xl': '26px', //h3
                '3xl': '32px', // h2
                '4xl': '48px', // title
            },
            colors: {
                primary: {
                    DEFAULT: '#0C392D',
                    grey: '#99B4B2',
                    light: '#C8E4DC',
                    lighter: '#F3F8F7',
                },
                cta: {
                    DEFAULT: '#FE5328',
                },
                link: {
                    DEFAULT: '#d2916b',
                },
                black: {
                    DEFAULT: '#010101',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                },
            },
            spacing: {
                xs: '6px',
                sm: '12px',
                md: '24px',
                lg: '48px',
                xl: '96px',
            },
        },
        transitionProperty: {
            horizontal: 'left, right',
            vertical: 'top, bottom',
        },
        fontFamily: {
            fira: ['var(--font-fira)', ...fontFamily.sans], // logo
            noto: ['var(--font-noto)', ...fontFamily.serif], // headers
            lato: ['var(--font-lato)', ...fontFamily.sans], // body
        },
    },
    plugins: [],
}
export default config
