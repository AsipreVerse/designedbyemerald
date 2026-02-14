'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
    const [direction, setDirection] = useState(0)

    const goTo = useCallback(
        (newIndex: number) => {
            setDirection(newIndex > currentIndex ? 1 : -1)
            setCurrentIndex(newIndex)
        },
        [currentIndex]
    )

    const goNext = useCallback(() => {
        if (currentIndex < images.length - 1) {
            setDirection(1)
            setCurrentIndex((i) => i + 1)
        }
    }, [currentIndex, images.length])

    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            setDirection(-1)
            setCurrentIndex((i) => i - 1)
        }
    }, [currentIndex])

    // Swipe handling
    const swipeThreshold = 50
    const handleDragEnd = useCallback(
        (_: any, info: { offset: { x: number } }) => {
            if (info.offset.x < -swipeThreshold && currentIndex < images.length - 1) {
                goNext()
            } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
                goPrev()
            }
        },
        [currentIndex, images.length, goNext, goPrev]
    )

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

    // Slide animation variants
    const variants = {
        enter: (d: number) => ({
            x: d > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (d: number) => ({
            x: d > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    }

    return (
        <div className="group/carousel relative">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={handleDragEnd}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                        <Image
                            {...images[currentIndex]}
                            alt={images[currentIndex].alt || `${title} — ${currentIndex + 1}`}
                            fill
                            className="pointer-events-none object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </motion.div>
                </AnimatePresence>

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
}: {
    caseStudy: MDXEntry<CaseStudy>
    projectLabel: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10"
        >
            {/* Full-Width Image — natural aspect, not cropped */}
            <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
                <Image
                    {...caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="100vw"
                />
                {/* Bottom gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
            </div>

            {/* Text Overlay at Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
                <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" />
                        <p className="font-heading text-xs font-normal uppercase tracking-[0.3em] text-gold">
                            {caseStudy.service}
                        </p>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {caseStudy.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream-50/70 sm:text-base lg:max-w-md">
                        {caseStudy.description}
                    </p>
                    <div className="mt-6">
                        <Link
                            href={caseStudy.href}
                            className="group/cta inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-gold"
                            aria-label={`View project: ${caseStudy.title}`}
                        >
                            {projectLabel}
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover/cta:bg-gold/20">
                                <svg className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
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

    // Combine hero + gallery into single image array
    const allImages = [caseStudy.image, ...(caseStudy.gallery || [])]

    return (
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            {/* Text Column */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={clsx(
                    'flex flex-col justify-center',
                    isEven ? 'lg:order-first' : 'lg:order-last'
                )}
            >
                <div className="max-w-lg">
                    {/* Service Tag */}
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-gold" />
                        <p className="font-heading text-xs font-normal uppercase tracking-[0.3em] text-gold">
                            {caseStudy.service}
                        </p>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                        {caseStudy.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-base leading-relaxed text-cream-50/70 sm:text-lg">
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
            </motion.div>

            {/* Image Column — Inline Carousel */}
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={clsx(
                    isEven ? 'lg:order-last' : 'lg:order-first'
                )}
            >
                <ImageCarousel images={allImages} title={caseStudy.title} />
            </motion.div>
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
