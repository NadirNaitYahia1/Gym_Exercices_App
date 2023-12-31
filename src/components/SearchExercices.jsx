import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css'; 
import '../styles/search.css'
import { useState,useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Card from 'react-bootstrap/Card';
import badyPart_img from '../assets/icons/gym.png';
 
import Carousel from 'react-bootstrap/Carousel';


const SearchExercices = ({search ,setSearch ,bodyPartList,setBodyPartList,exercices,setExercices, width , clicked, setClicked,exercicesNav,setExercicesNav}) => {
  // const [search, setSearch] = useState('');
  // const [bodyPartList, setBodyPartList] = useState([]);
  const [click, setClick] = useState(0);
  const [item, setItem] = useState(-1);
 const time = 100000000000000000000;
 
 
 
 
 const handlSearch = async() => {
    let url = 'https://exercisedb.p.rapidapi.com/exercises'
    // window.scrollTo({top:1800,behavior:'smooth'} );
    if(search){ 
      console.log('search')
    

        const exercicesData = await fetchData(url, exerciseOptions);
        console.log('exercicesData',exercicesData)
        const searchedExercices = exercicesData.filter(
          (exercice) => 
            exercice.name.toLowerCase().includes(search)
          || exercice.bodyPart.toLowerCase().includes(search)
          || exercice.equipment.toLowerCase().includes(search)
          || exercice.bodyPart.toLowerCase().includes(search)
          )
          setExercices(searchedExercices);
          // console.log(searchedExercices);
          console.log('From SearchExercices Exercices :',exercices);
          setSearch('');
          // window.scrollTo({top:20,behavior:'smooth'} );
        }}
        
        
        useEffect(() => {
          if (exercicesNav === true) {
            setClicked(true)
            setClick(0) 
            setItem(1)
            setSearch('all')
          }
        }, [exercicesNav]);
        
  useEffect(() => {
   
      // const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  
  
      setBodyPartList(['all',"back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"]);
 

   
  }, []);


 

  useEffect(() => {
      handlSearch(); // Call the search function whenever the click or item states are updated
      console.log('bikkkkkk');
   
  }, [click, item]);
  
  const Click = (index,nb,bodyPart)=>{
    setClicked(true)
     setClick(index) 
     setItem(nb)
     setSearch(bodyPart)
   

  }



  return (

    <div className="container-fluid mt-5">
      <div className="row  ">
        <div className="col-12">
          <p className={width <992 ? 'title5resize text-center mt-5 mb-5': 'title5 text-center mt-5   ' }>Awesome Exercices You <br /> Should Know</p>
          <div className="input col-12  d-flex justify-content-center mb-5">
            <input type="text" placeholder='Search Exercices' className='input1 col-lg-8 col-md-8 col-7 p-2' onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} />
            {/* {console.log(search)} */}
              <button className='btn col-lg-1 ms-4 p-2 ' onClick={handlSearch}>Search</button>
 

          </div>
 

          <div className="bodyPartList col-12 mt-5  mb-3  ">
       <div className="  col-12 ms-auto ">
 
  <Carousel data-bs-theme="black" fade interval={time}  >

      <Carousel.Item className='d-flex col-12 justify-content-center mb-5  '   >
        {bodyPartList.slice(0, 3).map((bodyPart, index) => (
          <Card className={(index===click) && (1===item) ?" clicked col-3 ms-2  carousel_item":" notclicked  col-3 ms-2  carousel_item"} key={index}    onClick={()=>Click(index,1,bodyPart)}>
          <Card.Img variant="top" src={badyPart_img} className="img-fluid img mt-3 mb-2"  />
            <Card.Body>
              <Card.Text className="bodyPart_name text-center">{bodyPart}</Card.Text>
            </Card.Body>
          </Card>))}
        </Carousel.Item>
 
      <Carousel.Item className='d-flex col-12 justify-content-center mb-5  '>
      {bodyPartList.slice(4, 7).map((bodyPart, index) => (
          <Card className={(index===click) && (2===item) ?" clicked col-3 ms-2 carousel_item":" notclicked  col-3 ms-2 carousel_item"} key={index}    onClick={()=>Click(index,2,bodyPart)}>
        <Card.Img variant="top" src={badyPart_img} className="img-fluid img mt-3 mb-2" />
        <Card.Body>
          <Card.Text className="bodyPart_name text-center">{bodyPart}</Card.Text>
        </Card.Body>
      </Card>
    ))}
      </Carousel.Item>
 



 
      <Carousel.Item className='d-flex col-12 justify-content-center mb-5  '  >
      {bodyPartList.slice(8, bodyPartList.length).map((bodyPart, index) => (
          <Card className={(index===click) && (3===item) ?" clicked col-3 ms-2 carousel_item":" notclicked  col-3 ms-2 carousel_item"} key={index}    onClick={()=>Click(index,3,bodyPart)}>
        <Card.Img variant="top" src={badyPart_img} className="img-fluid img mt-3 mb-2" />
        <Card.Body>
          <Card.Text className="bodyPart_name text-center">{bodyPart}</Card.Text>
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