import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy policy for Designed by Emerald. How we handle your data in compliance with UAE Federal Decree-Law No. 45 of 2021 (PDPL).',
}

export default function PrivacyPage() {
    return (
        <>
            <PageIntro eyebrow="Legal" title="Privacy Policy">
                <p>
                    At Designed by Emerald, we respect your privacy and are committed to
                    protecting your personal data in accordance with the UAE Personal Data
                    Protection Law (Federal Decree-Law No. 45 of 2021).
                </p>
            </PageIntro>

            <Container className="mt-16 sm:mt-20">
                <FadeIn>
                    <div className="prose prose-neutral mx-auto max-w-3xl prose-headings:font-heading prose-headings:tracking-wide prose-h2:text-lg prose-h2:uppercase prose-h2:tracking-[0.15em]">
                        <p className="text-sm text-warm-grey">
                            Last updated: 14 February 2026
                        </p>

                        <h2>Who We Are</h2>
                        <p>
                            Designed by Emerald is an interior design studio based in Dubai,
                            United Arab Emirates. Our registered office is at The Meydan
                            Hotel, Dubai.
                        </p>

                        <h2>Data We Collect</h2>
                        <p>
                            We collect minimal data to improve your experience on our website:
                        </p>
                        <ul>
                            <li>
                                <strong>Analytics data (with consent):</strong> We use Vercel
                                Web Analytics, which collects anonymous, aggregated page-view
                                data. This includes page URLs, referrer URLs, browser type, and
                                country-level geolocation. No personally identifiable
                                information (PII) is collected, and no cookies are used for
                                tracking.
                            </li>
                            <li>
                                <strong>Communication data:</strong> When you contact us via
                                WhatsApp or email, we receive the information you choose to
                                share. This is processed solely for responding to your enquiry.
                            </li>
                        </ul>

                        <h2>Legal Basis for Processing</h2>
                        <p>
                            We process your data based on the following lawful grounds under
                            the UAE PDPL:
                        </p>
                        <ul>
                            <li>
                                <strong>Consent:</strong> Analytics data is only collected after
                                you explicitly consent via our cookie banner.
                            </li>
                            <li>
                                <strong>Legitimate interest:</strong> Responding to enquiries
                                you initiate via WhatsApp or email.
                            </li>
                        </ul>

                        <h2>How We Use Your Data</h2>
                        <ul>
                            <li>To understand how visitors use our website and improve its performance</li>
                            <li>To respond to your enquiries about our interior design services</li>
                        </ul>
                        <p>
                            We do not sell, share, or transfer your personal data to any third
                            parties for marketing purposes.
                        </p>

                        <h2>Data Retention</h2>
                        <p>
                            Analytics data is retained by Vercel for a maximum of 30 days.
                            Communication records (WhatsApp and email) are retained only for
                            as long as necessary to fulfil the purpose of your enquiry.
                        </p>

                        <h2>Your Rights</h2>
                        <p>
                            Under the UAE PDPL, you have the right to:
                        </p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Request rectification of inaccurate data</li>
                            <li>Request erasure of your data</li>
                            <li>Restrict or object to processing</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p>
                            To withdraw analytics consent, clear your browser&apos;s local
                            storage for this website, or contact us directly.
                        </p>

                        <h2>Third-Party Services</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Purpose</th>
                                    <th>Data Collected</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vercel Analytics</td>
                                    <td>Website performance</td>
                                    <td>Anonymous page views (no PII)</td>
                                </tr>
                                <tr>
                                    <td>WhatsApp (Meta)</td>
                                    <td>Client communication</td>
                                    <td>Messages you send to us</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>International Data Transfers</h2>
                        <p>
                            Vercel Analytics data may be processed outside the UAE. Vercel
                            maintains appropriate data protection standards in accordance with
                            their privacy policy and applicable regulations.
                        </p>

                        <h2>Contact Us</h2>
                        <p>
                            For any privacy-related enquiries or to exercise your rights,
                            please contact us:
                        </p>
                        <ul>
                            <li>
                                Email:{' '}
                                <a href="mailto:info@designedbyemerald.com">
                                    info@designedbyemerald.com
                                </a>
                            </li>
                            <li>
                                WhatsApp:{' '}
                                <a
                                    href="https://wa.me/971582495005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +971 58 249 5005
                                </a>
                            </li>
                            <li>Address: The Meydan Hotel, Dubai, UAE</li>
                        </ul>

                        <h2>Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. Any changes
                            will be posted on this page with an updated revision date.
                        </p>
                    </div>
                </FadeIn>
            </Container>
        </>
    )
}
