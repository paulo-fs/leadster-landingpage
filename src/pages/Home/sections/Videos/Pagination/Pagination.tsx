import { ButtonPage } from '@/components'

interface PaginationProps {
  count: number
  changePage: (page: number) => void
  activePage: number
}

export function Pagination(componentProps: PaginationProps) {
  const {
    count,
    changePage,
    activePage,
  } = componentProps

  const pages = []
  for(let i = 1; i < count + 1; i++) {
    pages.push(i)
  }

  return (
    <div className='flex items-center'>
      <span className='font-bold text-lg text-black mr-4'>
        Página
      </span>

      {pages.map(page => {
        return (
          <ButtonPage
            page={page.toString()}
            isActive={activePage === page}
            onClick={() => changePage(page)}
          />
        )
      })}
    </div>
  )
}
