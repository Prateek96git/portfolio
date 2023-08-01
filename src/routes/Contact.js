import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Img2 heading="CONTACT" text="lets have a chat"/>
       <Form/>
       <Footer/>
    </div>
  )
}

export default Contact
