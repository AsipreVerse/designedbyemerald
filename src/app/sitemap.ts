import type { MetadataRoute } from 'next'
import { loadCaseStudies } from '@/lib/mdx'

const BASE_URL = 'https://designedbyemerald.com'
const LOCALES = ['en', 'ar'] as const

const STATIC_ROUTES = [
    '',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/privacy',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const entries: MetadataRoute.Sitemap = []

    // Static pages — one entry per locale with alternates
    for (const route of STATIC_ROUTES) {
        entries.push({
            url: `${BASE_URL}/en${route}`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${BASE_URL}/en${route}`,
                    ar: `${BASE_URL}/ar${route}`,
                },
            },
        })
    }

    // Dynamic case study pages
    const caseStudies = await loadCaseStudies('en')
    for (const study of caseStudies) {
        const slug = study.href.replace(/^\/work\//, '')
        entries.push({
            url: `${BASE_URL}/en/work/${slug}`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${BASE_URL}/en/work/${slug}`,
                    ar: `${BASE_URL}/ar/work/${slug}`,
                },
            },
        })
    }

    return entries
}
