import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/navbar.css'
import logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
 
 

        <div className="nav col-lg-5 col-12 p-2 d-flex   " >

            <div className="logo ">
                <img src={logo} alt="logo" className='logo_img align-items-center ms-0 me-5'/>
            </div>
            <div className="titre align-items-center d-flex">
                <Link to="/" className="home text-decoration-none ms-5 me-4  ">Home</Link>
                <Link to="/exercices" className="exercices text-decoration-none ">Exercices</Link>

            </div>


        </div>
 

 
  )
}

export default Navbar
