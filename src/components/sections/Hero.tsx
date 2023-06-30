import detail from '@/assets/asset-header.png'
import Image from 'next/image'

export function Hero() {
  return (
    <main className="w-full bg-blue-background py-14 md:py-40 flex flex-col items-center justify-center">

      <div className='border-2 border-blue-main py-2 px-6 rounded-e-full rounded-t-full'>
        <p className='text-blue-main text-sm sm:text-base uppercase font-bold'>
          Webnars Exclusivos
        </p>
      </div>

      <h2 className='text-2xl md:text-h3 text-black mt-4'>Menos Conversinha,</h2>

      <div className='relative px-4 md:px-8 border-b border-gray border-opacity-40'>
        <Image src={detail} alt='' className='absolute w-6 md:w-9 -top-1 right-0 md:top-1 md:right-5' width={36} />
        <h1 className='text-4xl md:text-h1 font-semibold text-blue-main leading-none pb-6'>Mais Conversão</h1>
      </div>
      <p className='text-black mt-4 text-sm md:text-base w-72 md:w-auto'>
          Conheça as estratégias que <span className='font-bold'>mudaram o jogo</span> e como aplicá-las no seu negócio
      </p>
    </main>
  )
}
