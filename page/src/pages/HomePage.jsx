import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import DevHistory from '../components/DevHistory'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Projects />
        <DevHistory />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
