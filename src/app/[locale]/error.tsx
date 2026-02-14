'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

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
                    <Button href={`/${typeof window !== 'undefined' && window.location.pathname.startsWith('/ar') ? 'ar' : 'en'}`} invert>
                        {t('backHome')}
                    </Button>
                </div>
            </FadeIn>
        </Container>
    )
}
