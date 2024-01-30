import { ComponentProps, ElementType, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'icon'
  icon?: ElementType
}

const button = tv({
  variants: {
    styles: {
      primary:
        'w-full py-3 px-2 text-white text-sm font-bold bg-yellow rounded-md ',
      secondary:
        'flex items-center justify-center gap-1 p-[6px] px-2 text-xs bg-base-button text-base-text rounded-md',
      icon: 'bg-purple-dark p-2 rounded-md',
    },
    hover: {
      primary: 'hover:bg-yellow-dark transition-colors',
      secondary:
        'group hover:text-base-subtitle hover:bg-base-hover transition-all ease-in',
      icon: 'hover:bg-purple transition-all ease-in',
    },
  },
})

const icon = tv({
  variants: {
    variant: {
      primary: '',
      secondary: 'w-[16px] h-[16px] fill-purple group-hover:fill-purple-dark',
      icon: 'w-[22px] h-[22px] fill-base-card',
    },
  },
})

export function Button({
  variant = 'primary',
  icon: Icon,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button {...props} className={button({ styles: variant, hover: variant })}>
      {Icon && (
        <Icon
          className={icon({ variant })}
          weight={variant === 'icon' ? 'fill' : 'regular'}
        />
      )}
      {children}
    </button>
  )
}
