import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'
import imageVision from '@/images/vision.jpg'
import imageMission from '@/images/mission.jpg'

function Vision() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={imageVision}
              alt="Designed by Emerald — Vision"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square object-cover bg-neutral-100"
              quality={85}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <FadeIn>
            <h2 className="font-display text-4xl font-semibold text-neutral-950">
              Vision
            </h2>
            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
              To create thoughtfully designed interiors that are <strong className="font-semibold text-neutral-950">timeless, functional, and emotionally engaging spaces</strong> that elevate everyday living and reflect the unique identity of each client.
            </p>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Mission() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={imageMission}
              alt="Designed by Emerald — Mission"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square object-cover bg-neutral-100"
              quality={85}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="lg:row-span-2">
          <FadeIn>
            <h2 className="font-display text-4xl font-semibold text-neutral-950">
              Mission
            </h2>
            <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
              Our mission is to deliver refined interior design solutions through a <strong className="font-semibold text-neutral-950">clear and collaborative process</strong>. We aim to balance aesthetics and functionality by carefully considering space planning, materials, lighting, and detail — ensuring each project is tailored, practical, and enduring.
            </p>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Innovation() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-neutral-950">
          Innovation
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          Innovation is at the heart of everything we do. We embrace
          cutting-edge technology, smart design, and forward-thinking solutions
          to enhance comfort, sustainability, and performance.
        </p>
      </FadeIn>
      <div className="mt-16">
        <GridList>
          <GridListItem title="Smart Building Solutions">
            Integrating automation, IoT and AI for seamless operation and energy
            efficiency.
          </GridListItem>
          <GridListItem title="Sustainable Practices">
            We are at the forefront of implementing eco-friendly materials,
            energy-saving systems and green technologies.
          </GridListItem>
          <GridListItem title="Advanced Construction Methods">
            Utilising modular designs, prefabrication, and digital modelling for
            precision and speed.
          </GridListItem>
          <GridListItem title="Customised Solutions">
            Tailoring every project to meet the unique needs of our clients with
            innovative problem-solving.
          </GridListItem>
        </GridList>
      </div>
    </Container>
  )
}

function Values() {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32"> {/* Removed rounded-4xl */}
      <SectionIntro
        eyebrow="Our commitment"
        title="Health, Safety, and Environmental Responsibility"
        invert
      >
        <p className="text-lg text-neutral-300">
          At DBE, we prioritise health, safety, and environmental
          responsibility in every project. Our strict safety protocols, regular
          risk assessments, and employee training ensure a secure working
          environment for all.
        </p>
      </SectionIntro>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Designed by Emerald is an interior design studio focused on creating elegant, functional and timeless spaces.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Elegant, functional and timeless">
        <p>
          Designed by Emerald is an interior design studio focused on creating
          elegant, functional and timeless spaces. We specialise in the
          following project types:
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <ul className="list-disc space-y-2 pl-6 text-neutral-600">
            <li>High-end residential interiors</li>
            <li>Villas and private homes</li>
            <li>Corporate and office environments</li>
            <li>Clinics and healthcare spaces</li>
            <li>Retail and commercial projects</li>
          </ul>
        </div>
      </PageIntro>

      <Vision />
      <Mission />
      <Innovation />
      <Values />

      <ContactSection />
    </RootLayout>
  )
}
