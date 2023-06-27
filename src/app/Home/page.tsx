import { HomeFooter, HomeHeader } from '@/components'
import { CTA, Hero, VideosSection } from './sections'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Hero />
      <VideosSection />
      <CTA />
      <HomeFooter />
    </>
  )
}
