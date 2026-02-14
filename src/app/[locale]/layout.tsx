import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Prata, Cinzel, Josefin_Sans, Bodoni_Moda } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

import '@/styles/tailwind.css'

const prata = Prata({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-display',
})

const cinzel = Cinzel({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})

const josefinSans = Josefin_Sans({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
})

const bodoni = Bodoni_Moda({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-bodoni',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://designedbyemerald.com'),
    title: {
        template: '%s - Designed by Emerald',
        default: 'Designed by Emerald - Interior Design & Fit-Out, Dubai',
    },
    description:
        'Designed by Emerald is an interior design studio focused on creating elegant, functional and timeless spaces in Dubai. Specialising in high-end residential, commercial, healthcare and hospitality interiors.',
    keywords: [
        'interior design Dubai',
        'fit-out company Dubai',
        'residential interior design Dubai',
        'commercial fit-out Dubai',
        'luxury interiors Dubai',
        'smart building integration Dubai',
        'interior design studio UAE',
        'Designed by Emerald',
    ],
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    other: {
        'theme-color': '#1a3d2e',
    },
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    // Enable static rendering
    unstable_setRequestLocale(locale)

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()

    return (
        <html
            lang={locale}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={`h-full bg-neutral-950 text-base antialiased ${prata.variable} ${cinzel.variable} ${josefinSans.variable} ${bodoni.variable}`}
        >
            <body className="flex min-h-full flex-col">
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
