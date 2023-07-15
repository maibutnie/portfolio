import React, { useState, useEffect } from 'react';
import norm from './norm.png';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';

import './Photostyle.css';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [norm, one, two, three, four];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='animation'>
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />
    </div>
  );
};

export default ImageSlider;
