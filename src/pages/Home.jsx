import React, { useEffect } from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/home.css'
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';
import { useState } from 'react';

const Home = () => {
  
  const [search, setSearch] = useState('');
  const [bodyPartList, setBodyPartList] = useState([]);
  const [exercices, setExercices] = useState([]);
  useEffect(() => {console.log('From Home Exercices :',exercices)}, []);


  return (
  <div className="col-12">
    <HeroBanner />
    <SearchExercices search={search} setSearch={setSearch} bodyPartList={bodyPartList} setBodyPartList={setBodyPartList} exercices={exercices} setExercices={setExercices} />
    <Exercices exercices={exercices} setExercices={setExercices} search={search} />
 
  </div>
  )
}

export default Home
