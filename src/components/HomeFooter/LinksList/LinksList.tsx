import Link from 'next/link'

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
              <Link href={item.url}>
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
