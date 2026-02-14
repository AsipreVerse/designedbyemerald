'use client'

import clsx from 'clsx'

import { Blockquote as BlockquoteBase } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { StatList as StatListBase, StatListItem as StatListItemBase } from '@/components/StatList'
import { TagList as TagListBase, TagListItem as TagListItemBase } from '@/components/TagList'

export function Blockquote({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof BlockquoteBase>) {
    return <BlockquoteBase className={clsx('my-32', className)} {...props} />
}

export function Img({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
        <div
            className={clsx(
                'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
                className,
            )}
        >
            <GrayscaleTransitionImage
                {...props}
                sizes="(min-width: 768px) 42rem, 100vw"
                className="aspect-16/10 w-full object-cover"
            />
        </div>
    )
}

export function StatList({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof StatListBase>) {
    return (
        <StatListBase className={clsx('my-32 max-w-none!', className)} {...props} />
    )
}

export function Table({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'table'>) {
    return (
        <div
            className={clsx(
                'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
                className,
            )}
        >
            <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
                <table {...props} />
            </div>
        </div>
    )
}

export function TagList({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof TagListBase>) {
    return <TagListBase className={clsx('my-6', className)} {...props} />
}

export function TopTip({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <Border position="left" className={clsx('my-10 pl-8', className)}>
            <p className="font-display text-sm font-bold tracking-widest text-neutral-950 uppercase">
                Top tip
            </p>
            <div className="mt-4">{children}</div>
        </Border>
    )
}

export function Typography({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    return <div className={clsx('typography', className)} {...props} />
}

export function Wrapper({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={clsx(
                '*:mx-auto *:max-w-3xl [&>:first-child]:mt-0! [&>:last-child]:mb-0!',
                className,
            )}
            {...props}
        />
    )
}

export { StatListItemBase as StatListItem, TagListItemBase as TagListItem }
