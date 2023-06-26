import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin']})

export const metadata = {
  title: 'Leadster',
  description: 'Menos Conversinha, Mais Conversão. Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
