import React, { useEffect } from 'react';
import '../styles/hero.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import banner from '../assets/images/banner1.jpg';
import { useState } from 'react';

const HeroBanner = ( {width}) => {
 


 
  

 

  return (
    <div className="container-fluid">
      <div className='row  '>
      <div className={`hero col-lg-6 col-md-col-6 col-12 mt-2 ${width < 992 ? 'text-center' : 'text-lg-start'}`}>
          <p className={width <992 ? 'title1 mt-5 text-center  ':'title1 mt-5 ms-5 text-center text-lg-start'}>Fitness Club</p>
          <p className={width <992 ?'title2 mt-5  text-center ':'title2 mt-3 ms-5 text-center text-lg-start'}>Sweat, Smile <br />and Repeat</p>
          <p className={width <992 ?'title3 mt-5 text-center ms-1':'title3 mt-4 ms-5 text-center text-lg-start'}>Check out the most effective exercise personnel</p>
          {/* <button className={}>Explore Exercises</button> */}
          <button className={width <992 ? 'btn btn_resize mx-auto p-2 d-flex  mt-4 mb-5':'btn p-2 mt-5 ms-5 mb-4'}>Explore Exercises</button>

          {/* <p className='title4 text-center text-lg-start '>Exercice</p> */}
        </div>
        <div className={width <992 ?"col-lg-5 col-md-6  d-flex ms-auto mb-2":"col-lg-5 col-md-6  mb-5"}>
          <img src={banner} alt="banner" className='banner_img img col-lg-6 col-md-12 col-12 ' />
        </div>
 
      </div>
    </div>
  );
};

export default HeroBanner;
