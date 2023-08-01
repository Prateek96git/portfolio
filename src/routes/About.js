import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <Img2 heading="ABOUT" text="I am Front-End Developer"/>
       <AboutContent/>
       <Footer/>
    </div>
  )
}

export default About
