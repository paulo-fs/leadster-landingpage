import { Button, SelectBox } from '@/components'
import { Topics } from '@/dataTypes/videos.dto'

interface NavigationProps {
  selectedTopic: Topics,
  setTopic: (topic: Topics) => void
}

export function Navigation({ setTopic, selectedTopic }: NavigationProps) {

  return (
    <div className='flex items-center justify-between'>
      <nav className='flex gap-4'>
        <Button
          isActive={selectedTopic === Topics.AGENCY}
          onClick={() => setTopic(Topics.AGENCY)}
        >
          Agências
        </Button>
        <Button
          isActive={selectedTopic === Topics.CHATBOT}
          onClick={() => setTopic(Topics.CHATBOT)}
        >
          Chatbot
        </Button>
        <Button
          isActive={selectedTopic === Topics.DIGITALMARKETING}
          onClick={() => setTopic(Topics.DIGITALMARKETING)}
        >
          Marketing Digital
        </Button>
        <Button
          isActive={selectedTopic === Topics.LEADS}
          onClick={() => setTopic(Topics.LEADS)}
        >
          Geração de leads
        </Button>
        <Button
          isActive={selectedTopic === Topics.PAIDMEDIA}
          onClick={() => setTopic(Topics.PAIDMEDIA)}
        >
          Mídia paga
        </Button>
        <Button
          isActive={selectedTopic === Topics.ALL}
          onClick={() => setTopic(Topics.ALL)}
        >
          Todos
        </Button>
      </nav>

      <div className='flex gap-4 items-center'>
        <span>Ordenar por:</span>
        <SelectBox />
      </div>
    </div>
  )
}
