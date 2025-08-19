'use client';

import BackFrame from '@/src/components/common/back_frame';
import IdFrame from '@/src/components/common/id_frame';
import Line from '@/src/components/common/line';
import SponsorCarousel from '@/src/components/common/sponser-carousel'; // 追加
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/corpolate_booth/CellContent';
import { getAllCorpolateBoothData } from '@/src/lib/corpolate_booth';
import Link from 'next/link';

// 🔧 配列をチャンクに分割する関数
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function CorpolateBoothPage() {
  const allData = getAllCorpolateBoothData();

  return (
    <div className="text-font_main">
      <div>
        <BackFrame>
          <div className="container px-4">
            <div className="text-center py-8">
              <TextStyle styleType="title">企業ブース</TextStyle>
            </div>
            <p className="text-center font-bold">
              開催場所：AL１講義室・eggルーム
            </p>

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
                {chunkArray(allData, 8).map((chunk, chunkIndex) => (
                  <div key={`chunk-${chunkIndex}`} className="contents">
                    {chunk.map((item, index) => {
                      const itemId =
                        item.番号 || `missing-${chunkIndex}-${index}`;
                      // 元のデータでのインデックスを計算
                      const originalIndex = allData.findIndex(
                        (data) => data === item
                      );
                      const sequenceNumber =
                        originalIndex >= 0 ? originalIndex + 1 : undefined;

                      return (
                        <div key={itemId} className="text-center">
                          <IdFrame>
                            <Link
                              href={`/corpolate_booth/${encodeURIComponent(
                                itemId
                              )}`}
                            >
                              <CellContent
                                imageId={item.番号}
                                title={item.出店タイトル}
                                sequenceNumber={sequenceNumber}
                              />
                            </Link>
                          </IdFrame>
                        </div>
                      );
                    })}
                    <div className="col-span-2 flex flex-col gap-y-8">
                      <Line />
                      <SponsorCarousel />
                      <Line />
                    </div>
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
