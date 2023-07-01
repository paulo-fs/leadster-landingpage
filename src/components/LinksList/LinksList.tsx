import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'

interface LinksListProps {
  title: string
  list: List[]
}

export interface List {
  text: string
  url: string
}

export function LinksList(props: LinksListProps) {
  const { list, title } = props

  return (
    <div>
      <h6 className='text-black font-bold'>
        {title}
      </h6>
      <ul className='mt-12 flex flex-col gap-5'>
        {list.map((item, index) => {
          return (
            <li key={index} className='text-gray text-sm'>
              <Link href={item.url} className='hover:opacity-60'>
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export interface ListLinksComponentProps extends ComponentProps<typeof LinksList> {
  as?: ElementType
}

LinksList.displayName = 'ListLinks'
