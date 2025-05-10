import BackFrame from '@/app/components/back_frame';
import Image from 'next/image';
import Infos from './components/Infos';
import TopCarousel from './components/top_carousel';

export default function TopPage() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/logo/title_logo.svg"
          alt="44th_logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src="/logo/title_date.svg"
          alt="44th_date"
          width={200}
          height={200}
        />
      </div>
      <BackFrame>
        <TopCarousel/>
        <Infos/>

        </BackFrame>
    </div>
  );
}
