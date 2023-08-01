import React from 'react';
import '../styles/exerciceVd.css';
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import Loader from './Loader';

const ExerciceVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <p className="p1_vd mb-3">Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos</p>
        </div>

        {exerciseVideos?.length === 0 ? <Loader /> : null}

        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img className="img_vd" src={item.video.thumbnails[0].url} alt={item.video.title} />
              <div className="ms-3">
                <p className="p2_vd">{item.video.title}</p>
                <p className="p3_vd">{item.video.channelName}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciceVideos;
