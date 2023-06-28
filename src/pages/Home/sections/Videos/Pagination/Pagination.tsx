import { ButtonPage } from '@/components'

export function Pagination() {
  return (
    <div className='flex items-center'>
      <span className='font-bold text-lg text-black mr-4'>
        Página
      </span>

      <ButtonPage page='1' />
      <ButtonPage page='2' />
      <ButtonPage page='3' />
      <ButtonPage page='4' isActive />
    </div>
  )
}
