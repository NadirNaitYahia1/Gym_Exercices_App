import React from 'react'
import '../styles/exerciceVd.css';

const ExerciceVideos = ({ exerciseVideos, name }) => {
  return (
  <div className="container-fluid">
    <div className="row col-12 mt-3">
     <div className="parag col-12">
      <p className='p1_vd ms-2 mb-3 col-12 '>Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span>{' '}exercise videos</p>
     </div>

     <div className="Vds d-flex col-12 mb-5 mt-2 justify-content-center">
      
   
   {exerciseVideos?.slice(0, 3)?.map((item, index) => (
      <div className="vd1 col-md-4 col-12 ">
            <a
      key={index}
      className="exercise-video"
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img className='img_vd ms-3' src={item.video.thumbnails[0].url} alt={item.video.title} />
      
 
          <div className='ms-3' >
            <p className='p2_vd'>  {item.video.title}</p>
            <p className='p3_vd'>    {item.video.channelName}</p>
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