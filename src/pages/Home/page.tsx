import { HomeFooter, HomeHeader } from '@/components'
import { Hero } from './sections/Hero/Hero'
import { VideosSection } from './sections/Videos/Videos'
import { CTA } from './sections/CTA/CTA'


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
