import React from 'react'

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';



const project = () => {
  return <div> 
    <NavBar/>
    <HeroImg2 heading="PROJECTS." text="Some of my most recent
       works"/>
       <Work/>
       <PricingCard/>
    <Footer/>
  </div>
}

export default project