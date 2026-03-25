import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'red' | 'green' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  red: 'bg-brand-red hover:bg-brand-red-dark text-white shadow-sm hover:shadow-lg hover:shadow-brand-red/20',
  green: 'bg-brand-green hover:bg-brand-green-light text-white shadow-sm',
  outline: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white',
  ghost: 'text-gray-600 hover:text-brand-black hover:bg-gray-100',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-8 text-base',
  lg: 'py-4 px-10 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'red', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
