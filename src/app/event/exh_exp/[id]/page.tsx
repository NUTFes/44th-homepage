export const runtime = 'edge';
import { getExhExpDataById } from '@/src/lib/exh_exp';
import { ExhExpItem } from '@/src/types/exh_exp';
import Image from 'next/image';
import Link from 'next/link';

type ExhExpDetailProps = {
  params: {
    id: string;
  };
};

export default async function ExhExpDetailPage({ params }: ExhExpDetailProps) {
  const item: ExhExpItem | undefined = getExhExpDataById(params.id);

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];
  const imageUrl = item.番号 ? `/images/exh_exp/${item.番号}.png` : null;

  return (
    <div className="bg-[#F8F5E9] min-h-screen font-serif text-[#432F2F]">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/event/exh_exp"
          className="inline-block bg-gray-400 text-white px-4 py-2 rounded mb-4"
        >
          {'<< 戻る'}
        </Link>

        <div className="text-center my-8">
          <p className="text-2xl">展示・体験</p>
          <h1 className="text-4xl font-bold">{item.出店タイトル}</h1>
        </div>

        <div className="w-full aspect-square flex items-center justify-center relative max-w-lg mx-auto">
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

        <p className="text-center my-8 max-w-2xl mx-auto">{item.PR文}</p>

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

        <hr className="border-t-2 border-red-400 my-8" />

        <div className="border-4 border-yellow-400 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl text-center font-bold mb-4">開催場所</h2>
          <p className="text-xl text-center mb-4">{item.開催場所}</p>
          {/* Map image placeholder */}
          <div className="bg-gray-200 w-full h-64 flex items-center justify-center mb-4">
            地図画像
          </div>
          <Link
            href="/map"
            className="block w-full bg-yellow-500 text-white text-center py-3 rounded-md font-bold"
          >
            マップページへ
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/event"
            className="inline-block bg-gray-400 text-white px-6 py-3 rounded"
          >
            {'<< イベントページへ戻る'}
          </Link>
        </div>

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
    </div>
  );
}
