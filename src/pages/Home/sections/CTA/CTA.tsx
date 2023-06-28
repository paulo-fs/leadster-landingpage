import Image from 'next/image'
import { Button } from '@/components'
import graph from '@/assets/comparativo_img_CTA.png'
import top10 from '@/assets/selo_RD.png'
import cardIcon from '@/assets/no-card-dark.webp'
import ratting from '@/assets/rating.webp'

export function CTA() {
  return (
    <section className='w-full bg-blue-background'>
      <div className="max-w-8xl mx-auto py-16 flex items-center justify-between">
        <Image src={graph} alt='dados estatísticos do resultados da leadster' />

        <div className='mb-14'>
          <div className='border-b border-gray border-opacity-50 py-6'>
            <h3 className='text-black text-4xl'>
              Pronto para triplicar sua
            </h3>
            <h3 className='text-black text-4xl font-semibold mt-1'>Geração de Leads?</h3>
            <p className='text-black text-lg mt-2'>
              Criação e ativação em <b>4 minutos.</b>
            </p>
          </div>

          <div className='flex items-center gap-4 mt-6'>
            <Button primary>
              ver demonstração
            </Button>
            <Image src={top10} alt='top 10 - Apps mais usados RD STATION' />
          </div>

          <div className='flex items-center justify-between mt-4'>
            <Image src={cardIcon} alt='icone de um cartão de crédito riscado' />
            <span>Não é necessário Cartão de Crédito</span>
            <span>|</span>
            <Image src={ratting} alt='4,9 de 5 estrelas' />
            <span>4.9/5 média de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  )
}
