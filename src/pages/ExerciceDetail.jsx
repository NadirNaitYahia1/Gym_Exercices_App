import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.css';
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import Detail from '../components/DetailExercice';
import ExerciceVideos from '../components/ExerciceVideos';
import SimilarExercices from '../components/SimilarExercices';


const ExerciceDetail = () => {
  const {id} = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  
  useEffect(() => {
    const fechDtata = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      console.log('exercices detail data :',exerciseDetailData);

      // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      // setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      // setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      // setEquipmentExercises(equimentExercisesData);
      
    }

fechDtata(); 

  }, [id]);
  
  
  
  
  return (
 <div className="col-12">

   <Detail   exerciseDetail={exerciseDetail}/>
    {/* <ExerciceVideos/>
   <SimilarExercices/> */}


 </div>
    
  
 
  )
}

export default ExerciceDetail