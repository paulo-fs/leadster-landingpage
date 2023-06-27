import Image from 'next/image'
import videoThumbnail from '@/assets/thumbnail.png'
import playIcon from '@/assets/playIcon.svg'

export function CardVideo() {
  return (
    <div className='max-w-card rounded-3xl shadow-2xl group relative'>
      <div className='w-full h-full rounded-t-3xl group-hover:bg-blue-main transition'>
        <Image data-img='bg' src={videoThumbnail} className='rounded-t-3xl group-hover:opacity-70 transition' alt='' />
      </div>

      <Image data-img='icon' src={playIcon} alt='' className='absolute top-20 right-36 opacity-0 group-hover:opacity-100 transition' />

      <h6 className='py-6 px-8 text-base font-bold text-black group-hover:text-blue-main transition'>
          Como aumentar sua Geração de Leads feat. Tranktor
      </h6>
    </div>
  )
}
