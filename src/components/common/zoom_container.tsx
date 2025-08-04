'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useSwipeable } from 'react-swipeable';
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';

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
  const [isZoomedOrPanned, setIsZoomedOrPanned] = useState(false);
  const transformWrapperRef = useRef<ReactZoomPanPinchRef | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(() => {
      if (!isZoomedOrPanned) {
        nextSlide();
      }
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [autoSlide, autoSlideInterval, currentIndex, isZoomedOrPanned]);

  const handleTransformed = (ref: ReactZoomPanPinchRef) => {
    const currentlyTransformed =
      ref.state.scale > 1 ||
      ref.state.positionX !== 0 ||
      ref.state.positionY !== 0;
    setIsZoomedOrPanned(currentlyTransformed);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: false,
    delta: isZoomedOrPanned ? 10000 : 10,
  });

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: height || '400px' }} // height propsを確実に反映
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
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'manipulation',
              overscrollBehavior: 'contain',
              scrollBehavior: 'smooth',
              position: 'relative',
            }}
            className="scrollbar-custom"
          >
            <TransformWrapper
              ref={transformWrapperRef}
              initialScale={2} //初期スケール
              minScale={1}
              maxScale={6}
              wheel={{ step: 0.2 }}
              pinch={{ disabled: false }}
              doubleClick={{ disabled: true }}
              panning={{
                disabled: false,
                velocityDisabled: false,
                lockAxisX: false,
                lockAxisY: false,
              }}
              onTransformed={handleTransformed}
            >
              <TransformComponent>
                <div
                  style={{
                    width: '100%',
                    height: '100%',

                    boxSizing: 'border-box',
                    cursor: isZoomedOrPanned ? 'grab' : 'default',
                    overflow: 'hidden',
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
      ---
      {/* ← Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-dark_back text-white p-2 rounded-sm"
        // disabled={isZoomedOrPanned} は引き続き削除
        style={{ opacity: 1, cursor: 'pointer' }} // ここを変更: opacityとcursorを固定
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-dark_back text-white p-2 rounded-sm"
        // disabled={isZoomedOrPanned} は引き続き削除
        style={{ opacity: 1, cursor: 'pointer' }} // ここを変更: opacityとcursorを固定
      >
        <FaAngleRight />
      </button>
      ---
      {/* ← Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full border border-main ${
              currentIndex === index ? 'bg-main' : 'bg-white_back'
            }`}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}
