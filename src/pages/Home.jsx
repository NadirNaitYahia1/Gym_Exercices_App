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
  const [width, setWidth] = useState(false);
  useEffect(() => {console.log('From Home Exercices :',exercices)}, []);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setWidth(true);
      console.log(window.location.href);
      // window.location.reload();
      // window.location.href = window.location.href;
    }
  }, []);

  return (
  <div className="col-12">
    <HeroBanner />
    <SearchExercices search={search} setSearch={setSearch} bodyPartList={bodyPartList} setBodyPartList={setBodyPartList} exercices={exercices} setExercices={setExercices} width={width} />
    <Exercices exercices={exercices} setExercices={setExercices} search={search}  width={width}/>
 
  </div>
  )
}

export default Home
