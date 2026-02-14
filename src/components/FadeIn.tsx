import clsx from 'clsx'

export function FadeIn(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} />
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { faster?: boolean }) {
  return <div {...props} />
}
