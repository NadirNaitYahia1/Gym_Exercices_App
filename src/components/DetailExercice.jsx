import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import '../styles/detail.css'
 
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png'; 


const DetailExercice = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="container-fluid mb-5">
      <div className="row detail col-12 d-flex flex-nowrap mb-5">
    
          <div className='col-lg-6 col-12 mb-5 '>
        
            <img variant="top" src={exerciseDetail.gifUrl} className="img-fluid giturl_detail ms-5  mt-3  align-items-center"  />
 
   
          </div>
          <div className="col-md-6 col-12 ">
            <p className='p-1_detailExercice '>{exerciseDetail.name}</p>
            <p className='p-2_detailExercice  '>Exercises keep you strong.{' '}           <span style={{ textTransform: 'capitalize' }}>{exerciseDetail.name}</span> bup is one
          of the best <br /> exercises to target your {exerciseDetail.target}. It will help you improve your{' '}
          <br /> mood and gain energy.</p>

        {extraDetail?.map((item)=>(
          <div className="col-12 d-flex  align-items-center" key={item.name}>
            <button className='btn_detailExercice  align-items-center'>
              <img src={item.icon} alt="" className='img_detailExercice' />
            </button>
              <p className='p-3_detailExercice ms-4 mt-3 align-items-center '> {item.name} </p>
          </div>
        ))}
        
        </div>
      </div>
    </div>
  )
}

export default DetailExercice




// import React from 'react'
// const Detail = (exerciseDetail) => {
//   return (
 

 
//   )
// }

// export default Detail