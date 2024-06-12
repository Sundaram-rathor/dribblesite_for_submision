import React from 'react'
import Hero from './homeComponents/Hero'
import ExploreInspiringDesign from './homeComponents/exploreInsp/ExploreInspiringDesign'
import Block from './homeComponents/Block'

function Home() {
  return (
    <div className='h-auto w-full '>
       <Hero/>
       <ExploreInspiringDesign/>
       <Block/>
    </div>
  )
}

export default Home