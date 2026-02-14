import { type Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import imageVision from '@/images/vision.jpg'
import imageMission from '@/images/mission.jpg'
import { AboutContent } from './AboutContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'About' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'About' })

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('body')}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <ul className="list-disc space-y-2 pl-6 text-neutral-600">
            <li>{t('specialties.residential')}</li>
            <li>{t('specialties.villas')}</li>
            <li>{t('specialties.corporate')}</li>
            <li>{t('specialties.healthcare')}</li>
            <li>{t('specialties.commercial')}</li>
          </ul>
        </div>
      </PageIntro>

      <AboutContent />

      <ContactSection />
    </RootLayout>
  )
}
