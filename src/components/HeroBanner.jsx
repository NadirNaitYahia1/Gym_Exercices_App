import React from 'react';
import '../styles/hero.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import banner from '../assets/images/banner1.jpg';

const HeroBanner = () => {
  return (
    <div className="container-fluid">
      <div className='row mt-2 '>
        <div className="hero col-lg-6 col-12 mt-5 ">
          <p className='title1 mt-5 ms-5 text-center text-lg-start'>Fitness Club</p>
          <p className='title2 mt-3 ms-5 text-center text-lg-start'>Sweat, Smile <br />and Repeat</p>
          <p className='title3 mt-4 ms-5 text-center text-lg-start'>Check out the most effective exercise personnel</p>
          <button className='btn p-2 mt-5 ms-5 mb-4'>Explore Exercises</button>

          {/* <p className='title4 text-center text-lg-start '>Exercice</p> */}
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <img src={banner} alt="banner" className='banner_img img col-lg-6 col-md-12 col-12  ' />
        </div>
 
      </div>
    </div>
  );
};

export default HeroBanner;
