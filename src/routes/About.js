import React from 'react'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return ( 
    <div> 
      <NavBar/>
      <HeroImg2 heading="ABOUT" text="I'm a UI/UX designer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
  
}

export default About