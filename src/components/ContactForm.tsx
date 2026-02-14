'use client'

import { useState, type FormEvent } from 'react'
import { Link } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'

export function ContactForm() {
    const locale = useLocale()
    const t = useTranslations('ContactForm')

    // Arabic: uppercase and letter-spacing break ligatures
    const isAr = locale === 'ar'
    const headingClass = isAr
        ? 'font-heading text-sm font-normal text-marble-emerald'
        : 'font-heading text-sm font-normal uppercase tracking-[0.2em] text-marble-emerald'
    const labelClass = isAr
        ? 'block text-xs font-medium text-neutral-500'
        : 'block text-xs font-medium uppercase tracking-wider text-neutral-500'
    const btnPrimaryClass = isAr
        ? 'bg-marble-deep px-6 py-3 text-xs font-medium text-cream-50 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-40'
        : 'bg-marble-deep px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-50 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-40'
    const btnSecondaryClass = isAr
        ? 'border border-marble-deep px-6 py-3 text-xs font-medium text-marble-deep transition hover:bg-marble-deep hover:text-cream-50 disabled:cursor-not-allowed disabled:opacity-40'
        : 'border border-marble-deep px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-marble-deep transition hover:bg-marble-deep hover:text-cream-50 disabled:cursor-not-allowed disabled:opacity-40'
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [consent, setConsent] = useState(false)

    function composeBody() {
        const lines = [
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : '',
            '',
            'Message:',
            message,
        ].filter(Boolean)
        return lines.join('\n')
    }

    function handleEmail(e: FormEvent) {
        e.preventDefault()
        if (!consent) return
        const subject = encodeURIComponent(`New Enquiry — ${name}`)
        const body = encodeURIComponent(composeBody())
        window.open(`mailto:info@designedbyemerald.com?subject=${subject}&body=${body}`, '_self')
    }

    function handleWhatsApp(e: FormEvent) {
        e.preventDefault()
        if (!consent) return
        const text = encodeURIComponent(
            `*New Enquiry*\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`
        )
        window.open(`https://wa.me/971582495005?text=${text}`, '_blank', 'noopener,noreferrer')
    }

    const isValid = name.trim() && email.trim() && message.trim() && consent

    return (
        <form className="mt-8" onSubmit={handleEmail}>
            <h3 className={headingClass}>
                {t('heading')}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
                {t('description')}
            </p>

            <div className="mt-8 space-y-5">
                <div>
                    <label htmlFor="contact-name" className={labelClass}>
                        {t('nameLabel')} *
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1.5 w-full border-b border-neutral-300 bg-transparent py-2.5 text-sm text-neutral-950 outline-none transition focus:border-marble-emerald"
                        placeholder={t('namePlaceholder')}
                    />
                </div>

                <div>
                    <label htmlFor="contact-email" className={labelClass}>
                        {t('emailLabel')} *
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1.5 w-full border-b border-neutral-300 bg-transparent py-2.5 text-sm text-neutral-950 outline-none transition focus:border-marble-emerald"
                        placeholder={t('emailPlaceholder')}
                    />
                </div>

                <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                        {t('phoneLabel')}
                    </label>
                    <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1.5 w-full border-b border-neutral-300 bg-transparent py-2.5 text-sm text-neutral-950 outline-none transition focus:border-marble-emerald"
                        placeholder={t('phonePlaceholder')}
                    />
                </div>

                <div>
                    <label htmlFor="contact-message" className={labelClass}>
                        {t('messageLabel')} *
                    </label>
                    <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1.5 w-full resize-none border-b border-neutral-300 bg-transparent py-2.5 text-sm text-neutral-950 outline-none transition focus:border-marble-emerald"
                        placeholder={t('messagePlaceholder')}
                    />
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-marble-emerald"
                    />
                    <span className="text-xs leading-relaxed text-neutral-500">
                        {t('consent')}{' '}
                        <Link href="/privacy" className="underline underline-offset-2 text-marble-emerald hover:text-neutral-950 transition">
                            {t('privacy')}
                        </Link>
                    </span>
                </label>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                    type="submit"
                    disabled={!isValid}
                    className={btnPrimaryClass}
                >
                    {t('sendEmail')}
                </button>
                <button
                    type="button"
                    disabled={!isValid}
                    onClick={handleWhatsApp}
                    className={btnSecondaryClass}
                >
                    {t('sendWhatsApp')}
                </button>
            </div>
        </form>
    )
}
