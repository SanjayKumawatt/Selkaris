import React from 'react'
import Hero from '../Components/Hero'
import WhatWeBuild from '../Components/Features'
import HowWeBuild from '../Components/HowWeBuild'
import OurStory from '../Components/OurStory'
import Platforms from '../Components/Platform'
import AISolutions from '../Components/Solutions'
import HowWeBuildd from '../Components/HowWeBuildd'
import Connect from '../Components/Connect'

const Home = () => {
  return (
    <div>
        <Hero/>
        <WhatWeBuild/>
        <HowWeBuild/>
        <OurStory/>
        <Platforms/>
        <AISolutions/>
        <HowWeBuildd/>
        <Connect/>
    </div>
  )
}

export default Home