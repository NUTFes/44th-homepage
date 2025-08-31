'use client';

import Image from 'next/image';
import Frame from './frame';
import LinkButton from './link_button';
import TextStyle from './text_style';
import KougiMap from '../map/kougi_map';

type DetailMapProps = {
  location: string;
  roomNumber?: string;
};

const locationImageMap: Record<string, string> = {
  講義棟エリア: '/images/map/area_5jimutou.png',
  事務棟エリア: '/images/map/area_5jimutou.png',
  図書館エリア: '/images/map/area_4tosyokan.png',
  電気棟エリア: '/images/map/area_3denki.png',
  機械建設棟エリア: '/images/map/area_1kikai.png',
  屋外ステージエリア: '/images/map/area_2okugai.png',
  キッチンカーエリア: '/images/map/area_6kitchin.png',
};

const DetailMap = ({ location, roomNumber }: DetailMapProps) => {
  const imageSrc = locationImageMap[location];

  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          開催場所
        </TextStyle>
        <TextStyle styleType="body1" className="text-center">
          {location}
        </TextStyle>
        {roomNumber && (
          <TextStyle styleType="body1" className="text-center">
            {roomNumber}
          </TextStyle>
        )}

        <div className="mb-4">
          {location === '講義棟エリア' ? (
            <KougiMap />
          ) : imageSrc ? (
            <Image src={imageSrc} alt={`${location}の地図`} width={1000} height={1000} />
          ) : (
            <span>coming soon</span>
          )}
        </div>

        <LinkButton href="/map" className="bg-second">
          <TextStyle styleType="body1" className="text-white">
            マップページへ
          </TextStyle>
        </LinkButton>
      </Frame>
    </div>
  );
};

export default DetailMap;