'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { Link, usePathname } from '@/i18n/routing'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Logo, Logomark } from '@/components/Logo'
import { CookieConsent } from '@/components/CookieConsent'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement | null>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-14 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-32 -my-6 -translate-y-4 sm:flex"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-4 sm:gap-x-6">
          <LanguageSwitcher invert={invert} />
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-white/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6 sm:h-7 sm:w-7',
                invert
                  ? 'fill-cream-50 group-hover:fill-gold'
                  : 'fill-cream-50 group-hover:fill-gold',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-marble-deep">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-marble-deep px-6 py-4 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pe-16 sm:even:mt-0 sm:even:border-s sm:even:border-cream-50/10 sm:even:ps-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-marble-forest opacity-0 transition group-odd:end-0 group-even:start-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <nav className="mt-px font-display text-3xl sm:text-5xl font-medium tracking-tight text-cream-50">
      <NavigationRow>
        <NavigationItem href="/services">{t('services')}</NavigationItem>
        <NavigationItem href="/about">{t('about')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/contact">{t('contact')}</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function NavOverlayContact() {
  const t = useTranslations('Footer')

  return (
    <div className="relative bg-marble-deep before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-cream-50/10">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 pt-6 pb-12 sm:grid-cols-2 sm:pt-16">
          <div>
            <address className="text-sm not-italic text-cream-50/70">
              <strong className="text-cream-50">Dubai</strong>
              <br />
              {t('location')}
            </address>
          </div>
          <div className="sm:border-s sm:border-cream-50/10 sm:ps-16">
            <ul className="space-y-2 text-sm text-cream-50/70">
              <li>
                <a
                  href="https://wa.me/971582495005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream-50"
                >
                  <span className="force-ltr">+971 58 249 5005</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@designedbyemerald.com"
                  className="transition hover:text-cream-50 force-ltr inline-block"
                >
                  info@designedbyemerald.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/designedbyemerald.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream-50"
                >
                  <span className="force-ltr">@designedbyemerald.studio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)


  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <header>
        {/* Main navbar — marble texture background */}
        <div
          className="absolute top-0 right-0 left-0 z-40 pt-12 sm:pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? true : undefined}
          style={{
            backgroundImage: 'url(/images/marble-texture.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <div className="relative bg-marble-deep/60 pb-3 sm:pb-4 backdrop-blur-sm">
            <Header
              panelId={panelId}
              icon={MenuIcon}
              toggleRef={openRef}
              expanded={expanded}
              invert
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                )
              }}
            />
          </div>
        </div>

        {/* Expanded navigation panel - No animation, full screen overlay */}
        {expanded && (
          <div
            id={panelId}
            className="fixed inset-0 z-50 overflow-y-auto bg-marble-deep"
            aria-hidden={expanded ? undefined : 'true'}
            inert={expanded ? undefined : true}
          >
            <div className="min-h-screen bg-marble-forest/30">
              <div ref={navRef} className="bg-marble-deep pt-14 pb-16">
                <Header
                  invert
                  panelId={panelId}
                  icon={XIcon}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded)
                    window.setTimeout(() =>
                      openRef.current?.focus({ preventScroll: true }),
                    )
                  }}
                />
              </div>
              <Navigation />
              <NavOverlayContact />
            </div>
          </div>
        )}
      </header>

      <div className="relative flex flex-auto overflow-hidden bg-cream-50 pt-14">
        <div className="relative isolate flex w-full flex-col pt-9">
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </div>
      </div>

      {/* Global overlay components */}

      <CookieConsent />
    </>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
