'use client';
import Image from 'next/image';
import Carousel from './carousel';
import ZoomableImage from './zoomable_image';
import ImageModal from './image_modal';
const TimeSchedule: React.FC = () => {
  return (
   <div>
    <div className="body2 text-center text-font_khaki"><p>ピンチ操作で画像を拡大／縮小、</p><p>タップで全画面表示に切り替わります</p></div>
   <div className="border-2 border-main rounded-sm">
   <Carousel autoSlide={false} >
<ZoomableImage>
  
  <ImageModal src="/images/time_schedule/time_1sunny.png" alt="1日目晴れ" width={3413} height={1942}/>
</ZoomableImage>
<ZoomableImage>
  <ImageModal src="/images/time_schedule/time_1rain.png" alt="1日目雨" width={3413} height={1942}/>
</ZoomableImage>
<ZoomableImage>
  <ImageModal src="/images/time_schedule/time_2sunny.png" alt="2日目晴れ" width={3413} height={1942}/>
</ZoomableImage>
<ZoomableImage>
  <ImageModal src="/images/time_schedule/time_2rain.png" alt="2日目雨" width={3413} height={1942}/>
</ZoomableImage>
</Carousel>
</div>
</div>
  );
};
export default TimeSchedule;
