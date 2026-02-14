import clsx from 'clsx'
import { useLocale } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  const locale = useLocale()
  const isAr = locale === 'ar'

  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className={clsx(
            'block font-heading text-sm font-normal text-neutral-950',
            !isAr && 'uppercase tracking-[0.2em]',
          )}>
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-5xl lg:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-lg text-neutral-600 sm:text-xl',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
