import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { MarbleStrip } from '@/components/MarbleStrip'
import { ContactContent } from './ContactContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Contact' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <ContactContent />
      <MarbleStrip className="mt-24 sm:mt-32" />
    </>
  )
}
