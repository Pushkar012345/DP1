import React from 'react'
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const About = () => {
  return (
    <section className="about" id="about">
    <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we are serious about is Food.</p>
            </div>
            <p className="mid">
            Welcome to [Pushkar Restuarant]. We're all about delicious food made with fresh ingredients and served with a smile. Join us for a memorable dining experience filled with flavor and warmth.
            
                
            </p>
            <Link to={"/"}>EXPLORE MENU<span>
            <HiOutlineArrowNarrowRight/>
            </span></Link>
        </div>
        <div className="banner">
            <img src="/about3.png" alt="about"/>
        </div>
    </div>
    </section>
    
  )
}

export default About