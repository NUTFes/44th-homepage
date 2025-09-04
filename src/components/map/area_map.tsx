'use client';

import Carousel from '../common/carousel';
import ImageModal from '../common/image_modal';
import ZoomableImage from '../common/zoomable_image';

const AreaMap: React.FC = () => {
  return (
    <div className="text-center flex flex-col gap-y-4">
      <Carousel autoSlide={false}>
        <ZoomableImage>
          <ImageModal
            src="/images/map/area_1kikai.png"
            alt="機械棟エリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>

        <ZoomableImage>
          <ImageModal
            src="/images/map/area_2okugai.png"
            alt="屋外ステージエリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>

        <ZoomableImage>
          <ImageModal
            src="/images/map/area_3denki.png"
            alt="電気棟エリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>
        <ZoomableImage>
          <ImageModal
            src="/images/map/area_4tosyokan.png"
            alt="図書館棟エリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>
        <ZoomableImage>
          <ImageModal
            src="/images/map/area_5jimutou.png"
            alt="事務棟エリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>

        <ZoomableImage>
          <ImageModal
            src="/images/map/area_6kitchin.png"
            alt="キッチンカーエリア"
            width={2700}
            height={3400}
          />
        </ZoomableImage>
      </Carousel>
    </div>
  );
};
export default AreaMap;
