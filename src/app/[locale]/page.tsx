import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import imageHeroCover from '@/images/hero-cover.jpg'
import imageIntro from '@/images/living-dining.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Types for params
type Props = {
    params: Promise<{ locale: string }>
}

function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-neutral-950">
            <Image
                src={imageHeroCover}
                alt="Designed by Emerald Interior"
                fill
                className="object-cover opacity-80"
                priority
                quality={90}
                placeholder="blur"
            />

            {/* Refined gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-transparent to-neutral-950/60" />

            <Container className="relative flex h-full items-center justify-center pb-0">
                <div className="max-w-4xl text-center">
                    {/* World-class centered typography */}
                    <h1 className="font-bodoni text-5xl font-light tracking-wide text-white drop-shadow-md sm:text-7xl md:text-8xl md:leading-tight">
                        Refined Interiors for <br className="hidden sm:block" />
                        <span className="italic text-cream-50/90">Modern Living.</span>
                    </h1>
                </div>
            </Container>
        </div>
    )
}

function Intro() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-32 lg:items-center">
                <div className="max-w-lg">
                    <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                        Elegant, functional and timeless spaces.
                    </h2>
                    <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
                        Designed by Emerald is an interior design studio focused on creating
                        refined, functional and timeless spaces. We specialise in high-end
                        residential interiors, villas and private homes, corporate and
                        office environments, clinics and healthcare spaces, and retail and
                        commercial projects.
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
    return (
        <>
            <SectionIntro
                title="Our projects"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    From concept through to completion, we create bespoke interiors that
                    reflect the character of every client and the culture of the UAE.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="flex flex-col gap-y-24">
                    {caseStudies.map((caseStudy) => (
                        <article key={caseStudy.href} className="relative flex flex-col group">
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 sm:aspect-[2/1]">
                                <Image
                                    {...caseStudy.image}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                    quality={85}
                                    sizes="100vw"
                                />
                                <Link href={caseStudy.href}>
                                    <span className="absolute inset-0" />
                                </Link>
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-8">
                                <div>
                                    <h3 className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-neutral-950">
                                        <time dateTime={caseStudy.date.split('-')[0]}>
                                            {caseStudy.date.split('-')[0]}
                                        </time>
                                        <span className="mx-2 text-neutral-300">/</span>
                                        Project
                                    </p>
                                </div>
                                <p className="mt-4 text-lg text-neutral-600 sm:mt-0 sm:max-w-md">
                                    {caseStudy.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </>
    )
}

function Solutions() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="Solutions"
                title="Tailored, end-to-end solutions for every space."
            >
                <p>
                    At DBE, we provide tailored, end-to-end solutions that address the
                    unique challenges of building management, fit-out work, and
                    electrotechnical services.
                </p>
            </SectionIntro>

            <div className="mt-16 grid grid-cols-1 gap-12 border-t border-neutral-200 pt-12 sm:grid-cols-2 lg:gap-16">
                {[
                    {
                        title: 'Turnkey Fit-Out and Interior Solutions',
                        description:
                            'Customised space planning and interior design. High-quality finishing with attention to detail. Seamless project execution from concept to completion.',
                    },
                    {
                        title: 'Smart and Sustainable Solutions',
                        description:
                            'Energy-efficient systems to reduce costs and environmental impact. Smart automation for optimised building performance.',
                    },
                    {
                        title: 'Advanced Electromechanical and Engineering',
                        description:
                            'Cutting-edge electrical installations and network systems. Reliable power distribution and backup solutions.',
                    },
                    {
                        title: 'Building Management',
                        description:
                            '24/7 facility maintenance and operational support. Safety, security, and compliance management. Lifecycle asset management for long-term value.',
                    },
                ].map((item) => (
                    <div key={item.title} className="flex flex-col">
                        <h3 className="font-display text-xl font-medium text-neutral-950">
                            {item.title}
                        </h3>
                        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export const metadata: Metadata = {
    description:
        'Designed by Emerald is an interior design studio focused on creating elegant, functional and timeless spaces in Dubai.',
}

export default async function Home({ params }: Props) {
    const { locale } = await params
    setRequestLocale(locale)
    let caseStudies = (await loadCaseStudies()).slice(0, 3)

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
