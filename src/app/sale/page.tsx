'use client';

import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/sale/CellContent';
import { getAllSaleData } from '@/src/lib/sale';
import { SaleItem } from '@/src/types/sale';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const allTags = ['子供向け', '技大グッズ', '学生出店', '企業出店'];

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<SaleItem[]>([]);

  const allData = getAllSaleData();

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
              <TextStyle styleType="title">物品販売</TextStyle>
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
              {filteredData.map((item) => (
                <div key={item.番号} className="text-center">
                  <Link href={`/sale/${item.番号 || ''}`}>
                    <CellContent
                      imageId={item.番号}
                      title={item.出店タイトル}
                    />
                  </Link>
                </div>
              ))}
            </main>
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
