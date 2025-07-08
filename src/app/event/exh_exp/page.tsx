'use client';

import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import CellContent from '@/src/components/event/exh_exp/CellContent';
import { getAllExhExpData } from '@/src/lib/exh_exp';
import { ExhExpItem } from '@/src/types/exh_exp';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const allTags = ['子供向け', '企業出店', '学生出店', '展示', '体験'];

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
      <div className="bg-[#F8F5E9] min-h-screen font-serif text-[#432F2F]">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/event"
            className="inline-block bg-gray-400 text-white px-4 py-2 rounded mb-4"
          >
            {'<< 戻る'}
          </Link>

          <h1 className="text-4xl text-center font-bold my-8">展示・体験</h1>

          <Tag
            selectedTags={selectedTags}
            onSearchClick={() => setIsModalOpen(true)}
            onResetClick={() => setSelectedTags([])}
          />

          <hr className="border-t-2 border-red-400 mb-8" />

          <main
            className="grid grid-cols-2 gap-8"
            style={{
              backgroundImage: "url('/assets/illust_people_1.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          >
            {filteredData.map((item) => (
              <div key={item.番号} className="text-center">
                <Link href={`/event/exh_exp/${item.番号 || ''}`}>
                  <CellContent imageId={item.番号} title={item.出店タイトル} />
                </Link>
              </div>
            ))}
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
