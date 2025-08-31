import Image from 'next/image';
import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import SponsorCarousel from '@/src/components/common/sponser-carousel';
import TextStyle from '@/src/components/common/text_style';
import AllMap from '@/src/components/map/all_map';
import AreaMap from '@/src/components/map/area_map';
import KougiMap from '@/src/components/map/kougi_map';
import MapAttention from '@/src/components/map/map_attention';

export default function MapPage() {
  return (
    <BackFrame>
      <div className="flex flex-col items-center gap-y-8 pt-4 py-8">
        <TextStyle styleType="title">マップ</TextStyle>
        <p className="text-center">
          各マップは、案内所で配布されているパンフレットにも掲載されていますので、ぜひ併せてご利用ください。
        </p>
        <Line className="w-full" />
        <TextStyle styleType="section_title">全体マップ</TextStyle>

        <AllMap />
        <MapAttention />
        <Line className="w-full" />
        <SponsorCarousel />
        <Line className="w-full" />
        <TextStyle styleType="section_title">講義棟内マップ</TextStyle>
        <KougiMap />
        <TextStyle styleType="section_title">屋外エリアマップ</TextStyle>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <TextStyle styleType="body1_khaki">屋外エリア：全体</TextStyle>
          <Image
            src="/images/map/area_common.png"
            alt="屋外エリアマップ_全体"
            height={2794}
            width={2002}
            className="border-2 border-accent"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <TextStyle styleType="body1_khaki">屋外エリア：エリア別</TextStyle>
          <div className="w-[80%] flex justify-center">
            <AreaMap />
          </div>
        </div>

        <Line className="w-full " />
        <SponsorCarousel />
      </div>
    </BackFrame>
  );
}
