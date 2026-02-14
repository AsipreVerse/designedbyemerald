'use client'

import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

function ServiceBlock({
    sectionKey,
}: {
    sectionKey: 'sustainable' | 'fitout' | 'engineering' | 'management'
}) {
    const t = useTranslations(`Services.${sectionKey}`)

    // Get the item keys for this service block
    const itemKeys = {
        sustainable: ['energy', 'automation', 'materials'] as const,
        fitout: ['planning', 'finishing', 'delivery'] as const,
        engineering: ['electrical', 'power', 'controls'] as const,
        management: ['maintenance', 'safety', 'lifecycle'] as const,
    }

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro title={t('title')}>
                <p>{t('subtitle')}</p>
            </SectionIntro>
            <div className="mt-10">
                <GridList>
                    {itemKeys[sectionKey].map((key) => (
                        <GridListItem key={key} title={t(`items.${key}.title`)}>
                            {t(`items.${key}.description`)}
                        </GridListItem>
                    ))}
                </GridList>
            </div>
        </Container>
    )
}

export function ServicesContent() {
    const t = useTranslations('Services')

    return (
        <>
            <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p>{t('body')}</p>
            </PageIntro>

            <ServiceBlock sectionKey="sustainable" />
            <ServiceBlock sectionKey="fitout" />
            <ServiceBlock sectionKey="engineering" />
            <ServiceBlock sectionKey="management" />
        </>
    )
}
