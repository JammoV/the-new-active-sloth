import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'green-primary': '#347378',
                'green-light': '#EEF6F6',
                sandy: '#FFF9F3',
                sand: '#F9EBDD',
                orange: '#FCD8C9',
                'orange-dark': '#f3936d',
                dark: '#444444',
                grey: '#3C484B',
            },
        },
        transitionProperty: {
            horizontal: 'left, right',
            vertical: 'top, bottom',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        fontFamily: {
            roboto: ['var(--font-roboto)', ...fontFamily.serif],
            merienda: ['var(--font-merienda)', ...fontFamily.sans],
        },
    },
    plugins: [],
}
export default config
