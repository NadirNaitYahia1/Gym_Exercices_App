import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/search.css'
import { useState,useEffect } from 'react';

const SearchExercices = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 992) {
      setWidth(true);
      console.log(window.location.href);
      // window.location.reload();
      // window.location.href = window.location.href;
    }
  }, []);



  return (

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <p className={width ? 'title5resize text-center mt-5': 'title5 text-center mt-5   ' }>Awesome Exercices You <br /> Should Know</p>
          <div className="input col-12  d-flex justify-content-center">
            <input type="text" placeholder='Search Exercices' className='input1 col-lg-8 col-5 col-12 p-2' />
            
              <button className='btn col-lg-1 ms-4 p-2 '>Search</button>
 

          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchExercices