import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
  locale: string,
): Promise<Array<MDXEntry<T>>> {
  // Get all .mdx files in the directory
  const allFiles = await glob('*.mdx', { cwd: `src/content/${directory}` })

  // Filter for the base files (non-localized or default locale) to establish the list of entries
  const baseFiles = allFiles.filter(f => !f.includes('.ar.mdx'))

  return (
    await Promise.all(
      baseFiles.map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '')

        // Determine which file to load based on locale
        let fileToLoad = filename
        if (locale === 'ar') {
          const arFilename = filename.replace(/\.mdx$/, '.ar.mdx')
          if (allFiles.includes(arFilename)) {
            fileToLoad = arFilename
          }
        }

        let metadata = (await import(`../content/${directory}/${fileToLoad}`))[
          metaName
        ] as T

        return {
          ...metadata,
          metadata,
          href: `/${directory}/${slug}`,
        }
      }),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  gallery?: Array<ImagePropsWithOptionalAlt>
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles(locale: string) {
  return loadEntries<Article>('blog', 'article', locale)
}

export function loadCaseStudies(locale: string) {
  return loadEntries<CaseStudy>('work', 'caseStudy', locale)
}

