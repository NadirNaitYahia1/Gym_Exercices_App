import React from 'react'
import '../styles/similarExercices.css'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import Loader from './Loader';
const SimilarExercices = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='container-fluid'>
      <div className="row col-12 mt-2 d-flex">
        <div>
 
    <p className='p1_similar'> Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises</p>

        </div>


        {targetMuscleExercises?.length === 0 ? <Loader /> : null}
    {targetMuscleExercises?.slice(0, 3)?.map((item, index) => (
      <div className="col-md-4 col-12 mt-3 justify-content-center">
           <div>
              <img className='img_vd ms-3' src={item.gifUrl} />
           </div>
           <div>
              <p className='p2_similar ms-4 mt-1'>{item.name}</p>
              <p className='p2_similar ms-4 mt-1 mb-5'>{item.target}</p>
           </div>
         


      </div>





))}
<div>


<p className='p1_similar'> Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises</p>

</div>


{ equipmentExercises?.length === 0 ? <Loader /> : null}
{ equipmentExercises?.slice(0, 3)?.map((item, index) => (
<div className="col-md-4 col-12 mt-3 mb-5">
   <img className='img_vd ms-3' src={item.gifUrl} />
    <p className='p2_similar ms-4 mt-1'>{item.name}</p>
    <p className='p2_similar ms-4 mt-1'>{item.equipment}</p>


</div>





))}


  
</div>






      </div>
      
    
  )
}

export default SimilarExercices