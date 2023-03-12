import React from 'react'
import Exchanges from './section-five/Exchanges'
import RoadMap from './section-four/RoadMap'
import Collaboration from './section-six/Collaboration'
import Head from './section-one/Head'
import EcoSystem from './section-three/EcoSystem'
import Logo from './section-two/Logo'
import "./styles.scss"
const Home = () => {
  return (
   <div className='home'>
    <Head/>
    <Logo/>
    <EcoSystem/>
    <RoadMap/>
    <Collaboration/>

    <Exchanges/>
 
   </div>
  )
}

export default Home