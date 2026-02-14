'use client'

import { Link, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
    const pathname = usePathname()
    const locale = useLocale()

    const targetLocale = locale === 'ar' ? 'en' : 'ar'
    const targetLabel = locale === 'ar' ? 'EN' : 'عربي'

    return (
        <Link
            href={pathname}
            locale={targetLocale}
            className={`
        group relative inline-flex items-center gap-1.5
        rounded-full border px-4 py-2 sm:px-5 sm:py-2.5
        text-sm font-medium tracking-widest uppercase
        transition-all duration-300
        ${invert
                    ? 'border-white/20 text-cream-50/80 hover:border-gold/50 hover:text-gold'
                    : 'border-neutral-300/30 text-cream-50/80 hover:border-gold/50 hover:text-gold'
                }
      `}
            title={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
        >
            <span className="transition-transform duration-300 group-hover:scale-105">
                {targetLabel}
            </span>
        </Link>
    )
}
