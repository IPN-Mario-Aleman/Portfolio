import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HomeScreen from '../components/HomeScreen'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <>
      <Header></Header>
      <HomeScreen></HomeScreen>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  )
}