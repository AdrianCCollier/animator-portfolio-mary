import { Hero } from '../components/Hero'
import { WorkGrid } from '../components/WorkGrid'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <About />
      <Contact />
    </>
  )
}
