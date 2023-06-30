import { CTA, Hero, HomeFooter, HomeHeader, VideosSection } from '@/components'
import { Plus_Jakarta_Sans } from 'next/font/google'

export const jackarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export default function Home() {
  return (
    <div className={jackarta.className}>
      <HomeHeader />
      <Hero />
      <VideosSection />
      <CTA />
      <HomeFooter />
    </div>
  )
}
