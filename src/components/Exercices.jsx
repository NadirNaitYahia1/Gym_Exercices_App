import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/exercices.css'
import {Link} from 'react-router-dom';  

import img1 from '../assets/images/test.svg'
const Exercices = ( {exercices , setExercices ,search,width ,first , end , setFirst , setEnd, clicked, setClicked} ) => {


    const [active, setActive] = useState(1);
    const [taille , setTaille] = useState(0);
  

    const click = (index) => () => {
      setClicked(true);
      setFirst(index);
      setEnd(index+9);
      setActive(index);
    }


    
  useEffect(() => {
   if (exercices.length/9 < 10) {
    setTaille((exercices.length/9))
   }
   else{
    setTaille(10)
   }
  }, [exercices]);
 
  return (
    <div className='container-fluid'>
      <div className="row exercices col-12 d-flex ">
{console.log('exercices : ',exercices)}
       
<div className="exercices_results col-12   ">
  <p className={width<992 ? 'title5resize text-center  ': 'title6 text-center mt-5  d-flex ms-5' }>Showing Results</p>
</div>


{console.log('clicked', clicked)}
  
{(exercices.length === 0) && clicked ? 

 
<div className="loading d-flex mt-5 justify-content-center mb-4">
<div class="lds-roller"><div></div><div></div><div></div><div></div></div>

</div>
 
    : ''
 }


        {exercices.slice(first, end).map((exercice, index) => (
           width <992 ? window.scrollTo({top:1300,behavior:'smooth'}): window.scrollTo({top:1250,behavior:'smooth'}),
           
           
              <Link className='link' className={width ? " cards_item col-lg-3 col-md-3 col-11 mb-5    ms-4 mt-4":"cards_item col-lg-3 col-md-3 col-12 mb-5 card_border  ms-4 mt-4"}  to={`/exercise/${exercice.id}`} >
            <Card   key={index}  className='card_border' >
            <Card.Img variant="top" src={exercice.gifUrl} className="img-fluid img_exercices justify-content-center mt-4"  />
              <Card.Body  className='mt-3'>

                <div className="text flex ">
                <button className=" btn_exercices1 text-center ms-2">{exercice.bodyPart}</button>
                <button className='btn_exercices2 text-center ms-5'>{exercice.target}</button>
                </div>
                <Card.Text className="bodyPart_name   mt-4 ">{exercice.name}</Card.Text>
          


              </Card.Body>
            </Card>
          </Link>
  

))}
 





{(exercices.length>9) &&
<Pagination className={width ?  '  d-flex ms-4  col-12  mb-5 mt-2':' d-flex justify-content-center col-12 mb-5 mt-2'}>
{/* <Pagination.First />
<Pagination.Prev />
<Pagination.Item>{1}</Pagination.Item> */}

{Array.from({ length: (taille) }).map((_, index) => (
  <Pagination.Item onClick={click(index+1)}  className={(active===index+1) ? 'active  ' :'none  '} >
    {index + 1}
  </Pagination.Item>
))}
</Pagination>

}

        </div>


      </div>
    
  )
}

export default Exercices




  

