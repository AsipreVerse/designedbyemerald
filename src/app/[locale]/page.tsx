import { type Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import imageHeroCover from '@/images/hero-cover.jpg'
import imageIntro from '@/images/intro-new.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Types for params
type Props = {
    params: Promise<{ locale: string }>
}

function Hero() {
    const t = useTranslations('Hero')

    return (
        <div className="relative h-dvh w-full overflow-hidden bg-neutral-950">
            <Image
                src={imageHeroCover}
                alt="Designed by Emerald Interior"
                fill
                sizes="100vw"
                className="hero-bg-zoom object-cover opacity-80"
                priority
                quality={90}
                placeholder="blur"
            />

            {/* Refined gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-neutral-950/60" />

            <Container className="relative flex h-full items-center justify-center pb-0">
                <div className="max-w-4xl text-center">
                    {/* World-class staggered reveal with golden shimmer */}
                    <h1 className="font-display text-5xl font-light tracking-wide text-white sm:text-7xl md:leading-tight">
                        <span className="hero-line-1 inline-block">{t('line1')}</span>
                        <br className="hidden sm:block" />
                        <span className="hero-line-2 hero-shimmer inline-block italic text-cream-50/90">
                            {t('line2')}
                        </span>
                    </h1>
                    <p className="hero-line-2 mt-6 text-lg text-cream-50/70 sm:text-xl">
                        {t('subtitle')}
                    </p>
                </div>
            </Container>
        </div>
    )
}

function Intro() {
    const t = useTranslations('Intro')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-32 lg:items-center">
                <div className="max-w-lg">
                    <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                        {t('heading')}
                    </h2>
                    <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                        {t('p1')}
                    </p>
                </div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 sm:aspect-[4/3] lg:aspect-[4/5] lg:rounded-none">
                    <Image
                        src={imageIntro}
                        alt="Interior design detail"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        quality={85}
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
            </div>
        </Container>
    )
}

function FeaturedProjects({
    caseStudies,
}: {
    caseStudies: Array<MDXEntry<CaseStudy>>
}) {
    const t = useTranslations('Projects')

    return (
        <ProjectShowcase
            caseStudies={caseStudies}
            title={t('title')}
            description={t('description')}
            projectLabel={t('projectLabel')}
        />
    )
}

function Solutions() {
    const t = useTranslations('Solutions')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow={t('eyebrow')}
                title={t('title')}
            >
                <p>
                    {t('description')}
                </p>
            </SectionIntro>

            <div className="mt-16 grid grid-cols-1 gap-12 border-t border-neutral-200 pt-12 sm:grid-cols-2 lg:gap-16">
                {[
                    {
                        key: 'fitout',
                    },
                    {
                        key: 'sustainable',
                    },
                    {
                        key: 'engineering',
                    },
                    {
                        key: 'management',
                    },
                ].map((item) => (
                    <div key={item.key} className="flex flex-col">
                        <h3 className="font-display text-xl font-medium text-neutral-950">
                            {t(`items.${item.key}.title`)}
                        </h3>
                        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                            {t(`items.${item.key}.description`)}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Metadata' })

    return {
        description: t('description'),
        title: t('title.default'),
    }
}

export default async function Home({ params }: Props) {
    const { locale } = await params
    setRequestLocale(locale)
    let caseStudies = await loadCaseStudies(locale)

    return (
        <RootLayout>
            <Hero />
            <Intro />
            <FeaturedProjects caseStudies={caseStudies} />
            <Solutions />
            <ContactSection />
        </RootLayout>
    )
}
