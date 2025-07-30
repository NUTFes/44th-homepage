'use client';

import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
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
      <div className="min-h-screen text-font_main">
        <BackFrame>
          <div className="container px-4 text-font_main">
            <div className="text-center py-8">
              <TextStyle styleType="title">食品販売</TextStyle>
            </div>
            <Tag
              selectedTags={selectedTags}
              onSearchClick={() => setIsModalOpen(true)}
              onResetClick={() => setSelectedTags([])}
            />

           <Line/>

            <main
              className="grid grid-cols-2 gap-8"
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            >
              {filteredData.map((item, index) => {
                const itemId = item.番号 || `missing-${index}`;
                return (
                  <div key={itemId} className="text-center">
                    <Link href={`/sale/${encodeURIComponent(itemId)}`}>
                      <CellContent
                        imageId={item.番号}
                        title={item.出店タイトル}
                      />
                    </Link>
                  </div>
                );
              })}
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
