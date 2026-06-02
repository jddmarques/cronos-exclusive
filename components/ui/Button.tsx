import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md'
}

export default function Button({
  variant = 'outline',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-inter tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961]',
        size === 'sm' && 'text-[10px] px-5 py-2',
        size === 'md' && 'text-xs px-8 py-4',
        variant === 'primary' && 'bg-[#C9A961] text-black hover:opacity-90',
        variant === 'ghost' && 'text-gray-mid hover:text-off-white',
        variant === 'outline' &&
          'text-off-white border border-[rgba(245,242,236,0.2)] hover:border-[#C9A961] hover:text-[#C9A961]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
