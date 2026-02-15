import { Link } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

export function Footer() {
  const locale = useLocale()
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navigation')
  const tContact = useTranslations('Contact')

  // Arabic: uppercase and wide letter-spacing break ligatures
  const headingClass = locale === 'ar'
    ? 'font-heading text-xs font-normal text-gold'
    : 'font-heading text-xs font-normal uppercase tracking-[0.25em] text-gold'

  return (
    <footer
      className="relative mt-16 w-full overflow-hidden sm:mt-24 lg:mt-32"
      style={{
        backgroundImage: 'url(/images/marble-texture.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-marble-deep/85" />

      <div className="relative z-10">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-20 lg:grid-cols-3 lg:py-24">
              {/* Column 1: Logo & tagline */}
              <div className="flex flex-col">
                <Logo invert className="h-40" />
                <p className="mt-6 text-sm leading-relaxed text-cream-50/70">
                  {t('taglineLine1')}
                  <br />
                  {t('taglineLine2')}
                </p>
              </div>

              {/* Column 2: Navigation */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className={headingClass}>
                    {t('studio')}
                  </h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li>
                      <Link
                        href="/about"
                        className="text-cream-50/70 transition hover:text-cream-50"
                      >
                        {tNav('about')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-cream-50/70 transition hover:text-cream-50"
                      >
                        {tNav('services')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#projects"
                        className="text-cream-50/70 transition hover:text-cream-50"
                      >
                        {t('projects')}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={headingClass}>
                    {t('legal')}
                  </h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-cream-50/70 transition hover:text-cream-50"
                      >
                        {t('privacy')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Contact */}
              <div>
                <h3 className={headingClass}>
                  {tContact('title')}
                </h3>
                <ul role="list" className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href="https://wa.me/971582495005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cream-50/70 transition hover:text-cream-50"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.377-.227-3.907 1.31 1.31-3.907-.227-.377A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      <span className="force-ltr">+971 58 249 5005</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@designedbyemerald.com"
                      className="inline-flex items-center gap-2 text-cream-50/70 transition hover:text-cream-50"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="force-ltr">info@designedbyemerald.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/designedbyemerald.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cream-50/70 transition hover:text-cream-50"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.535c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="force-ltr">@designedbyemerald.studio</span>
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-2 text-cream-50/50">
                    <svg
                      className="h-4 w-4 shrink-0 text-cream-50/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>{t('location')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-cream-50/10 py-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <p className="text-xs text-cream-50/40">
                    &copy; Designed by Emerald {new Date().getFullYear()}. {t('rights')}
                  </p>
                  <p className="text-xs text-cream-50/40">
                    {t('developedBy')} <a href="https://aspireverse.co.uk" target="_blank" rel="noopener noreferrer" className="text-cream-50/60 hover:text-cream-50 force-ltr inline-block">AspireVerse™</a>
                  </p>
                </div>
                <Link
                  href="/privacy"
                  className="text-xs text-cream-50/40 transition hover:text-cream-50/70"
                >
                  {t('privacy')}
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </footer>
  )
}
