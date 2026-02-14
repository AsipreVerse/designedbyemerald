'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

/**
 * Consent-aware wrapper for Vercel Analytics.
 * Only renders <Analytics /> if the user has explicitly accepted
 * via the CookieConsent banner (PDPL compliance).
 */
export function ConsentAnalytics() {
    const [hasConsent, setHasConsent] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('dbe-analytics-consent')
        setHasConsent(consent === 'granted')

        // Listen for consent changes (e.g. after banner interaction + reload)
        function handleStorage(e: StorageEvent) {
            if (e.key === 'dbe-analytics-consent') {
                setHasConsent(e.newValue === 'granted')
            }
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    if (!hasConsent) return null

    return <Analytics />
}
