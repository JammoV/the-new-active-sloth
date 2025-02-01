import { cva } from 'class-variance-authority'
import type { FC, ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const variantStyles = cva(
    cn(
        'font-bold',
        'rounded-md',
        'bg-secondary/80 hover:bg-secondary mx-auto md:mx-0 text-white cursor-pointer',
        'transition-colors',
        'focus:outline-none'
    ),
    {
        variants: {
            intent: {
                primary: cn(
                    'text-white font-bold',
                    'bg-primary',
                    'hover:enabled:bg-primary',
                    'active:bg-primary',
                    'focus:bg-primary',
                    'disabled:bg-primary-lighter'
                ),
                secondary: cn(
                    'text-white font-bold',
                    'bg-secondary',
                    'hover:enabled:bg-secondary',
                    'active:bg-secondary',
                    'focus:bg-secondary',
                    'disabled:bg-secondary-lighter'
                ),
                tertiary: cn(
                    'text-white font-bold',
                    'bg-cta',
                    'hover:enabled:bg-cta',
                    'active:bg-cta',
                    'focus:bg-cta',
                    'disabled:bg-cta-lighter'
                ),
                transparent: cn(
                    'text-white font-bold',
                    'bg-primary',
                    'hover:enabled:bg-primary',
                    'active:bg-primary',
                    'focus:bg-primary',
                    'disabled:bg-primary-lighter'
                ),
            },
            size: {
                sm: cn('font-bold text-sm py-1 px-4'),
                md: cn('font-bold text-md py-xs px-md'),
                lg: cn('font-bold text-lg py-3 px-10'),
                iconOnly: cn('p-xs'),
            },
        },
    }
)

const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    return (
        <button
            type={props.type || 'button'}
            className={cn(
                variantStyles({ intent: variant, size: size }),
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
