import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import BookSection from '@/components/BookSection'
import Footer from '@/components/Footer'
import RevealHandler from '@/components/RevealHandler'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <BookSection />
        <Footer />
      </main>
      <RevealHandler />
    </>
  )
}
