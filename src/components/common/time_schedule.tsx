import Carousel from '@/src/components/common/carousel';
import Image from 'next/image';
import ImageModal from './image_modal';
import ZoomContainer from './zoom_container';
const TimeSchedule: React.FC = () => {
  return (
    <Carousel autoSlide={false}>
      <ZoomContainer wrapperStyle={{ height: '400px' }}>
        <Image
          src="/images/time_schedule/time_1sunny.png"
          alt="タイムスケジュール1"
          width={1920}
          height={1080}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: 'none',
          }}
        />
      </ZoomContainer>
      <ImageModal
        src="/images/time_schedule/time_1rain.png"
        alt="タイムスケジュール2"
        width={1920}
        height={1080}
      />
      <ImageModal
        src="/images/time_schedule/time_2sunny.png"
        alt="タイムスケジュール3"
        width={1920}
        height={1080}
      />
    </Carousel>
  );
};
export default TimeSchedule;
