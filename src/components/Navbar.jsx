import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/navbar.css'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Navbar = () => {
    const [active, setActive] = useState([false, false]);
    const [items, setItems] = useState(0);
  
    useEffect(() => {
      if (items === 0) {
        setActive([true, false]);
      }
      if (items === 1) {
        setActive([false, true]);
      }
    }, [items]);
  


    return (
 
        <div className="nav col-lg-5 col-12 p-2 d-flex   " >

            <div className="logo ">
                <img src={logo} alt="logo" className='logo_img align-items-center ms-0 me-5'/>
            </div>
            <div className="titre align-items-center d-flex">
                <Link to="/" className={active[0] ? "home text-decoration-none ms-5 me-4  " : "  text-decoration-none ms-5 me-4  "  } onClick={()=> setItems(0)} >Home</Link>
                <Link to="/exercices" className={active[1] ? " home text-decoration-none": "  text-decoration-none"} onClick={()=>setItems(1)}>Exercices</Link>

            </div>


        </div>
 

 
  )
}

export default Navbar
