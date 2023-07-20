import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/search.css'
import { useState,useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Card from 'react-bootstrap/Card';
import badyPart_img from '../assets/icons/gym.png';
 
import Carousel from 'react-bootstrap/Carousel';


const SearchExercices = () => {
  const [width, setWidth] = useState(false);
  const [search, setSearch] = useState('');
  const [bodyPartList, setBodyPartList] = useState([]);
 






  const handlSearch = async() => {
    if(search){
        const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        const searchedExercices = exercicesData.filter(
          (exercice) => 
            exercice.name.toLowerCase().includes(search)
          || exercice.bodyPart.toLowerCase().includes(search)
          || exercice.equipment.toLowerCase().includes(search)
          || exercice.bodyPart.toLowerCase().includes(search)
          )
          console.log(searchedExercices);
  }}


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      console.log(bodyPartsData);
      setBodyPartList(['all',...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);


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
      <div className="row  ">
        <div className="col-12">
          <p className={width ? 'title5resize text-center mt-5': 'title5 text-center mt-5   ' }>Awesome Exercices You <br /> Should Know</p>
          <div className="input col-12  d-flex justify-content-center mb-2">
            <input type="text" placeholder='Search Exercices' className='input1 col-lg-8 col-md-8 col-7 p-2' onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} />
            {/* {console.log(search)} */}
              <button className='btn col-lg-1 ms-4 p-2 ' onClick={handlSearch}>Search</button>
 

          </div>


          <div className="bodyPartList col-12 mt-5  mb-3 ">
       <div className="d-flex col-12">
       <Carousel >
    <Carousel.Item  >
      {console.log(bodyPartList)}
  {bodyPartList.map((bodyPart, index) => (
      <Card className="col-3">
        <Card.Img variant="top" src={badyPart_img} className="img-fluid" />
        <Card.Body>
          <Card.Text className="text-center">{bodyPart}</Card.Text>
        </Card.Body>
      </Card>
      ))}
    </Carousel.Item>
</Carousel>
        
        
        
        
        </div>     


    
 
            
        
          </div>

        </div>
      </div>

    </div>
  )
}

export default SearchExercices