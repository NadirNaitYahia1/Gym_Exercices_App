import React, { useEffect } from 'react';
import '../styles/hero.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import banner from '../assets/images/banner1.jpg';
import { useState } from 'react';

const HeroBanner = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setWidth(true);
    }
  }, []);
  

 

  return (
    <div className="container-fluid">
      <div className='row  '>
        <div className="hero col-lg-6 col-12 mt-5 mt-2">
          <p className={width? 'title1 mt-5 text-center  ':'title1 mt-5 ms-5 text-center text-lg-start'}>Fitness Club</p>
          <p className={width ?'title2 mt-4   text-center ':'title2 mt-3 ms-5 text-center text-lg-start'}>Sweat, Smile <br />and Repeat</p>
          <p className={width?'title3 mt-4 text-center ms-1':'title3 mt-4 ms-5 text-center text-lg-start'}>Check out the most effective exercise personnel</p>
          <button className={width ? 'btn p-2 d-flex mx-auto mt-5 mb-4':'btn p-2 mt-5 ms-5 mb-4'}>Explore Exercises</button>

          {/* <p className='title4 text-center text-lg-start '>Exercice</p> */}
        </div>
        <div className={width?"col-lg-5 col-md-6 col-12 d-flex ms-auto mb-2":"col-lg-5 col-md-6 col-12"}>
          <img src={banner} alt="banner" className='banner_img img col-lg-6 col-md-12 col-12  ' />
        </div>
 
      </div>
    </div>
  );
};

export default HeroBanner;
