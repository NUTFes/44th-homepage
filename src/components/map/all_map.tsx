'use client';

import Carousel from '../common/carousel';
import ImageModal from '../common/image_modal';
import ZoomableImage from '../common/zoomable_image';

const AllMap: React.FC = () => {
  return (
    <div className="text-center flex flex-col gap-y-4">
      <Carousel autoSlide={false}>
        <ZoomableImage>
          <ImageModal
            src="/images/map/all_common.png"
            alt="全体マップ"
            width={2794}
            height={2002}
          />
        </ZoomableImage>

        <ZoomableImage>
          <ImageModal
            src="/images/map/all_nazotoki.png"
            alt="全体マップ_謎解き"
            width={2794}
            height={1977}
          />
        </ZoomableImage>

        <ZoomableImage>
          <ImageModal
            src="/images/map/all_stamp_rally.png"
            alt="全体マップ_スタンプラリー"
            width={2794}
            height={1977}
          />
        </ZoomableImage>
      </Carousel>
    </div>
  );
};
export default AllMap;
