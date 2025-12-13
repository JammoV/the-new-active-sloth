import type { Metadata } from 'next'
import { Lato, Fira_Sans_Condensed, Noto_Serif, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import React from 'react'
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Footer from '@/organisms/Footer'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    display: 'swap',
    variable: '--font-lato',
})

const noto = Noto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
    variable: '--font-noto',
})

const fira = Fira_Sans_Condensed({
    subsets: ['latin'],
    weight: ['800'],
    display: 'swap',
    variable: '--font-fira',
})

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
    variable: '--font-caveat',
})

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
    props: Omit<LayoutProps<'/[locale]'>, 'children'>
): Promise<Metadata> {
    const { locale } = await props.params

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: 'LocaleLayout',
    })

    return {
        title: 'The Active Sloth',
    }
}

export default async function LocaleLayout({
    children,
    params,
}: LayoutProps<'/[locale]'>) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    return (
        <html lang={locale}>
            <body
                className={`${lato.variable} ${noto.variable} ${fira.variable} ${caveat.variable}`}
            >
                <NextIntlClientProvider>
                    <div className="min-h-screen flex flex-col">
                        <main className="grow">{children}</main>
                        <Footer />
                        <Analytics />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
