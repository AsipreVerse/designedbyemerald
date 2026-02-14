import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

export function GrayscaleTransitionImage(
  props: Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority'
  > & { alt?: string },
) {
  return (
    <div className="group relative">
      <Image
        alt=""
        {...props}
        className={clsx(props.className)}
      />
    </div>
  )
}
