import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Carousel = ({images,hasText,hasCaption}) => {

  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);


  

  const containerWidth = focusedIndex === 0 ? '85%' : '65%';

  return (
    <div className='w-full h-screen flex justify-start items-center z-10 animate__animated  animate__animated animate_faster'>
        <div className="carousel-container" style={{ overflow: 'hidden', width: containerWidth, height: '500px', display: 'flex' }}>
      <motion.div className="images-wrapper" style={{ gap:"10px", display: 'flex', transition: 'transform 1s ease', transform: `translateX(-${focusedIndex > 0 ? (focusedIndex - 0.5) * 50 : 0}%)` }}>
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            animate={{ opacity: index === focusedIndex ? 1 : 0.6, }}
            transition={{
          x: { type: 'spring', stiffness: 300, damping: 20 }
        }}
        className='flex flex-col'
            style={{
                minWidth: '50%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <img src={image.src} style={{ width: 'auto', height: '80%' }} alt={`Carousel ${index}`} />
            {hasText?<div
            className='font-extrabold text-4xl font-lexend absolute bottom-[3rem] left-[40%] text-white'
              style={{
                transform: 'translateX(-50%)',
                opacity: index === focusedIndex ? 0 : 1,
                transition: 'opacity 1s ease',
              }}
            >
              Event 
            </div>:""}
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Carousel;