import React from 'react';
import './ImgStyles.css';
import IntroImg from "../assets/bgm.png"
import { Link } from 'react-router-dom';

const Img = () => {
  return (
   <div className="Img">
    <div className="mask">
       <img className="into-img" src={IntroImg} alt="Img"/>
    </div>
    <div className="content">
     <p>Hi, Myself Prateek</p>
     <h1>React JS Developer</h1>
     <div>
      <Link to="/projects" className="btn">Projects</Link>
      <Link to="/contact" className="btn btn-success">Contacts</Link>
     </div>
    </div>
   </div> 
  )
}

export default Img;
