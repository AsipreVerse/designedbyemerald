'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function CookieConsent() {
    const t = useTranslations('CookieConsent')
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('dbe-analytics-consent')
        if (!consent) {
            // Small delay for a less jarring appearance
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    function handleAccept() {
        localStorage.setItem('dbe-analytics-consent', 'granted')
        setVisible(false)
        // Vercel Analytics will check for this on next page load
        window.location.reload()
    }

    function handleDecline() {
        localStorage.setItem('dbe-analytics-consent', 'denied')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
            role="dialog"
            aria-label="Cookie consent"
        >
            <div
                className="relative mx-auto max-w-xl overflow-hidden"
                style={{
                    backgroundImage: 'url(/images/marble-texture.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative z-10 bg-marble-deep/90 px-6 py-5">
                    <p className="text-sm leading-relaxed text-cream-50/90">
                        {t('content')}{' '}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-2 transition hover:text-gold"
                        >
                            {t('privacy')}
                        </Link>
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <button
                            onClick={handleAccept}
                            className="bg-gold px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-marble-deep transition hover:bg-gold-light"
                        >
                            {t('accept')}
                        </button>
                        <button
                            onClick={handleDecline}
                            className="px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-cream-50/60 transition hover:text-cream-50"
                        >
                            {t('decline')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
