"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

interface CaroucelProps {
  children: ReactNode | ReactNode[]; //単一の要素|複数の要素
  className?: string;
  autoSlide?: boolean; //自動スライドのオンオフ(デフォルトはfalse)
  autoSlideInterval?: number; //自動スライドの間隔(ms)
}
const Carousel: React.FC<CaroucelProps> = ({
  children,
  className,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  //次へ機能
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
  };
  //前へ機能
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  //スマホのスワイプ
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });
  //自動スライド
  useEffect(() => {
    if (!autoSlide) return; //falseの場合は何もしない
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval); //スライドする→指定された時間待つ
    return () => clearInterval(slideInterval);
  }, [nextSlide,currentIndex, autoSlide, autoSlideInterval]);
  return (
    <div className={`relative overflow-hidden ${className}`} {...swipeHandlers}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 relative z-10">
            <div className="flex items-center justify-center h-full w-full">
              <div className="object-contain max-h-full max-w-full overflow-hidden">{child}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-dark_back rounded-sm text-white p-1 py-2 ml-2 z-20"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-dark_back rounded-sm text-white p-1 py-2 mr-2 z-20"
      >
        <FaAngleRight />
      </button>
      {/*インジケーター*/}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full shadow_dark border border-main ${
              currentIndex === index ? "bg-main" : "bg-white_back"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
