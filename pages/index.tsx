import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AboutSection } from '../src/components/AboutSection'
import { Details } from '../src/components/Details'
import { GalerySection } from '../src/components/GalerySection'
import { Header } from '../src/components/Header'
import { NavBar } from '../src/components/NavBar'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <Header/>
      <AboutSection/>
      <GalerySection/>
      <Details/>
    </>
  )
}

export default Home
