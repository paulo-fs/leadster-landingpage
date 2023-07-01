import Image from 'next/image'
import logo from '@/assets/logo.png'

export function HomeHeader() {
  return (
    <header className='w-full h-20 md:h-32 flex items-center justify-center bg-white'>
      <Image src={logo} alt='Leadster logo' className='w-32 md:w-auto' />
    </header>
  )
}
