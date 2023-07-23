import React, { useEffect } from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/home.css'
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';
import { useState } from 'react';

const Home = () => {
  
  const [search, setSearch] = useState('ALL');
  const [bodyPartList, setBodyPartList] = useState([]);
  const [exercices, setExercices] = useState([]);
  const [first, setFirst] = useState(1);
  const [end, setEnd] = useState(10);
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {console.log('From Home Exercices :',exercices)}, []);
  

 

  return (
  <div className="col-12">
    <HeroBanner  width={width}/>
    <SearchExercices search={search} setSearch={setSearch} bodyPartList={bodyPartList} setBodyPartList={setBodyPartList} exercices={exercices} setExercices={setExercices} width={width}  clicked={clicked} setClicked={setClicked} />
    <Exercices exercices={exercices} setExercices={setExercices} search={search}  width={width} first={first} end={end} setFirst={setFirst} setEnd={setEnd}  clicked={clicked} setClicked={setClicked} />
 
  </div>
  )
}

export default Home
