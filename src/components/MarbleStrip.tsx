export function MarbleStrip({
    height = 'h-28',
    className = '',
}: {
    height?: string
    className?: string
}) {
    return (
        <div
            className={`relative w-full overflow-hidden ${height} ${className}`}
            style={{
                backgroundImage: 'url(/images/marble-texture.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            role="presentation"
            aria-hidden="true"
        />
    )
}
