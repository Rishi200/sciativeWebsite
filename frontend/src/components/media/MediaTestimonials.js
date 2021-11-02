import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import data from '../../data/media/mediatestimonials';
import MediaPeople from './MediaPeople';

const MediaTestimonials = () => {
  const [people] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0){
      setIndex(lastIndex);
    }
    if (index > lastIndex){
      setIndex(0);
    }
  },[index,people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1);
    },5000);
    return () => clearInterval(slider);
  },[index]);

  return (
    <div className="mont-font" style={{height:'45em',paddingTop:'10em',textAlign:'center'}}>
        <Container>
            <h3 className="font-600">Testimonials</h3>
            <MediaPeople people={people} />
        </Container>
    </div>
  );
}

export default MediaTestimonials;
