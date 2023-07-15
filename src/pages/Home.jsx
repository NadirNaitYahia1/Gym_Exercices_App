import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/home.css'
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';

const Home = () => {
  return (
  <div className="col-12">
    <HeroBanner />
    <SearchExercices />
    <Exercices />
 
  </div>
  )
}

export default Home
