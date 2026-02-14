'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
    const pathname = usePathname()

    // Extract current locale and path
    const segments = pathname.split('/')
    const currentLocale = segments[1] // 'en' or 'ar'
    const restOfPath = segments.slice(2).join('/')
    const targetLocale = currentLocale === 'ar' ? 'en' : 'ar'
    const targetPath = `/${targetLocale}${restOfPath ? `/${restOfPath}` : ''}`
    const targetLabel = currentLocale === 'ar' ? 'EN' : 'عربي'

    return (
        <Link
            href={targetPath}
            className={`
        group relative inline-flex items-center gap-1.5
        rounded-full border px-3 py-1.5
        text-xs font-medium tracking-widest uppercase
        transition-all duration-300
        ${invert
                    ? 'border-white/20 text-cream-50/80 hover:border-gold/50 hover:text-gold'
                    : 'border-neutral-300/30 text-cream-50/80 hover:border-gold/50 hover:text-gold'
                }
      `}
            title={currentLocale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
        >
            <span className="transition-transform duration-300 group-hover:scale-105">
                {targetLabel}
            </span>
        </Link>
    )
}
