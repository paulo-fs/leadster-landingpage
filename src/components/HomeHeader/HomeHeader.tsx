import Image from 'next/image'
import logo from '@/assets/logo.png'

export function HomeHeader() {
  return (
    <header className='w-full h-20 flex items-center justify-center bg-white'>
      <Image src={logo} alt='Leadster logo' />
    </header>
  )
}
