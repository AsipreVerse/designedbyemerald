import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { MarbleStrip } from '@/components/MarbleStrip'
import { ContactForm } from '@/components/ContactForm'

import zenGardenImage from '@/images/pdf_raw/page-002-004.jpg'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Designed by Emerald to discuss your interior design or fit-out project in Dubai.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let us bring your vision to life">
        <p>
          Whether you are planning a new build, renovation or commercial
          fit-out, we would love to hear about your project.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: Contact channels */}
            <div>
              <h2 className="font-heading text-sm font-normal uppercase tracking-[0.2em] text-marble-emerald">
                Reach Us Directly
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                We believe in personal connection. Reach out directly and
                we will respond within 24 hours.
              </p>

              <div className="mt-10 space-y-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/971582495005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 transition"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-marble-deep text-cream-50 transition group-hover:bg-emerald-800">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.377-.227-3.907 1.31 1.31-3.907-.227-.377A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-medium text-neutral-950">
                      WhatsApp
                    </span>
                    <p className="mt-1 text-sm text-neutral-600 group-hover:text-neutral-950">
                      +971 58 249 5005
                    </p>
                    <p className="mt-0.5 text-xs text-warm-grey">
                      Preferred for project enquiries
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@designedbyemerald.com"
                  className="group flex items-start gap-5 transition"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-marble-deep text-cream-50 transition group-hover:bg-emerald-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-medium text-neutral-950">
                      Email
                    </span>
                    <p className="mt-1 text-sm text-neutral-600 group-hover:text-neutral-950">
                      info@designedbyemerald.com
                    </p>
                    <p className="mt-0.5 text-xs text-warm-grey">
                      For detailed briefs and proposals
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/designedbyemerald.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 transition"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-marble-deep text-cream-50 transition group-hover:bg-emerald-800">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-sm font-medium text-neutral-950">
                      Instagram
                    </span>
                    <p className="mt-1 text-sm text-neutral-600 group-hover:text-neutral-950">
                      @designedbyemerald.studio
                    </p>
                    <p className="mt-0.5 text-xs text-warm-grey">
                      Follow our latest projects
                    </p>
                  </div>
                </a>
              </div>

              {/* Office address */}
              <div className="mt-12 border-t border-neutral-200 pt-8">
                <h3 className="font-heading text-xs font-normal uppercase tracking-[0.2em] text-marble-emerald">
                  Studio
                </h3>
                <address className="mt-3 text-sm not-italic leading-relaxed text-neutral-600">
                  The Meydan Hotel
                  <br />
                  Dubai, United Arab Emirates
                </address>
              </div>

              <ContactForm />
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[3/4] overflow-hidden lg:aspect-auto">
              <Image
                src={zenGardenImage}
                alt="Designed by Emerald studio interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                placeholder="blur"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      <MarbleStrip className="mt-24 sm:mt-32" />
    </>
  )
}
