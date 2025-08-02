import Image from 'next/image';
import ZoomCarousel from './zoom_container';
//image_modalでクリックで全画面表示させたかったけどzoom_container(枠内で動かせるやつ)との組み合わせが上手くいきませんでした...
const TimeSchedule: React.FC = () => {
  return (
    <ZoomCarousel>
      <Image
        src="/images/time_schedule/time_1sunny.png"
        alt="晴れ１日目"
        width={1920}
        height={1080}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          display: 'block',
          objectFit: 'contain',
        }}
      />
      <Image
        src="/images/time_schedule/time_1rain.png"
        alt="雨1日目"
        width={1920}
        height={1080}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          display: 'block',
          objectFit: 'contain',
        }}
      />
      <Image
        src="/images/time_schedule/time_2sunny.png"
        alt="晴れ2日目"
        width={1920}
        height={1080}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          display: 'block',
          objectFit: 'contain',
        }}
      />
      <Image
        src="/images/time_schedule/time_2rain.png"
        alt="雨2日目"
        width={1920}
        height={1080}
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </ZoomCarousel>
  );
};
export default TimeSchedule;
