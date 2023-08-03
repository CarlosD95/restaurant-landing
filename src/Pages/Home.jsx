import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import About from '../Components/About.jsx';
import Work from '../Components/Work.jsx';
import Testimonial from '../Components/Testimonial.jsx';
import Contact from '../Components/Contact.jsx'

const Home = () => {
  return (
    <div class="home-container">
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>Your favourite food delivered hot & fresh</h1>
          <p className='primary-text'>Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.</p>
          <button className='secondary-button'>
            Order Now <FiArrowRight /> {" "}
          </button>
        </div>
        <div className='home-image-section'>
          <img src={BannerImage} alt='' />
        </div>
      </div>
      <About/>
      <Work />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home