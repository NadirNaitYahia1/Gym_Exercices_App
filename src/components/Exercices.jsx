import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/exercices.css'
const Exercices = ( {exercices , setExercices ,search} ) => {
  let n =[   'https://edb-4rme8.ondigitalocean.app/image/3s2-dKrSPFN5cD', 
   'https://edb-4rme8.ondigitalocean.app/image/neCUULQEoQIW-w',
   'https://edb-4rme8.ondigitalocean.app/image/-kdb3x6Zcl888a', 
   'https://edb-4rme8.ondigitalocean.app/image/bmhBlN-Tb7qru-', 
   'https://edb-4rme8.ondigitalocean.app/image/2Tm7Sft2k22LSy', 
   'https://edb-4rme8.ondigitalocean.app/image/FFCmQUQRrhqL-P',   
   'https://edb-4rme8.ondigitalocean.app/image/80F1YB0pSeA1CN', 
   'https://edb-4rme8.ondigitalocean.app/image/MNih-OgcF0ETQ4',  
   'https://edb-4rme8.ondigitalocean.app/image/NrUsBlifkHwP6k',  
   'https://edb-4rme8.ondigitalocean.app/image/1EcgTD8ebD3sto']
 
  return (
    <div className='container-fluid'>
      <div className="row col-12 d-flex mt-5">
{console.log('exercices : ',exercices)}
       
        


        {exercices.map((exercice, index) => (
         
            <Card   key={index} className="col-4 mb-5 ">
            <Card.Img variant="top" src={exercice.gifUrl} className="img-fluid img_exercices justify-content-center"  />
              <Card.Body>
                <Card.Text className="bodyPart_name text-center">bodyPart:{exercice.bodyPart}</Card.Text>
              </Card.Body>
            </Card>
  
          
))}
         

        </div>


      </div>
    
  )
}

export default Exercices




  

