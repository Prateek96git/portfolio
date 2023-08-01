import React from 'react'
import Navbar from '../components/Navbar';
import Img2 from '../components/Img2';
import Footer from '../components/Footer';
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="PROJECT" text="Some of my most recent works"/>
      <WorkCard/>
      <Footer/>      
    </div>
  )
}

export default Projects
