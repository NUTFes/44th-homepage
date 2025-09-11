import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import FallbackImage from '@/src/components/common/FallbackImage';
import Frame from '@/src/components/common/frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getAllFoodData, getFoodDataById } from '@/src/lib/food';
import { FoodItem } from '@/src/types/food';
import {
  getBorderColorByRoomNumber,
  getColorByRoomNumber,
} from '@/src/utils/colorUtils';

export const runtime = 'edge';

type FoodDetailProps = {
  params: {
    id: string;
  };
};

export default async function FoodDetailPage({ params }: FoodDetailProps) {
  const decodedId = decodeURIComponent(params.id);

  let item: FoodItem | undefined;
  let itemIndex = 0;

  if (decodedId.startsWith('missing-')) {
    // missing-${index} 形式の場合、インデックスから取得
    itemIndex = parseInt(decodedId.split('-')[1]);
    const allData = getAllFoodData();
    item = allData[itemIndex];
  } else {
    // 通常のIDの場合、全データから該当アイテムのインデックスを取得
    const allData = getAllFoodData();
    item = getFoodDataById(decodedId);
    if (item) {
      itemIndex = allData.findIndex((data) => data.番号 === item?.番号);
    }
  }

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];
  const roomNumberColorClass = getColorByRoomNumber(item.番号);
  const roomNumberBorderClass = getBorderColorByRoomNumber(item.番号);

  return (
    <BackFrame>
      <div className="container mx-auto py-8 text-font_main">
        <ReturnEventButton href="/food" />
        <div className="text-center">
          <TextStyle styleType="section_title">食品販売</TextStyle>
          <p className="text-h2 pt-2 py-4">{item.出店タイトル}</p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            <FallbackImage
              imageDir="food"
              category="food"
              sequenceNumber={itemIndex + 1}
              alt={item.出店タイトル || 'image'}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-center my-8 text-body1">{item.PR文}</p>

        {item.メニュー && (
          <Frame>
            <TextStyle styleType="section_title" className="text-center">
              おしながき
            </TextStyle>
            <p className="text-body1 mt-2">{item.メニュー}</p>
          </Frame>
        )}

        <div className="flex  flex-wrap justify-center gap-2 my-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 border-accent text-accent px-4 py-1 rounded-sm bg-base whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        <Line className="my-8" />

        <DetailMap location={item.開催場所} roomNumber={item.番号} />

        <ReturnEventButton size={'large'} href="/food" />
      </div>
    </BackFrame>
  );
}
