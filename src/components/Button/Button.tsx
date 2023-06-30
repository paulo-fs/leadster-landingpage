import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  isActive?: boolean
  children: ReactNode
}

export function Button(buttonProps: ButtonProps) {
  const { primary = false, isActive = false, children, ...props } = buttonProps

  const secondaryBase = `active:bg-blue-main border border-black disabled:border-gray rounded-full text-sm text-black active:text-white py-2 px-4 focus:text-white
  ${isActive && 'bg-blue-main text-white hover:text-white border-blue-main'}
`
  const secondaryHover = 'hover:border-blue-main hover:text-blue-main transition'

  const secondary = `${secondaryBase} ${secondaryHover}`

  if (!primary) return (
    <button {...props} className={secondary}>
      {children}
    </button>
  )

  return (
    <button {...props} className='bg-blue-main hover:bg-black text-white font-semibold text-xs lg:text-lg transition rounded-full py-3 px-6 lg:py-5 lg:px-8 disabled:bg-gray uppercase'>
      {children}
    </button>
  )
}
