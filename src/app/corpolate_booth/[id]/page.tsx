export const runtime = 'edge';
import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import FallbackImage from '@/src/components/common/FallbackImage';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getCorpolateBoothDataById } from '@/src/lib/corpolate_booth';
import { CorpolateBoothItem } from '@/src/types/corpolate_booth';
import Image from 'next/image';
import Link from 'next/link';

type CorpolateBoothDetailProps = {
  params: {
    id: string;
  };
};

export default async function CorpolateBoothDetailPage({
  params,
}: CorpolateBoothDetailProps) {
  const item: CorpolateBoothItem | undefined = getCorpolateBoothDataById(
    params.id
  );

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  return (
    <BackFrame>
      <div className="container mx-auto py-8">
        <ReturnEventButton href="/corpolate_booth" />
        <div className="text-center">
          <TextStyle styleType="section_title">企業ブース</TextStyle>
          <p className="text-h2 pt-2 py-4">{item.出店タイトル}</p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            <FallbackImage
              imageDir="corpolate_booth"
              imageId={item.番号}
              alt={item.出店タイトル || 'image'}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-center my-8 text-body1">{item.PR文}</p>

        {item.企業紹介文 && (
          <div className="text-center my-8">
            <TextStyle styleType="section_title">どんな企業？</TextStyle>
            <p className="text-body1 mt-2">{item.企業紹介文}</p>
          </div>
        )}

        {item.企業HPのURL && (
          <div className="my-8 max-w-2xl mx-auto">
            <div className="border-4 border-yellow-400 p-6 bg-yellow-50">
              <TextStyle styleType="section_title">企業HPURL</TextStyle>
              <div className="mt-4 text-center">
                <Link
                  href={item.企業HPのURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600 transition-colors font-bold text-lg"
                >
                  企業ホームページを見る →
                </Link>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                詳しい企業情報は公式ホームページをご覧ください
              </p>
            </div>
          </div>
        )}

        <Line className="my-8" />

        <DetailMap location={item.開催場所} />

        <ReturnEventButton size={'large'} href="/corpolate_booth" />

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
