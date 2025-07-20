export const runtime = 'edge';
import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import FallbackImage from '@/src/components/common/FallbackImage';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getAllSaleData, getSaleDataById } from '@/src/lib/sale';
import { SaleItem } from '@/src/types/sale';

type SaleDetailProps = {
  params: {
    id: string;
  };
};

export default async function SaleDetailPage({ params }: SaleDetailProps) {
  const decodedId = decodeURIComponent(params.id);

  let item: SaleItem | undefined;
  if (decodedId.startsWith('missing-')) {
    // missing-${index} 形式の場合、インデックスから取得
    const index = parseInt(decodedId.split('-')[1]);
    const allData = getAllSaleData();
    item = allData[index];
  } else {
    item = getSaleDataById(decodedId);
  }

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];

  return (
    <BackFrame>
      <div className="container mx-auto py-8">
        <ReturnEventButton href="/sale" />
        <div className="text-center">
          <TextStyle styleType="section_title">物品販売</TextStyle>
          <p className="text-h2 pt-2 py-4">{item.出店タイトル}</p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            <FallbackImage
              imageDir="sale"
              imageId={item.番号}
              alt={item.出店タイトル || 'image'}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-center my-8 text-body1">{item.PR文}</p>

        {item.メニュー && (
          <div className="text-center my-8">
            <TextStyle styleType="section_title">メニュー</TextStyle>
            <p className="text-body1 mt-2">{item.メニュー}</p>
          </div>
        )}

        <div className="flex justify-center gap-4 my-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 border-red-500 text-red-500 px-4 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Line className="my-8" />

        <DetailMap location={item.開催場所} roomNumber={item.番号} />

        <ReturnEventButton size={'large'} href="/sale" />
      </div>
    </BackFrame>
  );
}
