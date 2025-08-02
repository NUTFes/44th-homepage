'use client';
import Carousel from './carousel';
import ImageModal from './image_modal';
import ZoomableImage from './zoomable_image';
const TimeSchedule: React.FC = () => {
  return (
    <div className="text-center flex flex-col gap-y-4">
      <Carousel autoSlide={false}>
        <div className="px-4">
          <p className="font-bold text-font_khaki">
            1日目（8/13）スケジュール・晴れ
          </p>
          <ZoomableImage>
            <ImageModal
              src="/images/time_schedule/time_1sunny.png"
              alt="1日目晴れ"
              width={3413}
              height={1942}
            />
          </ZoomableImage>
        </div>
        <div className="px-4">
          <p className="font-bold text-font_khaki">
            1日目（8/13）スケジュール・雨
          </p>
          <ZoomableImage>
            <ImageModal
              src="/images/time_schedule/time_1rain.png"
              alt="1日目雨"
              width={3413}
              height={1942}
            />
          </ZoomableImage>
        </div>
        <div className="px-4">
          <p className="font-bold text-font_khaki">
            2日目（8/14）スケジュール・晴れ
          </p>
          <ZoomableImage>
            <ImageModal
              src="/images/time_schedule/time_2sunny.png"
              alt="2日目晴れ"
              width={3413}
              height={1942}
            />
          </ZoomableImage>
        </div>
        <div className="px-4">
          <p className="font-bold text-font_khaki">
            2日目（8/14）スケジュール・雨
          </p>
          <ZoomableImage>
            <ImageModal
              src="/images/time_schedule/time_2rain.png"
              alt="2日目雨"
              width={3413}
              height={1942}
            />
          </ZoomableImage>

        </div>
      </Carousel>
                <div className="body2 text-font_khaki">
            <p>ピンチ操作で画像を拡大／縮小、</p>
            <p>タップで全画面表示に切り替わります</p>
          </div>
    </div>
  );
};
export default TimeSchedule;
