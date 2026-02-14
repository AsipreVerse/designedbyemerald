'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useEffect } from 'react'
import { Link } from '@/i18n/routing'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const t = useTranslations('Error')
    const locale = useLocale()

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
            <FadeIn className="flex max-w-xl flex-col items-center text-center">
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    {t('title')}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                    {t('description')}
                </p>
                <div className="mt-8 flex gap-4">
                    <Button onClick={() => reset()}>{t('retry')}</Button>
                    <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-marble-deep px-6 py-3 text-xs font-medium text-cream-50 transition hover:bg-emerald-800">
                        {t('backHome')}
                    </Link>
                </div>
            </FadeIn>
        </Container>
    )
}
