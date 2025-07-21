'use client';

import BackFrame from '@/src/components/common/back_frame';
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/corpolate_booth/CellContent';
import { getAllCorpolateBoothData } from '@/src/lib/corpolate_booth';
import Link from 'next/link';
import Line from '@/src/components/common/line';

export default function CorpolateBoothPage() {
  const allData = getAllCorpolateBoothData();

  return (
    <div>
      <div>
        <BackFrame>
          <div className="container px-4">
            <div className="text-center py-8">
              <TextStyle styleType="title">企業ブース</TextStyle>
            </div>
            <div className="py-4">
              <Line className="accenat" />
            </div>

            <main
              className="grid grid-cols-2 gap-8 relative"
              style={{
                minHeight: '600px',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
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
                      <CellContent
                        imageId={item.番号}
                        title={item.出店タイトル}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </BackFrame>
      </div>
    </div>
  );
}
