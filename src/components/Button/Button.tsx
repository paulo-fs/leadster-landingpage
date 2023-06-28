import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  isActive?: boolean
  children: ReactNode
}

export function Button(buttonProps: ButtonProps) {
  const { primary = false, isActive = false, children, ...props } = buttonProps

  const secondaryBase = `active:bg-blue-main border border-black disabled:border-gray rounded-full text-sm text-black active:text-white py-2 px-4
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
    <button {...props} className='bg-blue-main hover:bg-black text-white font-semibold text-lg transition rounded-full py-5 px-8 disabled:bg-gray uppercase'>
      {children}
    </button>
  )
}
