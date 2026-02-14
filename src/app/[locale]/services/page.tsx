import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { ContactSection } from '@/components/ContactSection'
import { RootLayout } from '@/components/RootLayout'
import { ServicesContent } from './ServicesContent'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Services' })
    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
    }
}

export default async function Services({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    return (
        <RootLayout>
            <ServicesContent />
            <ContactSection />
        </RootLayout>
    )
}
