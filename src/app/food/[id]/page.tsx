export const runtime = 'edge';
import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getFoodDataById } from '@/src/lib/food';
import { FoodItem } from '@/src/types/food';
import Image from 'next/image';
import Link from 'next/link';

type FoodDetailProps = {
  params: {
    id: string;
  };
};

export default async function FoodDetailPage({ params }: FoodDetailProps) {
  const item: FoodItem | undefined = getFoodDataById(params.id);

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];
  const imageUrl = item.番号 ? `/images/food/${item.番号}.png` : null;

  return (
    <BackFrame>
      <div className="container mx-auto py-8">
        <ReturnEventButton href="/food" />
        <div className="text-center">
          <TextStyle styleType="section_title">食品販売</TextStyle>
          <p className="text-h2 pt-2 py-4">{item.出店タイトル}</p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={item.出店タイトル || 'image'}
                fill
                className="object-contain"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white">
                <Image
                  src="/icon/44thlogo.svg"
                  alt="logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2">NO IMAGE</p>
              </div>
            )}
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

        <DetailMap location={item.開催場所} />

        <ReturnEventButton size={'large'} href="/food" />

        <div className="border-4 border-yellow-400 p-4 mt-16 max-w-2xl mx-auto">
          <div className="w-full aspect-video bg-black flex items-center justify-center relative">
            {/* Placeholder for sponsor image */}
            <Image
              src="/icon/44thlogo.svg"
              alt="sponsor logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <Link
            href="/sponsoring_corpolate"
            className="block w-full bg-white border-2 border-yellow-400 text-yellow-600 text-center py-3 rounded-md font-bold mt-4"
          >
            {'ご協賛いただいた企業様 >>'}
          </Link>
        </div>
      </div>
    </BackFrame>
  );
}
