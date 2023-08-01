import React from "react";
import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer-container">
           <div className="left">
           <div className="location">
           <FaHome size={20} style={{ color :"#fff", marginRight:"2rem"}}/>
           <div>
             <p>BTM Layout 1st Stage.</p>
             <p>Bangalore, Karnataka.</p>
           </div>
           </div>
             <div className="phone">
               <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }}/>
              8329722358</h4>
             </div>
             <div className="email">
             <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }}/>
             prateekpillai1997@gmail.com</h4>
             </div>
           </div>
            <div className="right">
             <h4>About</h4>
             <p>This is Prateek Pillai. I am Frontend Developer. I know technologies like HTML,CSS,Javascript,React.I done many projects and I am fresher.</p>
             <div className="social">
              <a href="https://www.facebook.com/"><FaFacebook size={30} style={{color: "#fff", marginRight: "2rem"}} /></a>
             <a href="https://web.whatsapp.com/"><FaWhatsapp size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
              <a href="https://www.linkedin.com/in/prateek-pillai-114b29245"><FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
              <a href="https://github.com/Prateek96git/Portfolio"><FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/></a>
             </div>
            </div>
          </div>
        </div>
    )
}

export default Footer