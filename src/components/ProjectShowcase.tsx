'use client'

import { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { type CaseStudy, type MDXEntry } from '@/lib/mdx'

/* ─────────────────────────────────────────────
   Inline Image Carousel — Swipeable, No Click
   ───────────────────────────────────────────── */
function ImageCarousel({
    images,
    title,
}: {
    images: Array<{ src: any; alt?: string }>
    title: string
}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef(0)

    const goTo = useCallback(
        (newIndex: number) => {
            setCurrentIndex(newIndex)
        },
        []
    )

    const goNext = useCallback(() => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((i) => i + 1)
        }
    }, [currentIndex, images.length])

    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((i) => i - 1)
        }
    }, [currentIndex])

    // Native touch swipe
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }, [])

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        const delta = touchStartX.current - e.changedTouches[0].clientX
        if (delta > 50) goNext()
        else if (delta < -50) goPrev()
    }, [goNext, goPrev])


    if (images.length === 0) return null

    // Single image — no carousel controls
    if (images.length === 1) {
        return (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                <Image
                    {...images[0]}
                    alt={images[0].alt || title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />
            </div>
        )
    }

    return (
        <div className="group/carousel relative">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 touch-pan-y">
                <div
                    className="absolute inset-0"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <Image
                        {...images[currentIndex]}
                        alt={images[currentIndex].alt || `${title} — ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        quality={90}
                    />
                </div>

                {/* Preload adjacent slides (hidden, fetched in background) */}
                {currentIndex > 0 && (
                    <div className="pointer-events-none absolute inset-0 opacity-0" aria-hidden="true">
                        <Image
                            {...images[currentIndex - 1]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            loading="eager"
                        />
                    </div>
                )}
                {currentIndex < images.length - 1 && (
                    <div className="pointer-events-none absolute inset-0 opacity-0" aria-hidden="true">
                        <Image
                            {...images[currentIndex + 1]}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            loading="eager"
                        />
                    </div>
                )}

                {/* Gradient edges for depth */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-neutral-950/20 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-950/20 to-transparent" />

                {/* Navigation Arrows — hidden on mobile (swipe), visible on hover desktop */}
                {currentIndex > 0 && (
                    <button
                        onClick={goPrev}
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:text-white group-hover/carousel:opacity-100 sm:left-4 sm:h-11 sm:w-11"
                        aria-label="Previous image"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                )}
                {currentIndex < images.length - 1 && (
                    <button
                        onClick={goNext}
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:text-white group-hover/carousel:opacity-100 sm:right-4 sm:h-11 sm:w-11"
                        aria-label="Next image"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                )}

                {/* Counter Badge */}
                <div className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="mt-4 flex justify-center gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={clsx(
                            'h-1.5 rounded-full transition-all duration-300',
                            i === currentIndex
                                ? 'w-6 bg-gold'
                                : 'w-1.5 bg-white/25 hover:bg-white/40'
                        )}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────
   Full-Width Card — Single Image Projects
   ───────────────────────────────────────────── */
function ProjectRowSingle({
    caseStudy,
    projectLabel,
    isFirst = false,
}: {
    caseStudy: MDXEntry<CaseStudy>
    projectLabel: string
    isFirst?: boolean
}) {
    const locale = useLocale()

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 lg:block">
            {/* Full-Card Touch Target (Mobile & Desktop) */}
            <Link
                href={caseStudy.href}
                className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-neutral-950"
                aria-label={`View project: ${caseStudy.title}`}
            />

            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
                <Image
                    {...caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    priority={isFirst}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    quality={90}
                />
                {/* Desktop Gradient Overlay (Hidden on Mobile for clarity) */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-0 transition-opacity duration-500 lg:opacity-100" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col bg-neutral-900 p-6 sm:p-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-transparent lg:p-12">
                <div className="max-w-xl pointer-events-none lg:pointer-events-auto">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" />
                        <p className={clsx(
                            'font-heading text-xs font-normal text-gold',
                            locale !== 'ar' && 'uppercase tracking-[0.3em]',
                        )}>
                            {caseStudy.service}
                        </p>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {caseStudy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream-50/70 sm:text-base lg:max-w-md">
                        {caseStudy.description}
                    </p>

                    {/* Visual Button (Non-clickable, decorative since card is linked) */}
                    <div className="mt-6">
                        <div className="group/cta inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-gold">
                            {projectLabel}
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-gold/20">
                                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────
   Split Row with Carousel — Multi-Image Projects
   ───────────────────────────────────────────── */
function ProjectRowCarousel({
    caseStudy,
    index,
    projectLabel,
}: {
    caseStudy: MDXEntry<CaseStudy>
    index: number
    projectLabel: string
}) {
    const isEven = index % 2 === 0
    const locale = useLocale()

    // Combine hero + gallery into single image array
    const allImages = [caseStudy.image, ...(caseStudy.gallery || [])]

    return (
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            {/* Text Column */}
            <div
                className={clsx(
                    'flex flex-col justify-center order-last',
                    isEven ? 'lg:order-first' : 'lg:order-last'
                )}
            >
                <div className="max-w-lg">
                    {/* Service Tag */}
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" />
                        <p className={clsx(
                            'font-heading text-xs font-normal text-gold',
                            locale !== 'ar' && 'uppercase tracking-[0.3em]',
                        )}>
                            {caseStudy.service}
                        </p>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl text-pretty">
                        {caseStudy.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-base leading-relaxed text-cream-50/70 sm:text-lg text-pretty">
                        {caseStudy.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-8">
                        <Link
                            href={caseStudy.href}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-gold"
                            aria-label={`View project: ${caseStudy.title}`}
                        >
                            {projectLabel}
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-gold/20">
                                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image Column — Inline Carousel */}
            <div
                className={clsx(
                    'order-first',
                    isEven ? 'lg:order-last' : 'lg:order-first'
                )}
            >
                <ImageCarousel images={allImages} title={caseStudy.title} />
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────
   Route to correct layout variant
   ───────────────────────────────────────────── */
function ProjectRow({
    caseStudy,
    index,
    projectLabel,
}: {
    caseStudy: MDXEntry<CaseStudy>
    index: number
    projectLabel: string
}) {
    const hasGallery = caseStudy.gallery && caseStudy.gallery.length > 0

    if (!hasGallery) {
        return (
            <ProjectRowSingle
                caseStudy={caseStudy}
                projectLabel={projectLabel}
                isFirst={index === 0}
            />
        )
    }

    return (
        <ProjectRowCarousel
            caseStudy={caseStudy}
            index={index}
            projectLabel={projectLabel}
        />
    )
}

/* ─────────────────────────────────────────────
   Showcase Orchestrator
   ───────────────────────────────────────────── */
export function ProjectShowcase({
    caseStudies,
    title,
    description,
    projectLabel,
}: {
    caseStudies: Array<MDXEntry<CaseStudy>>
    title: string
    description: string
    projectLabel: string
}) {
    return (
        <div id="projects" className="bg-neutral-950 py-24 sm:py-32">
            {/* Section Header */}
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
                            {title}
                        </h2>
                        <p className="mt-6 text-lg text-cream-50/70">
                            {description}
                        </p>
                    </div>
                </FadeIn>
            </Container>

            {/* Projects Grid */}
            <Container className="mt-16 sm:mt-24">
                <div className="space-y-24 sm:space-y-32 lg:space-y-40">
                    {caseStudies.map((caseStudy, index) => (
                        <ProjectRow
                            key={caseStudy.href}
                            caseStudy={caseStudy}
                            index={index}
                            projectLabel={projectLabel}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}
