import { ComponentProps, ElementType, HTMLAttributes, ReactNode } from 'react'


interface ButtonPageProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isActive?: boolean
}

export function ButtonPage(buttonProps: ButtonPageProps) {
  const { children, isActive = false, ...props } = buttonProps

  return (
    <button {...props} className={`
      w-8 h-8 md:w-11 md:h-11 text-lg text-black hover:font-bold hover:bg-blue-background rounded-md transition
      ${isActive && 'border border-blue-main text-blue-main font-bold'}
    `}>
      {children}
    </button>
  )
}

export interface ButtonPageComponentProps extends ComponentProps<typeof ButtonPage> {
  as?: ElementType
}

ButtonPage.displayName = 'ButtonPage'
