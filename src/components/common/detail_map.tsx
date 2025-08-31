'use client';

import Image from 'next/image';
import AreaMap from '../map/area_map';
import KougiMap from '../map/kougi_map'; // ← 追加
import Frame from './frame';
import LinkButton from './link_button';
import TextStyle from './text_style';

type DetailMapProps = {
  location: string;
  roomNumber?: string;
};

const COMMON_STAGE_LABEL1 =
  '屋外ステージ(16:45~17:15) 体育館ステージ(17:30~20:00)';
const COMMON_STAGE_LABEL2 = '体育館ステージ(1日目)、屋外ステージ（２日目）';
const COMMON_STAGE_LABEL3 = '屋外ステージ 横テント';

const locationImageMap: Record<string, string> = {
  講義棟エリア: '/images/map/area_5jimutou.png',
  事務棟エリア: '/images/map/area_5jimutou.png',
  図書館エリア: '/images/map/area_4tosyokan.png',
  電気棟エリア: '/images/map/area_3denki.png',
  電気棟エリアC3: '/images/map/area_3denki.png',
  機械建設棟エリア: '/images/map/area_1kikai.png',
  屋外ステージエリア: '/images/map/area_2okugai.png',
  キッチンカーエリア: '/images/map/area_6kitchin.png',
  屋外ステージ: '/images/map/area_2okugai.png',
  [COMMON_STAGE_LABEL1]: '/images/map/area_common.png',
  [COMMON_STAGE_LABEL2]: '/images/map/area_common.png',
  [COMMON_STAGE_LABEL3]: '/images/map/area_2okugai.png',
};

const defaultImage = '/images/map/all_common.png';

const DetailMap = ({ location, roomNumber }: DetailMapProps) => {
  const imageSrc = locationImageMap[location] ?? defaultImage;

  const isExactLectureArea = location === '講義棟エリア';
  const isLectureRelated = location.includes('講義棟');

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

        <div className="flex items-center justify-center mb-4 bg-gray-200">
          {isExactLectureArea ? (
            <AreaMap />
          ) : isLectureRelated ? (
            <KougiMap />
          ) : (
            <Image
              src={imageSrc}
              alt={`${location}の地図`}
              width={1000}
              height={1000}
            />
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
