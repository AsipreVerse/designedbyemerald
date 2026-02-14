import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  className,
  shape, // keeping prop for interface compatibility but ignoring it
  ...props
}: ImagePropsWithOptionalAlt & { shape?: 0 | 1 | 2 }) {
  return (
    <div
      className={clsx(
        className,
        'relative w-full overflow-hidden bg-neutral-100 aspect-[4/3]',
      )}
    >
      <Image
        {...props}
        alt=""
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  )
}
