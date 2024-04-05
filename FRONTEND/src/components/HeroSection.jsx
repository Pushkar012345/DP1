import React from 'react';
import Navbar from './Navbar';
 // Adjust the path as per your project structure


const HeroSection = () => {
  return (
    <section className='heroSection' id="heroSection">
     <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className='title'>Kokan</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./f3.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img src="./threelines.svg" alt="logo" className="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/f2.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;