import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isActive?: boolean
  children: ReactNode
}

export function Button(buttonProps: ButtonProps) {
  const { variant = 'primary', isActive = false, children, ...props } = buttonProps

  const secondaryBase = `bg-white active:bg-blue-main border border-black disabled:border-gray rounded-full text-black active:text-white py-2 px-6
  ${isActive && 'bg-blue-main text-white hover:text-white border-blue-main'}
`
  const secondaryHover = 'hover:border-blue-main hover:text-blue-main transition'

  const secondary = `${secondaryBase} ${secondaryHover}`

  if (variant === 'secondary') return (
    <button {...props} className={secondary}>
      {children}
    </button>
  )

  return (
    <button {...props} className='bg-blue-main hover:bg-black text-white font-semibold text-lg transition rounded-full py-3 px-6 disabled:bg-gray'>
      {children}
    </button>
  )
}
