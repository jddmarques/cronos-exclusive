import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'champagne' | 'dark'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'font-inter text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 inline-block',
        variant === 'default' && 'text-gray-mid border border-[rgba(138,138,138,0.3)]',
        variant === 'champagne' &&
          'text-[#C9A961] border border-[rgba(201,169,97,0.4)]',
        variant === 'dark' && 'text-gray-mid bg-black/70',
        className
      )}
    >
      {children}
    </span>
  )
}
