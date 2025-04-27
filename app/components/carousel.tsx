"use client";
import React, { ReactNode, useState } from "react";

interface CaroucelProps {
  children: ReactNode[];
  className?: string;
}
const Carousel: React.FC<CaroucelProps> = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //次へ機能
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };
  //前へ機能
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-dark_back rounded-sm text-white p-1 ml-2"
      >
        ＜
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-dark_back rounded-sm text-white p-1 mr-2"
      >
        ＞
      </button>
      {/*インジケーター*/}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {children.map((_, index) => (
        <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full shadow_dark border border-main ${currentIndex === index ? "bg-main" : "bg-white_back"}`}/>
      ))}
      </div>
    </div>
  );
};
export default Carousel;
