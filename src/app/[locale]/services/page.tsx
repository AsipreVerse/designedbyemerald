import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
    title: 'Services',
    description:
        'At DBE, we provide tailored, end-to-end solutions that address the unique challenges of building management, fit-out work, and electrotechnical services.',
}

export default function Services() {
    return (
        <RootLayout>
            <PageIntro
                eyebrow="Solutions"
                title="Tailored, end-to-end solutions"
            >
                <p>
                    At DBE, we provide tailored, end-to-end solutions that address the
                    unique challenges of building management, fit-out work, and
                    electrotechnical services. Our goal is to create efficient,
                    sustainable, and high-performing environments.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro title="Smart and Sustainable Solutions">
                    <p>
                        Creating environments that are efficient, responsible and
                        future-ready.
                    </p>
                </SectionIntro>
                <div className="mt-10">
                    <GridList>
                        <GridListItem title="Energy-Efficient Systems">
                            Energy-efficient systems to reduce costs and environmental impact.
                        </GridListItem>
                        <GridListItem title="Smart Automation">
                            Smart automation for optimised building performance.
                        </GridListItem>
                        <GridListItem title="Sustainable Materials">
                            Sustainable materials and eco-friendly construction practices.
                        </GridListItem>
                    </GridList>
                </div>
            </Container>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro title="Turnkey Fit-Out and Interior Solutions">
                    <p>
                        From concept to completion, delivered to the highest standard.
                    </p>
                </SectionIntro>
                <div className="mt-10">
                    <GridList>
                        <GridListItem title="Space Planning and Interior Design">
                            Customised space planning and interior design.
                        </GridListItem>
                        <GridListItem title="High-Quality Finishing">
                            High-quality finishing with attention to detail.
                        </GridListItem>
                        <GridListItem title="Seamless Execution">
                            Seamless project execution from concept to completion.
                        </GridListItem>
                    </GridList>
                </div>
            </Container>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro title="Advanced Electromechanical and Engineering Solutions">
                    <p>
                        Reliable systems that power and protect your environment.
                    </p>
                </SectionIntro>
                <div className="mt-10">
                    <GridList>
                        <GridListItem title="Electrical Installations">
                            Cutting-edge electrical installations and network systems.
                        </GridListItem>
                        <GridListItem title="Power Distribution">
                            Reliable power distribution and backup solutions.
                        </GridListItem>
                        <GridListItem title="Smart Control Systems">
                            Integration of smart control systems for enhanced efficiency.
                        </GridListItem>
                    </GridList>
                </div>
            </Container>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <SectionIntro title="Comprehensive Building Management Solutions">
                    <p>
                        Ongoing support that protects your investment.
                    </p>
                </SectionIntro>
                <div className="mt-10">
                    <GridList>
                        <GridListItem title="Facility Maintenance">
                            24/7 facility maintenance and operational support.
                        </GridListItem>
                        <GridListItem title="Safety and Compliance">
                            Safety, security, and compliance management.
                        </GridListItem>
                        <GridListItem title="Lifecycle Asset Management">
                            Lifecycle asset management for long-term value.
                        </GridListItem>
                    </GridList>
                </div>
            </Container>

            <ContactSection />
        </RootLayout>
    )
}
