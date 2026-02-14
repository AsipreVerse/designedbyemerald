import { type Metadata } from 'next'
import Link from 'next/link'
import { Prata, Cinzel, Josefin_Sans } from 'next/font/google'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import '@/styles/tailwind.css'

const prata = Prata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const cinzel = Cinzel({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <html
      lang="en"
      className={`h-full bg-neutral-950 text-base antialiased ${prata.variable} ${cinzel.variable} ${josefinSans.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
          <FadeIn className="flex flex-col items-center text-center">
            <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
              404
            </p>
            <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
              Page not found
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <Link
              href="/"
              className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
            >
              Go back home
            </Link>
          </FadeIn>
        </Container>
      </body>
    </html>
  )
}
