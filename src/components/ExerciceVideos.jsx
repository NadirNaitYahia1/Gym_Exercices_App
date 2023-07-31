import React from 'react'
import '../styles/exerciceVd.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import Loader from './Loader';

const ExerciceVideos = ({ exerciseVideos, name }) => {
  return (
  <div className="container-fluid">
    <div className="row col-12 mt-3  mb-4">

     <div className="parag col-12 mt-5  ">
      <p className='p1_vd ms-2 mb-3   '>Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span>{' '}exercise videos</p>
     </div>

     <div className="Vds col-12 mb-5 mt-2 ms-auto">
      
  {
    exerciseVideos?.length === 0 ? <Loader /> : null
  }
   {exerciseVideos?.slice(0, 3)?.map((item, index) => (
      <div className="vd1  col-md-4 col-12 ">
            <a
      key={index}
      className="exercise-video"
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img className='img_vd ms-3' src={item.video.thumbnails[0].url} alt={item.video.title} />
      
 
          <div className='ms-3' >
            <p className='p2_vd'> {item.video.title}</p>
            <p className='p3_vd '> {item.video.channelName}</p>
          </div>
            
    </a>
      </div>
    

  ))}
      
      
      
      </div>





    </div>

  </div>
  )
}

export default ExerciceVideos