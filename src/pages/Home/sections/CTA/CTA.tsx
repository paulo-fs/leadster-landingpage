import Image from 'next/image'
import { Button } from '@/components'
import graph from '@/assets/comparativo_img_CTA.png'
import top10 from '@/assets/selo_RD.png'
import cardIcon from '@/assets/no-card-dark.webp'
import ratting from '@/assets/rating.webp'

export function CTA() {
  return (
    <section className='w-full bg-blue-background'>
      <div className="w-full sm:max-w-2xl md:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl px-4 sm:px-0 mx-auto py-2 md:py-16 flex flex-wrap items-center justify-between">
        <Image src={graph} alt='dados estatísticos do resultados da leadster'
          className='w-full md:w-5/12'
        />

        <div className='md:w-6/12 xl:w-auto md:mb-5 xl:mb-14 w-full lg:w-auto text-center lg:text-right'>
          <div className='border-b border-gray border-opacity-50 py-3 md:py-6'>
            <h3 className='text-black text-xl md:text-3xl lg:text-4xl'>
              Pronto para triplicar sua
            </h3>
            <h3 className='text-black text-xl md:text-3xl lg:text-4xl font-semibold mt-1'>Geração de Leads?</h3>
            <p className='text-black text-sm md:text-base lg:text-lg mt-2'>
              Criação e ativação em <b>4 minutos.</b>
            </p>
          </div>

          <div className='flex items-center justify-center lg:justify-end gap-4 mt-2 md:mt-6'>
            <Button primary>
              ver demonstração
            </Button>
            <Image src={top10} alt='top 10 - Apps mais usados RD STATION'
              className='md:w-1/2 lg:w-auto'
            />
          </div>

          <div className='flex flex-wrap gap-2 items-center justify-center lg:justify-between mt-4 md:mx-10 lg:mx-0'>
            <Image src={cardIcon} alt='icone de um cartão de crédito riscado' />
            <span className='text-sm lg:text-base'>Não é necessário Cartão de Crédito</span>
            <span className='hidden lg:inline'>|</span>
            <Image src={ratting} alt='4,9 de 5 estrelas' />
            <span className='text-sm lg:texte-base'>4.9/5 média de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  )
}
