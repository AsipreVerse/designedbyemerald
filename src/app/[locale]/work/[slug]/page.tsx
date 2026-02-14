import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { PageIntro } from '@/components/PageIntro'
import { MDXComponents } from '@/components/MDXComponents'
import { loadCaseStudies, type CaseStudy, type MDXEntry } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

type Props = {
    params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
    const locales = ['en', 'ar']
    let params: Array<{ locale: string; slug: string }> = []

    for (const locale of locales) {
        const caseStudies = await loadCaseStudies(locale)
        params = params.concat(
            caseStudies.map((caseStudy) => ({
                locale,
                slug: caseStudy.href.split('/').pop()!,
            }))
        )
    }

    return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params
    const caseStudies = await loadCaseStudies(locale)
    const caseStudy = caseStudies.find((caseStudy) => caseStudy.href.endsWith(`/${slug}`))

    if (!caseStudy) {
        return {}
    }

    return {
        title: `${caseStudy.title} - Designed by Emerald`,
        description: caseStudy.description,
    }
}

export default async function CaseStudyPage({ params }: Props) {
    const { locale, slug } = await params
    setRequestLocale(locale)

    const caseStudies = await loadCaseStudies(locale)
    const caseStudy = caseStudies.find((caseStudy) => caseStudy.href.endsWith(`/${slug}`))

    if (!caseStudy) {
        notFound()
    }

    return (
        <RootLayout>
            <article className="mt-24 sm:mt-32 lg:mt-40">
                <header>
                    <PageIntro eyebrow={locale === 'ar' ? 'دراسة حالة' : 'Case Study'} title={caseStudy.title} centered>
                        <p>{caseStudy.description}</p>
                    </PageIntro>

                    <FadeIn>
                        <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                            <Container>
                                <div className="mx-auto max-w-5xl">
                                    <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0">
                                            <dt className="font-semibold">{locale === 'ar' ? 'العميل' : 'Client'}</dt>
                                            <dd>{caseStudy.client}</dd>
                                        </div>
                                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0">
                                            <dt className="font-semibold">{locale === 'ar' ? 'السنة' : 'Year'}</dt>
                                            <dd>
                                                <time dateTime={caseStudy.date.split('-')[0]}>
                                                    {caseStudy.date.split('-')[0]}
                                                </time>
                                            </dd>
                                        </div>
                                        <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0">
                                            <dt className="font-semibold">{locale === 'ar' ? 'الخدمة' : 'Service'}</dt>
                                            <dd>{caseStudy.service}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </Container>
                        </div>
                        <div className="border-y border-neutral-200 bg-neutral-100">
                            <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                                <GrayscaleTransitionImage
                                    {...caseStudy.image}
                                    quality={90}
                                    className="w-full"
                                    sizes="(min-width: 1216px) 76rem, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </FadeIn>
                </header>

                <Container className="mt-24 sm:mt-32 lg:mt-40">
                    <FadeIn>
                        <MDXContent slug={slug} locale={locale} />
                    </FadeIn>
                </Container>
            </article>

            <ContactSection />
        </RootLayout>
    )
}

async function MDXContent({ slug, locale }: { slug: string, locale: string }) {
    const contentDir = path.join(process.cwd(), 'src/content/work')
    // Try localized file first, then fallback
    let filename = locale === 'ar' ? `${slug}.ar.mdx` : `${slug}.mdx`

    let filePath = path.join(contentDir, filename)

    if (!fs.existsSync(filePath) && locale === 'ar') {
        filePath = path.join(contentDir, `${slug}.mdx`)
    }

    if (!fs.existsSync(filePath)) {
        return null
    }

    const source = fs.readFileSync(filePath, 'utf8')

    return (
        <MDXComponents.wrapper className="typography-prose">
            <MDXRemote source={source} components={MDXComponents} />
        </MDXComponents.wrapper>
    )
}
