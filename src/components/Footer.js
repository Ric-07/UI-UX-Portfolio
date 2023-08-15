import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>Agartala , Tripura </p>
                      <p>India</p>
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    1-2334-456-43</h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    Mail@gmail.com</h4>
                    </div>
                </div>
            </div>
          

            <div className="right">
              <h4>About my website</h4>
              <p>This is my portfolio website.
                Here I like to discuss new design challenges and
                latest user experience trends</p>
                <div className="social">
                <FaFacebook
                 size={30} style={{color:"#fff", 
                 marginRight: "1rem"}}
                 />
                <FaInstagram
                 size={30} style={{color:"#fff", 
                 marginRight: "1rem"}}
                 />
                <FaLinkedin
                 size={30} style={{color:"#fff", 
                 marginRight: "1rem"}}
                 />
                 
                </div>
              
            </div>

        </div>
    </div>
  )
}

export default Footer