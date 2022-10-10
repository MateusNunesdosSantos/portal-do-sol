import IconButton from '@material-tailwind/react/components/IconButton'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutSection } from '../src/components/AboutSection'
import { Details } from '../src/components/Details'
import { GalerySection } from '../src/components/GalerySection'
import { Header } from '../src/components/Header'
import { NavBar } from '../src/components/NavBar'
import styles from '../styles/Home.module.css'
import ImgWhatsapp from '../assets/whatsapp.png'


const Home: NextPage = () => {
  return (
    <div className='absolute w-full'>
      <a href='https://web.whatsapp.com/send?phone=5542999261950' className='fixed bottom-10  flex items-center justify-center right-10 md:right-24 z-10 rounded-full bg-[#229B4B] hover:bg-green-500 outline-none drop-shadow-none w-[50px] h-[50px]'>
        <Image src={ImgWhatsapp}/>
      </a>
      <NavBar/>
      <Header/>
      <AboutSection/>
      <GalerySection/>
      <Details/>
    </div>
  )
}

export default Home
