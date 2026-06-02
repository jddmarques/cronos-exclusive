import { clsx } from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={clsx(
        'mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20',
        className
      )}
    >
      {children}
    </Tag>
  )
}
