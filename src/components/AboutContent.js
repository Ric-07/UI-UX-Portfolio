import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import UI1 from "../assets/UIimg.jpg"
import UI2 from "../assets/UIimg2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
           <div className="left">
            <h1>Who am I</h1>
            <p>I am an UI/UX Designer. I create amazing web designs and User Interfaces</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
           </div>
           <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={UI1} className="img" alt="true" />
                </div>
                <div className="img-stack-bottom">
                    <img src={UI2} className="img" alt="true" />
                </div>
            </div>
           </div>
    </div>
  )
}

export default AboutContent