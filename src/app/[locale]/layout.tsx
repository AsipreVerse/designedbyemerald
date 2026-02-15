import { type Metadata } from 'next'
import { Prata, Cinzel, Josefin_Sans, Cairo, Amiri } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

import { ConsentAnalytics } from '@/components/ConsentAnalytics'

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

const cairo = Cairo({
    subsets: ['arabic'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-cairo',
})

const amiri = Amiri({
    subsets: ['arabic'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-amiri',
})

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Metadata' })

    return {
        metadataBase: new URL('https://designedbyemerald.com'),
        title: {
            template: t('title.template'),
            default: t('title.default'),
        },
        description: t('description'),
        keywords: t('keywords').split(', '),
        icons: {
            icon: [
                { url: '/favicon.svg', type: 'image/svg+xml' },
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            ],
            apple: '/apple-touch-icon.png',
        },
        manifest: '/site.webmanifest',
        openGraph: {
            title: t('title.default'),
            description: t('description'),
            url: 'https://designedbyemerald.com',
            siteName: 'Designed by Emerald',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Designed by Emerald — Interior Design & Fit-Out | Dubai',
                    type: 'image/jpeg',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title.default'),
            description: t('description'),
            images: ['/og-image.jpg'],
        },
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: '/en',
                ar: '/ar',
            },
        },
        other: {
            'theme-color': '#0F2B1D',
        },
    }
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()

    return (
        <html
            lang={locale}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={`h-full bg-neutral-950 text-base antialiased ${prata.variable} ${cinzel.variable} ${josefinSans.variable} ${cairo.variable} ${amiri.variable}`}
        >
            <head>
                <link rel="preload" href="/images/marble-texture.webp" as="image" type="image/webp" />
            </head>
            <body className="flex min-h-dvh flex-col bg-neutral-950">
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <ConsentAnalytics />
                </NextIntlClientProvider>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ProfessionalService',
                            name: 'Designed by Emerald',
                            alternateName: 'DBE',
                            url: 'https://designedbyemerald.com',
                            logo: 'https://designedbyemerald.com/favicon.svg',
                            image: 'https://designedbyemerald.com/og-image.jpg',
                            description:
                                'Interior design, fit-out, engineering, and facility management solutions in Dubai, UAE.',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'The Meydan Hotel',
                                addressLocality: 'Dubai',
                                addressCountry: 'AE',
                            },
                            telephone: '+971582495005',
                            email: 'info@designedbyemerald.com',
                            areaServed: {
                                '@type': 'Country',
                                name: 'United Arab Emirates',
                            },
                            serviceType: [
                                'Interior Design',
                                'Fit-Out',
                                'Engineering Services',
                                'Facility Management',
                            ],
                            sameAs: [
                                'https://www.instagram.com/designedbyemerald.studio',
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    )
}
