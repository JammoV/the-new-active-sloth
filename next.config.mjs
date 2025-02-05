/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXTJS_IMAGE_HOSTNAME,
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/posts',
                destination: '/artikelen',
                permanent: true,
            },
            {
                source: '/posts/stedentrip-naar-lissabon',
                destination:
                    '/europa/zon-cultuur-onvergetelijke-vergezichten-in-lissabon',
                permanent: true,
            },
            {
                source: '/posts/roadtrip-door-albanie-de-leukste-plaatsen',
                destination: '/europa/de-ultieme-roadtrip-door-albanie',
                permanent: true,
            },
            {
                source: '/posts/een-weekend-in-valencia-alle-must-do-s',
                destination:
                    '/europa/een-weekend-in-het-zonnige-valencia-alle-must-dos',
                permanent: true,
            },
            {
                source: '/posts/een-stedentrip-naar-bruisend-berlijn',
                destination: '/europa/een-stedentrip-naar-bruisend-berlijn',
                permanent: true,
            },
            {
                source: '/posts/de-leukste-plaatsen-aan-de-franse-riviera',
                destination:
                    '/europa/de-mooiste-plaatsen-aan-de-franse-riviera',
                permanent: true,
            },
            {
                source: '/posts/citytrip-naar-de-mooie-stad-praag',
                destination: '/europa/citytrip-naar-het-sprookjesachtige-praag',
                permanent: true,
            },
            {
                source: '/posts/een-weekend-in-dresden-must-sees',
                destination: '/europa',
                permanent: true,
            },
            {
                source: '/posts/de-mooiste-meren-van-frankrijk',
                destination: '/europa/de-mooiste-meren-van-frankrijk',
                permanent: true,
            },
            {
                source: '/posts/stedentrip-naar-de-hoofdstad-van-polen-warschau',
                destination:
                    '/europa/stedentrip-naar-de-hoofdstad-van-polen-warschau',
                permanent: true,
            },
            {
                source: '/posts/citytrip-boedapest-alle-must-do-s',
                destination:
                    '/europa/alle-must-dos-in-het-betoverende-boedapest',
                permanent: true,
            },
            {
                source: '/posts/citytrip-dublin-de-leukste-bezienswaardigheden',
                destination:
                    '/europa/citytrip-dublin-de-leukste-bezienswaardigheden',
                permanent: true,
            },
            {
                source: '/posts/prachtige-kastelen-langs-de-dordogne',
                destination: '/europa',
                permanent: true,
            },
            {
                source: '/posts/dit-mag-je-niet-missen-tijdens-een-weekend-in-basel',
                destination: '/europa',
                permanent: true,
            },
            {
                source: '/posts/de-leukste-bezienswaardigheden-in-slovenie',
                destination: '/europa',
                permanent: true,
            },
            {
                source: '/posts/alle-highlights-van-corsica',
                destination:
                    '/europa/azuurblauwe-zee-en-ongerepte-bergen-op-Corsica',
                permanent: true,
            },
            {
                source: '/posts/citytrip-naar-kleurrijk-marrakesh',
                destination: '/overig/citytrip-naar-kleurrijk-marrakesh',
                permanent: true,
            },
            {
                source: '/posts/minigids-souvenirideeen',
                destination: '/overig',
                permanent: true,
            },
            {
                source: '/posts/cadeau-inspiratie-wat-geef-je-iemand-die-op-reis-gaat',
                destination:
                    '/overig/cadeau-inspiratie-wat-geef-je-iemand-die-op-reis-gaat',
                permanent: true,
            },
            {
                source: '/posts/shampoo-bar-ideaal-om-mee-te-nemen-op-reis',
                destination:
                    '/overig/shampoo-bar-ideaal-om-mee-te-nemen-op-reis',
                permanent: true,
            },
            {
                source: '/posts/bezoek-het-meer-met-zeven-kleuren-bacalar',
                destination:
                    '/midden-amerika/bezoek-bacalar-het-meer-met-zeven-kleuren',
                permanent: true,
            },
            {
                source: '/posts/paradijselijk-panama',
                destination:
                    '/midden-amerika/de-betoverende-eilanden-van-Panama',
                permanent: true,
            },
            {
                source: '/posts/betaalbare-activiteiten-in-la-fortuna',
                destination:
                    '/midden-amerika/betaalbare-activiteiten-in-la-fortuna',
                permanent: true,
            },
            {
                source: '/posts/reizen-door-veelzijdig-nicaragua',
                destination: '/midden-amerika/reizen-door-veelzijdig-nicaragua',
                permanent: true,
            },
            {
                source: '/posts/de-leukste-plaatsen-in-guatemala',
                destination:
                    '/midden-amerika/ontdek-de-mooiste-bestemmingen-in-Guatemala',
                permanent: true,
            },
            {
                source: '/posts/go-slow-op-het-caraibische-paradijs-caye-caulker',
                destination:
                    '/midden-amerika/go-slow-op-het-caraibische-caye-caulker',
                permanent: true,
            },
            {
                source: '/posts/bezienswaardigheden-rondom-de-maya-riviera',
                destination:
                    '/midden-amerika/bezienswaardigheden-rondom-de-maya-riviera',
                permanent: true,
            },
            {
                source: '/posts/reizen-met-de-tuktuk-door-sri-lanka',
                destination: '/azie/reizen-met-de-tuktuk-door-sri-lanka',
                permanent: true,
            },
            {
                source: '/posts/boottocht-lombok-flores-alles-wat-je-moet-weten',
                destination:
                    '/azie/boottocht-lombok-flores-alles-wat-je-moet-weten',
                permanent: true,
            },
            {
                source: '/posts/de-leukste-plaatsen-op-bali-and-lombok',
                destination: '/azie/de-mooiste-plekken-op-Bali-en-Lombok',
                permanent: true,
            },
            {
                source: '/posts/de-mooiste-eilanden-van-thailand',
                destination: '/azie/de-mooiste-eilanden-van-thailand',
                permanent: true,
            },
            {
                source: '/posts/highlights-west-maleisie-van-kuala-lumpur-naar-langkawi',
                destination:
                    '/azie/highlights-west-maleisie-van-kuala-lumpur-naar-langkawi',
                permanent: true,
            },
            {
                source: '/posts/must-do-thailand-kookcursus',
                destination: '/azie',
                permanent: true,
            },
            {
                source: '/posts/reis-naar-de-laid-back-surfplaats-canggu',
                destination: '/azie',
                permanent: true,
            },
        ]
    },
}

export default nextConfig
