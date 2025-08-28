'use client';
import Carousel from '../common/carousel';
import ImageModal from '../common/image_modal';
import ZoomableImage from '../common/zoomable_image';
const KougiMap: React.FC = () => {
  return (
    <div className="text-center flex flex-col gap-y-4">
      <Carousel autoSlide={false}>
          <ZoomableImage>
            <ImageModal
              src="/images/map/kougi_1f.png"
              alt="講義棟マップ1F"
              width={2794}
              height={2002}
            />
          </ZoomableImage>

          <ZoomableImage>
            <ImageModal
              src="/images/map/kougi_2f.png"
              alt="講義棟マップ2F"
              width={2794}
              height={2002}
            />
          </ZoomableImage>

          <ZoomableImage>
            <ImageModal
              src="/images/map/kougi_3f.png"
              alt="講義棟マップ3F"
              width={2794}
              height={2002}
            />
          </ZoomableImage>
      </Carousel>

    </div>
  );
};
export default KougiMap;