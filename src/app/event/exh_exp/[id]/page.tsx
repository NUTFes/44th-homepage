export const runtime = 'edge';
import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import FallbackImage from '@/src/components/common/FallbackImage';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getAllExhExpData, getExhExpDataById } from '@/src/lib/exh_exp';
import { ExhExpItem } from '@/src/types/exh_exp';

type ExhExpDetailProps = {
  params: {
    id: string;
  };
};

export default async function ExhExpDetailPage({ params }: ExhExpDetailProps) {
  const decodedId = decodeURIComponent(params.id);

  let item: ExhExpItem | undefined;
  let itemIndex = 0;

  if (decodedId.startsWith('missing-')) {
    // missing-${index} 形式の場合、インデックスから取得
    itemIndex = parseInt(decodedId.split('-')[1]);
    const allData = getAllExhExpData();
    item = allData[itemIndex];
  } else {
    // 通常のIDの場合、全データから該当アイテムのインデックスを取得
    const allData = getAllExhExpData();
    item = getExhExpDataById(decodedId);
    if (item) {
      itemIndex = allData.findIndex((data) => data.番号 === item?.番号);
    }
  }

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];

  return (
    <BackFrame>
      <div className="container mx-auto py-8">
        <ReturnEventButton href="/event/exh_exp" />
        <div className="text-center">
          <TextStyle styleType="section_title">展示・体験</TextStyle>
          <p className="text-h2 pt-2 py-4 text-font_main">
            {item.出店タイトル}
          </p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            <FallbackImage
              imageDir="exh_exp"
              category="exh_exp"
              sequenceNumber={itemIndex + 1}
              alt={item.出店タイトル || 'image'}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-center my-8 text-body1 text-font_main">
          {item.PR文}
        </p>

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

        <ReturnEventButton size={'large'} href="/event/exh_exp" />
      </div>
    </BackFrame>
  );
}
