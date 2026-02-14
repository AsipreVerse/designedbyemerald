'use client'

import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export function PrivacyContent() {
    const t = useTranslations('Privacy')

    return (
        <>
            <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p>{t('body')}</p>
            </PageIntro>

            <Container className="mt-16 sm:mt-20">
                <FadeIn>
                    <div className="prose mx-auto max-w-3xl prose-headings:font-heading prose-headings:text-marble-deep prose-p:text-neutral-700 prose-li:text-neutral-700 prose-strong:text-marble-deep prose-a:text-emerald-700 prose-a:underline hover:prose-a:text-emerald-900 prose-th:text-marble-deep prose-td:text-neutral-700 prose-h2:text-lg">
                        <p className="text-sm text-warm-grey">
                            {t('lastUpdated')}
                        </p>

                        <h2>{t('whoWeAre')}</h2>
                        <p>{t('whoWeAreBody')}</p>

                        <h2>{t('dataCollect')}</h2>
                        <p>{t('dataCollectBody')}</p>
                        <ul>
                            <li>
                                <strong>{t('analyticsTitle')}</strong>{' '}
                                {t('analyticsBody')}
                            </li>
                            <li>
                                <strong>{t('commTitle')}</strong>{' '}
                                {t('commBody')}
                            </li>
                        </ul>

                        <h2>{t('legalBasis')}</h2>
                        <p>{t('legalBasisBody')}</p>
                        <ul>
                            <li>
                                <strong>{t('consentTitle')}</strong>{' '}
                                {t('consentBody')}
                            </li>
                            <li>
                                <strong>{t('legitimateTitle')}</strong>{' '}
                                {t('legitimateBody')}
                            </li>
                        </ul>

                        <h2>{t('howWeUse')}</h2>
                        <ul>
                            <li>{t('howWeUseItem1')}</li>
                            <li>{t('howWeUseItem2')}</li>
                        </ul>
                        <p>{t('howWeUseBody')}</p>

                        <h2>{t('retention')}</h2>
                        <p>{t('retentionBody')}</p>

                        <h2>{t('rights')}</h2>
                        <p>{t('rightsBody')}</p>
                        <ul>
                            <li>{t('rightsItems.access')}</li>
                            <li>{t('rightsItems.rectify')}</li>
                            <li>{t('rightsItems.erase')}</li>
                            <li>{t('rightsItems.restrict')}</li>
                            <li>{t('rightsItems.withdraw')}</li>
                        </ul>
                        <p>{t('rightsWithdraw')}</p>

                        <h2>{t('thirdParty')}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('thirdPartyService')}</th>
                                    <th>{t('thirdPartyPurpose')}</th>
                                    <th>{t('thirdPartyData')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('vercelService')}</td>
                                    <td>{t('vercelPurpose')}</td>
                                    <td>{t('vercelData')}</td>
                                </tr>
                                <tr>
                                    <td>{t('whatsappService')}</td>
                                    <td>{t('whatsappPurpose')}</td>
                                    <td>{t('whatsappData')}</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2>{t('transfers')}</h2>
                        <p>{t('transfersBody')}</p>

                        <h2>{t('contactUs')}</h2>
                        <p>{t('contactUsBody')}</p>
                        <ul>
                            <li>
                                {t('contactEmail')}:{' '}
                                <a href="mailto:info@designedbyemerald.com">
                                    info@designedbyemerald.com
                                </a>
                            </li>
                            <li>
                                {t('contactWhatsApp')}:{' '}
                                <a
                                    href="https://wa.me/971582495005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +971 58 249 5005
                                </a>
                            </li>
                            <li>
                                {t('contactAddress')}:{' '}
                                {t('contactAddressValue')}
                            </li>
                        </ul>

                        <h2>{t('changes')}</h2>
                        <p>{t('changesBody')}</p>
                    </div>
                </FadeIn>
            </Container>
        </>
    )
}
