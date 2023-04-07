import React, {useState} from 'react';
import {Box} from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExcercise from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const [bodyPart,setBodyPart]= useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExcercise 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
        />
      <Exercises 
      exercises={exercises}
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      
      />
    </Box>
  )
}

export default Home