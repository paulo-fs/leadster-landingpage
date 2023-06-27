import { HTMLAttributes } from 'react'


interface ButtonPageProps extends HTMLAttributes<HTMLButtonElement> {
  page: string
  isActive?: boolean
}

export function ButtonPage(buttonProps: ButtonPageProps) {
  const { page, isActive = false, ...props } = buttonProps

  return (
    <button {...props} className={`
      w-11 h-11 text-lg text-black hover:font-bold hover:bg-blue-background rounded-md transition
      ${isActive && 'border border-blue-main text-blue-main font-bold'}
    `}>
      {page}
    </button>
  )
}
