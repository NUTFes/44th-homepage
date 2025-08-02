'use client';

import { useSwipeable } from 'react-swipeable';
import { ReactNode, useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import React from 'react';

type ZoomCarouselProps = {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  height?: string;
};

export default function ZoomCarousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  height = '400px',
}: ZoomCarouselProps) {
  const slides = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [autoSlide, autoSlideInterval, currentIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }}
      {...swipeHandlers}
    >
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              flexShrink: 0,
              height,
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'manipulation',
              overscrollBehavior: 'contain',
              scrollBehavior: 'smooth',
              position: 'relative',
            }}
            className="scrollbar-custom"
          >
            <TransformWrapper
              initialScale={1.1} // ← 少し拡大してパン操作を有効化
              minScale={1}
              maxScale={5}
              wheel={{ step: 0.2 }}
              pinch={{ disabled: false }}
              doubleClick={{ disabled: true }}
              panning={{
                disabled: false,
                velocityDisabled: false,
                lockAxisX: false,
                lockAxisY: false,
              }}
            >
              <TransformComponent>
                <div
                  style={{
                    width: 'max-content',
                    height: 'max-content',
                    padding: '1rem',
                    boxSizing: 'border-box',
                    cursor: 'grab',
                  }}
                  className="grabbable"
                >
                  {slide}
                </div>
              </TransformComponent>
            </TransformWrapper>
          </div>
        ))}
      </div>

      {/* ← Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-dark_back text-white p-2 rounded-sm"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-dark_back text-white p-2 rounded-sm"
      >
        <FaAngleRight />
      </button>

      {/* ← Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full border border-main ${
              currentIndex === index ? 'bg-main' : 'bg-white_back'
            }`}
          />
        ))}
      </div>
    </div>
  );
}