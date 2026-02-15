'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactForm } from '@/components/ContactForm'

import zenGardenImage from '@/images/pdf_raw/page-002-004.webp'

function ContactDetails() {
    const t = useTranslations('Contact')

    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                {t('reachHeading')}
            </h2>

            <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                <div>
                    <dt className="font-semibold text-neutral-950">{t('whatsappLabel')}</dt>
                    <dd>
                        <a
                            href="https://wa.me/971582495005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 hover:text-neutral-950 transition"
                        >
                            +971 58 249 5005
                        </a>
                    </dd>
                </div>
                <div>
                    <dt className="font-semibold text-neutral-950">{t('emailLabel')}</dt>
                    <dd>
                        <a
                            href="mailto:info@designedbyemerald.com"
                            className="text-neutral-600 hover:text-neutral-950 transition"
                        >
                            info@designedbyemerald.com
                        </a>
                    </dd>
                </div>
            </dl>

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    {t('studioLabel')}
                </h2>
                <address className="mt-6 text-sm not-italic text-neutral-600">
                    <strong className="font-semibold text-neutral-950">Dubai</strong>
                    <br />
                    {t('studioAddress1')}
                    <br />
                    {t('studioAddress2')}
                </address>
            </Border>

            <Border className="mt-16 pt-16">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                        src={zenGardenImage}
                        alt="Designed by Emerald studio interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={85}
                    />
                </div>
            </Border>
        </FadeIn>
    )
}

export function ContactContent() {
    const t = useTranslations('Contact')

    return (
        <>
            <PageIntro eyebrow={t('pageEyebrow')} title={t('pageTitle')}>
                <p>{t('pageBody')}</p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <FadeIn className="lg:order-last">
                        <ContactForm />
                    </FadeIn>
                    <ContactDetails />
                </div>
            </Container>
        </>
    )
}
