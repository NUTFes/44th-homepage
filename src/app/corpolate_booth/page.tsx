'use client';

import CellContent from '@/src/components/corpolate_booth/CellContent';
import { getAllCorpolateBoothData } from '@/src/lib/corpolate_booth';
import Link from 'next/link';

export default function CorpolateBoothPage() {
  const allData = getAllCorpolateBoothData();

  return (
    <div className="bg-[#F8F5E9] min-h-screen font-serif text-[#432F2F]">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/event"
          className="inline-block bg-gray-400 text-white px-4 py-2 rounded mb-4"
        >
          {'<< 戻る'}
        </Link>

        <h1 className="text-4xl text-center font-bold my-8">企業ブース</h1>

        <hr className="border-t-2 border-red-400 mb-8" />

        <main
          className="grid grid-cols-2 gap-8 relative"
          style={{
            minHeight: '600px',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/assets/illust_people_1.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '300px 400px',
              zIndex: 0,
            }}
          />
          <div className="relative z-10 contents">
            {allData.map((item) => (
              <div key={item.番号} className="text-center">
                <Link href={`/corpolate_booth/${item.番号 || ''}`}>
                  <CellContent imageId={item.番号} title={item.出店タイトル} />
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
