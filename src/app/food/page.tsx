'use client';

import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/food/CellContent';
import { getAllFoodData } from '@/src/lib/food';
import { FoodItem } from '@/src/types/food';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import IdFrame from '@/src/components/common/id_frame';

const allTags = [
  '子供向け',
  '企業出店',
  '学生出店',
  'お酒あり',
  '国際グルメ',
  'フード',
  'スイーツ',
  'ドリンク',
  'キッチンカー',
];

export default function FoodPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<FoodItem[]>([]);

  const allData = getAllFoodData();

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
                {filteredData.map((item, index) => {
                  const itemId = item.番号 || `missing-${index}`;
                  return (
                    
                    <div key={itemId} className="text-center">
                      <IdFrame>
                      <Link href={`/food/${encodeURIComponent(itemId)}`}>
                        <CellContent
                          imageId={item.番号}
                          title={item.出店タイトル}
                        />
                      </Link>
                      </IdFrame>
                    </div>
                    
                  );
                })}
              </div>
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
