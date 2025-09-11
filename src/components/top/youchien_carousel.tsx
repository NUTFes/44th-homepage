import Image from 'next/image';
import Carousel from '@/src/components/common/carousel';

const YouchienCarousel: React.FC = () => {
  return (
    <Carousel autoSlide={false}>
      <Image
        src="/images/Youchien/youchien_carousel/youchien1.png"
        alt="幼稚園WARSコラボ紹介1"
        width={1081}
        height={1350}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/images/Youchien/youchien_carousel/youchien2.png"
        alt="幼稚園WARSコラボ紹介2"
        width={1081}
        height={1350}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/images/Youchien/youchien_carousel/youchien3.png"
        alt="幼稚園WARSコラボ紹介3"
        width={1081}
        height={1350}
        className="w-full h-full shadow_dark object-cover"
      />
      <Image
        src="/images/Youchien/youchien_carousel/youchien4.png"
        alt="幼稚園WARSコラボ紹介4"
        width={1081}
        height={1350}
        className="w-full h-full shadow_dark object-cover"
      />
    </Carousel>
  );
};

export default YouchienCarousel;
