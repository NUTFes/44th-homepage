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
              alt="全体マップ"
              width={2700}
              height={3400}
            />
          </ZoomableImage>

          <ZoomableImage>
            <ImageModal
              src="/images/map/area_2okugai.png"
              alt="全体マップ_謎解き"
              width={2700}
              height={3400}
            />
          </ZoomableImage>

          <ZoomableImage>
            <ImageModal
              src="/images/map/area_3denki.png"
              alt="全体マップ_スタンプラリー"
              width={2700}
              height={3400}
            />
          </ZoomableImage>
                    <ZoomableImage>
            <ImageModal
              src="/images/map/area_4tosyokan.png"
              alt="全体マップ_スタンプラリー"
              width={2700}
              height={3400}
            />
          </ZoomableImage>
                    <ZoomableImage>
            <ImageModal
              src="/images/map/area_5jimutou.png"
              alt="全体マップ_スタンプラリー"
              width={2700}
              height={3400}
            />
          </ZoomableImage>
      </Carousel>
    </div>
  );
};
export default AreaMap;

