import Carousel from '@/app/components/carousel';

const TopCarousel: React.FC = () => {
  return (
    <Carousel autoSlide={true}>
      <img
        src="/carousel_top/top_5_1.jpg"
        alt="昨年度の様子_1"
        className="w-full h-full  shadow_dark"
      />
      <img
        src="/carousel_top/top_5_2.jpg"
        alt="昨年度の様子_2"
        className="w-full h-full shadow_dark"
      />
      <img
        src="/carousel_top/top_5_3.jpg"
        alt="昨年度の様子_3"
        className="w-full h-full shadow_dark"
      />
      <img
        src="/carousel_top/top_5_4.jpg"
        alt="昨年度の様子_4"
        className="w-full h-full shadow_dark"
      />
      <img
        src="/carousel_top/top_5_5.jpg"
        alt="昨年度の様子_5"
        className="w-full h-full shadow_dark"
      />
    </Carousel>
  );
};

export default TopCarousel;
