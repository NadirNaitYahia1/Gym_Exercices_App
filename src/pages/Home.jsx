import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/home.css'
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';
import { useState } from 'react';

const Home = () => {
  
  const [search, setSearch] = useState('');
  const [bodyPartList, setBodyPartList] = useState([]);
  
  return (
  <div className="col-12">
    <HeroBanner />
    <SearchExercices search={search} setSearch={setSearch} bodyPartList={bodyPartList} setBodyPartList={setBodyPartList} />
    <Exercices />
 
  </div>
  )
}

export default Home
