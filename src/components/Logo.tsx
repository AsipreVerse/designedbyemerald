import clsx from 'clsx'
import Image from 'next/image'

import logoDark from '@/images/logo-dark.svg'
import logoLight from '@/images/logo-light.svg'

export function Logomark({
  invert = false,
  filled = false,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      className={clsx('relative flex items-center justify-center', className)}
      aria-hidden="true"
      {...props}
    >
      <Image
        src={invert ? logoLight : logoDark}
        alt="Designed by Emerald"
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  fillOnHover = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'relative flex items-center justify-center',
        fillOnHover && 'group/logo',
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      <Image
        src={invert ? logoLight : logoDark}
        alt="Designed by Emerald"
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  )
}
