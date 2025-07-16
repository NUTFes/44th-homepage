'use client';

import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import CellContent from '@/src/components/food/CellContent';
import { getAllFoodData } from '@/src/lib/food';
import { FoodItem } from '@/src/types/food';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const allTags = [
  '子供向け',
  '企業出店',
  '学生出店',
  'お酒あり',
  '国際グルメ',
  'フード',
  'スイーツ',
  'ドリンク',
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
      <div className="bg-[#F8F5E9] min-h-screen font-serif text-[#432F2F]">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/event"
            className="inline-block bg-gray-400 text-white px-4 py-2 rounded mb-4"
          >
            {'<< 戻る'}
          </Link>

          <h1 className="text-4xl text-center font-bold my-8">食品販売</h1>

          <Tag
            selectedTags={selectedTags}
            onSearchClick={() => setIsModalOpen(true)}
            onResetClick={() => setSelectedTags([])}
          />

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
                backgroundImage: "url('/assets/illust_yatai_1.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '300px 400px',
                zIndex: 0,
              }}
            />
            <div className="relative z-10 contents">
              {filteredData.map((item) => (
                <div key={item.番号} className="text-center">
                  <Link href={`/food/${item.番号 || ''}`}>
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
