import Link from 'next/link'
import { ComponentProps, ElementType, ReactNode } from 'react'

interface ButtonRoundedProps {
  children?: ReactNode
  url: string
  target?: string
}

export function ButtonRounded({children, url, target = '_blank'}: ButtonRoundedProps) {
  return (
    <Link href={url}
      target={target}

    >
      <button className='p-4 rounded-full bg-gray bg-opacity-20 hover:bg-blue-main group transition'>
        {children}
      </button>
    </Link>
  )
}

export interface ButtonRoundedComponentProps extends ComponentProps<typeof ButtonRounded> {
  as?: ElementType
}

ButtonRounded.displayName = 'ButtonRounded'
