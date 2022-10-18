import type { NextPage } from 'next'
import { AboutSection } from '../components/AboutSection'
import { ButtonWhatsapp } from '../components/ButtonWhatsapp'
import { Details } from '../components/Details'
import { Footer } from '../components/Footer'
import { GalerySection } from '../components/GalerySection'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Partnerships } from '../components/Partnerships'
import { Contact } from '../components/Contacts'

const Home: NextPage = () => {
  return (
    <div className="absolute w-full">
      <ButtonWhatsapp />
      <NavBar />
      <Header />
      <AboutSection />
      <GalerySection />
      <Details />
      <Contact />
      <Partnerships />
      <Footer />
    </div>
  )
}

export default Home
