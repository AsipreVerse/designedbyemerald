import clsx from 'clsx'

type BorderProps<T extends React.ElementType> = {
  as?: T
  className?: string
  position?: 'top' | 'start'
  invert?: boolean
}

export function Border<T extends React.ElementType = 'div'>({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-neutral-950 after:bg-neutral-950/10',
        position === 'top' &&
        'before:top-0 before:start-0 before:h-px before:w-6 after:top-0 after:end-0 after:start-8 after:h-px',
        position === 'start' &&
        'before:top-0 before:start-0 before:h-6 before:w-px after:top-8 after:bottom-0 after:start-0 after:w-px',
      )}
      {...props}
    />
  )
}
