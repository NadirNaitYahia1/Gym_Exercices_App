import React from 'react'
import '../styles/similarExercices.css'
const SimilarExercices = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='container-fluid'>
      <div className="row col-12 mt-2">
        <div>
 
    <p className='p1_similar'> Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises</p>

        </div>

    {targetMuscleExercises?.slice(0, 3)?.map((item, index) => (
      <div className="col-4 mt-3">
           <img className='img_vd ms-3' src={item.gifUrl} />
            <p className='p2_similar ms-4 mt-1'>{item.name}</p>
            <p className='p2_similar ms-4 mt-1'>{item.target}</p>


      </div>


))}
      </div>
    </div>
  )
}

export default SimilarExercices