import type { Metadata } from 'next'
import { Lato, Fira_Sans_Condensed, Noto_Serif, Caveat } from 'next/font/google'
import './globals.css'
import React from 'react'

import Footer from '@/organisms/Footer'
import Header from '@/organisms/Header'

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

export const metadata: Metadata = {
    title: 'The Active Sloth',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="nl">
            <body
                className={`${lato.variable} ${noto.variable} ${fira.variable} ${caveat.variable}`}
            >
                <div className="min-h-screen flex flex-col">
                    <main className="grow">{children}</main>

                    <Footer />
                </div>
            </body>
        </html>
    )
}
