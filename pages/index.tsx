import type { NextPage } from 'next'
import { AboutSection } from '../src/components/AboutSection'
import { ButtonWhatsapp } from '../src/components/ButtonWhatsapp'
import { Details } from '../src/components/Details'
import { Footer } from '../src/components/Footer'
import { GalerySection } from '../src/components/GalerySection'
import { Header } from '../src/components/Header'
import { NavBar } from '../src/components/NavBar'
import { Partnerships } from '../src/components/Partnerships'
import { Contact } from '../src/components/Contacts'



const Home: NextPage = () => {
  return (
    <div className="absolute w-full">
      <ButtonWhatsapp/>
      <NavBar/>
      <Header/>
      <AboutSection/>
      <GalerySection/>
      <Details/>
      <Contact/>
      <Partnerships/>
      <Footer/>
    </div>
  )
}

export default Home
