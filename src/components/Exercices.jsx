import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/exercices.css'
const Exercices = ( {exercices , setExercices ,search,width} ) => {
  const n =[   
    {bodyPart: 'back', equipment: 'cable', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/Sh6IYw90gxaURZ', id: '0007', name: 'alternate lateral pulldown'} ,
     
    {bodyPart: 'back', equipment: 'body weight', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/-6x11b6BmixQXx', id: '3293', name: 'archer pull up'} ,
     
    {bodyPart: 'back', equipment: 'leverage machine', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/8rOffHRnCbSmsU', id: '0015', name: 'assisted parallel close grip pull-up'} ,
     
    {bodyPart: 'back', equipment: 'leverage machine', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/xppod5cnoGwQbH', id: '0017', name: 'assisted pull-up'} ,
     
    {bodyPart: 'back', equipment: 'leverage machine', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/VaiDaPlPnpOorM', id: '1431', name: 'assisted standing chin-up'} ,
     
    {bodyPart: 'back', equipment: 'leverage machine', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/7Blg23WWqI6477', id: '1432', name: 'assisted standing pull-up'} ,
     
    {bodyPart: 'cardio', equipment: 'body weight', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/KZGNpFpzvxAPPk', id: '3672', name: 'back and forth step'} ,
     
    {bodyPart: 'back', equipment: 'stability ball', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/8m3EBcRdllId3C', id: '1314', name: 'back extension on exercise ball'} ,
     
    {bodyPart: 'back', equipment: 'body weight', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/s78E2x755VOFKj', id: '3297', name: 'back lever'} ,
     
    {bodyPart: 'back', equipment: 'body weight', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/A1NZLQ3Pob-MWJ', id: '1405', name: 'back pec stretch'} ,
     
    {bodyPart: 'upper legs', equipment: 'body weight', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/9rDOTcIHIOuoRx', id: '1473', name: 'backward jump'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/ps59xBq4BnVsCf', id: '0970', name: 'band assisted pull-up'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/wO67xtOqxnD-P3', id: '0974', name: 'band close-grip pulldown'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/amHNzNvwEtD4C9', id: '3117', name: 'band fixed back close grip pulldown'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/75cCc9iHtOPvRV', id: '3116', name: 'band fixed back underhand pulldown'} ,
    
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/xhyFJTqK1kRAGg', id: '0983', name: 'band kneeling one arm pulldown'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/9aOXJYabvi7EWq', id: '0988', name: 'band one arm standing low row'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/6jh8p75EzSjzbS', id: '0990', name: 'band one arm twisting seated row'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/JdjsnnuVnl8Zoc', id: '1018', name: 'band shrug'} ,
     
    {bodyPart: 'upper legs', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/hYju5OLzb3LmxA', id: '1023', name: 'band straight back stiff leg deadlift'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/3EobknrkFsoEUk', id: '1010', name: 'band straight leg deadlift'} ,
     
    {bodyPart: 'back', equipment: 'band', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/eej1cZabqCevIu', id: '1013', name: 'band underhand pulldown'} ,
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/F17rWEEDLPO3fw', id: '1316', name: 'barbell bent arm pullover'} ,
     
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/SmPQxCCYyZzfmh', id: '0027', name: 'barbell bent over row'} ,
     
     
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/PFebPf89nwxzFz', id: '0034', name: 'barbell decline bent arm pullover'} ,
     
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/yIGkneEyQjxa1p', id: '0037', name: 'barbell decline wide-grip pullover'} ,
     
    {bodyPart: 'upper legs', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/W86rGUNKG4ylQk', id: '1461', name: 'barbell full squat (back pov)'} ,
     
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/T5VAiL90TdisJI', id: '0049', name: 'barbell incline row'} ,
     
    {bodyPart: 'upper arms', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/I9zaJmx6589kn5', id: '1720', name: 'barbell lying back of the head tricep extension'} ,
     
    {bodyPart: 'back', equipment: 'barbell', gifUrl: 'https://edb-4rme8.ondigitalocean.app/image/dVPvhYCgeL4mpd', id: '0064', name: 'barbell one arm bent over row'} 
    
    ]
 
  return (
    <div className='container-fluid'>
      <div className="row exercices col-12 d-flex mt-2">
{console.log('exercices : ',exercices)}
       
<div className="exercices_results col-12 ms-">
  <p className={width ? 'title5resize text-center mt-5': 'title6 text-center mt-5  d-flex ms-5 ' }>Showing Results</p>
</div>


        {n.map((exercice, index) => (
         
            <Card   key={index} className="col-lg-3 col-md-3 col-12 mb-5 card_border  ms-5 mt-4">
            <Card.Img variant="top" src={exercice.gifUrl} className="img-fluid img_exercices justify-content-center mt-4"  />
              <Card.Body  className='mt-3'>

                <div className="text flex ">
                <button className=" btn_exercices1 text-center ms-2">{exercice.bodyPart}</button>
                <button className='btn_exercices2 text-center ms-5'>{exercice.target}</button>
                </div>
                <Card.Text className="bodyPart_name text-center mt-4">{exercice.name}</Card.Text>
          


              </Card.Body>
            </Card>
  

          
))}
{(n.length>9) &&
<Pagination className='d-flex justify-content-center'>
{/* <Pagination.First />
<Pagination.Prev />
<Pagination.Item>{1}</Pagination.Item> */}

{Array.from({ length: (n.length /9) }).map((_, index) => (
  <Pagination.Item  >
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




  

