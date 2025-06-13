'use client';

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

          <div className="text-center mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-red-500 text-red-500 px-8 py-2 rounded-md"
            >
              タグ検索
            </button>
          </div>

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

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#654321] flex flex-col items-center justify-center z-50 p-8"
          style={{ backgroundColor: 'rgba(101, 67, 33, 1)' }} // #654321
        >
          <div className="w-full max-w-md text-[#F8F5E9]">
            <h2 className="text-3xl font-bold mb-8 text-center">タグ検索</h2>
            <div className="space-y-4 mb-10">
              {allTags.map((tag) => (
                <label key={tag} className="flex items-center text-2xl">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagChange(tag)}
                    className="appearance-none h-8 w-8 border-2 border-[#F8F5E9] rounded-sm bg-transparent checked:bg-[#F8F5E9] checked:border-transparent mr-4"
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl"
              >
                戻る
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-12 py-3 bg-[#F8F5E9] text-[#654321] text-2xl font-bold rounded-lg"
              >
                検索
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
