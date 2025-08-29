'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BackFrame from '@/src/components/common/back_frame';
import IdFrame from '@/src/components/common/id_frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import SponsorCarousel from '@/src/components/common/sponser-carousel';
import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/event/exh_exp/CellContent';
import { getAllExhExpData } from '@/src/lib/exh_exp';
import { ExhExpItem } from '@/src/types/exh_exp';

const allTags = ['子供向け', '企業出店', '学生出店', '展示', '体験', '研究室'];

// 🔧 配列をチャンクに分割する関数
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function ExhExpPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<ExhExpItem[]>([]);

  const allData = getAllExhExpData();

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredData(allData);
    } else {
      const newData = allData.filter((item) =>
        selectedTags.every((tag) => item.タグ.includes(tag))
      );
      setFilteredData(newData);
    }
  }, [selectedTags, allData]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <div>
        <BackFrame>
          <ReturnEventButton href="/event" />
          <div className="container px-4">
            <div className="text-center py-8">
              <TextStyle styleType="title">展示・体験</TextStyle>
            </div>

            <Tag
              selectedTags={selectedTags}
              onSearchClick={() => setIsModalOpen(true)}
              onResetClick={() => setSelectedTags([])}
            />
            <div className="py-4">
              <Line className="accenat" />
            </div>

            <main
              className="grid grid-cols-2 gap-8"
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            >
              {chunkArray(filteredData, 8).map((chunk, chunkIndex) => (
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
                            href={`/event/exh_exp/${encodeURIComponent(
                              itemId
                            )}`}
                          >
                            <TextStyle styleType="body2">
                              <CellContent
                                imageId={`E${item.番号}`}
                                title={item.出店タイトル}
                                sequenceNumber={sequenceNumber}
                              />
                            </TextStyle>
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
            </main>

            <ReturnEventButton size="large_event" href="/event" />
          </div>
        </BackFrame>
      </div>

      <TagModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allTags={allTags}
        selectedTags={selectedTags}
        onTagChange={handleTagChange}
      />
    </>
  );
}
