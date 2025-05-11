import Carousel from '@/app/components/carousel';
import Image from 'next/image';

const TopCarousel: React.FC = () => {
  return (
    <Carousel autoSlide={true}>
      <Image
        src="/carousel_top/top_5_1.jpg"
        alt="昨年度の様子_1"
        width={1920} // 必要に応じて画像の幅を指定
        height={1080} // 必要に応じて画像の高さを指定
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/carousel_top/top_5_2.jpg"
        alt="昨年度の様子_2"
        width={1920}
        height={1080}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/carousel_top/top_5_3.jpg"
        alt="昨年度の様子_3"
        width={1920}
        height={1080}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/carousel_top/top_5_4.jpg"
        alt="昨年度の様子_4"
        width={1920}
        height={1080}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/carousel_top/top_5_5.jpg"
        alt="昨年度の様子_5"
        width={1920}
        height={1080}
        className="w-full h-full shadow_dark object-cover"
      />
    </Carousel>
  );
};

export default TopCarousel;
