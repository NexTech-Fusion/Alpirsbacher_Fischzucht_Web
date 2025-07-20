import { useState, useCallback } from 'react';

export const useHeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  return {
    activeSlide,
    handleSlideChange
  };
}; 