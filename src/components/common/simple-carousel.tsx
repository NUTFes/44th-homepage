'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface SimpleCarouselProps {
  children: ReactNode | ReactNode[];
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
  children,
  className,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, autoSlideInterval]);

  return (
    <div className={`relative overflow-hidden ${className}`} {...swipeHandlers}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 relative z-10">
            <div className="flex items-center justify-center h-full w-full">
              <div className="object-contain max-h-full max-w-full overflow-hidden">
                {child}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;