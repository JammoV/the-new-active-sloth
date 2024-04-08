import type { Metadata } from 'next'
import { Roboto, Merienda } from 'next/font/google'
import './globals.css'
import React from 'react'

import Footer from '@/organisms/Footer'
import Header from '@/organisms/Header'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500'],
    display: 'swap',
    variable: '--font-roboto',
})
const merienda = Merienda({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-merienda',
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
            <body className={`${roboto.variable} ${merienda.variable}`}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
