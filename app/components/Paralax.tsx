'use client'
import React, { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode
}

const ParallaxComponent = ({children}:Props) => {
  // State to store the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Refs for the elements to animate
  const parallaxElementRef = useRef(null);
  
  // Effect to update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxEffect = () => {
    if (parallaxElementRef.current) {
      let parallaxValue = scrollPosition * 1; // Adjust the multiplier for the desired effect
      parallaxValue = Math.max(0, parallaxValue); // Ensure parallaxValue is never negative
      parallaxElementRef.current.style.transform = `translateY(-${parallaxValue}px)`;
    }
  };


  // Call the parallaxEffect function whenever scrollPosition changes
  useEffect(() => {
    parallaxEffect();
  }, [scrollPosition]);

  return (
      <div 
        ref={parallaxElementRef} 
        style={{ position: 'relative', zIndex: 1 }}
      >
        {children}
      </div>
  );
};

export default ParallaxComponent;
