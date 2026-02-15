'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import imageVision from '@/images/vision.webp'
import imageMission from '@/images/mission.webp'

const richTextComponents = {
    bold: (chunks: React.ReactNode) => (
        <strong className="font-semibold text-neutral-950">{chunks}</strong>
    ),
}

function Vision() {
    const t = useTranslations('About.vision')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:ps-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={imageVision}
                            alt="Designed by Emerald — Vision"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square object-cover bg-neutral-100"
                            quality={85}
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-semibold text-neutral-950">
                            {t('heading')}
                        </h2>
                        <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                            {t.rich('body', richTextComponents)}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </Container>
    )
}

function Mission() {
    const t = useTranslations('About.mission')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pe-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={imageMission}
                            alt="Designed by Emerald — Mission"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square object-cover bg-neutral-100"
                            quality={85}
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="lg:row-span-2">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-semibold text-neutral-950">
                            {t('heading')}
                        </h2>
                        <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                            {t.rich('body', richTextComponents)}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </Container>
    )
}

function Innovation() {
    const t = useTranslations('About.innovation')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
                <h2 className="font-display text-4xl font-semibold text-neutral-950">
                    {t('heading')}
                </h2>
                <p className="mt-6 text-xl text-neutral-600">
                    {t('body')}
                </p>
            </FadeIn>
            <div className="mt-16">
                <GridList>
                    <GridListItem title={t('pillars.smart.title')}>
                        {t('pillars.smart.description')}
                    </GridListItem>
                    <GridListItem title={t('pillars.sustainable.title')}>
                        {t('pillars.sustainable.description')}
                    </GridListItem>
                    <GridListItem title={t('pillars.construction.title')}>
                        {t('pillars.construction.description')}
                    </GridListItem>
                    <GridListItem title={t('pillars.customized.title')}>
                        {t('pillars.customized.description')}
                    </GridListItem>
                </GridList>
            </div>
        </Container>
    )
}

function Values() {
    const t = useTranslations('About.hse')

    return (
        <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow={t('eyebrow')}
                title={t('title')}
                invert
            >
                <p className="text-lg text-neutral-300">
                    {t('body')}
                </p>
            </SectionIntro>
        </div>
    )
}

export function AboutContent() {
    return (
        <>
            <Vision />
            <Mission />
            <Innovation />
            <Values />
        </>
    )
}
