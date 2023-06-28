import { Button } from '@/components'

export function Navigation() {
  return (
    <div className='flex items-center justify-between'>
      <nav className='flex gap-4'>
        <Button>
          Agências
        </Button>
        <Button>
          Chatbot
        </Button>
        <Button>
          Marketing Digital
        </Button>
        <Button>
          Geração de leads
        </Button>
        <Button>
          Mídia paga
        </Button>
      </nav>

      <div className='flex gap-4 items-center'>
        <span>Ordenar por:</span>
        <input placeholder='Data de publicação' className='border rounded-md px-4 py-1' />
      </div>
    </div>
  )
}
