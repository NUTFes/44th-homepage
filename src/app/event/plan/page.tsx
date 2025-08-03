'use client';

import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import Tag from '@/src/components/common/tag';
import TagModal from '@/src/components/common/tag_modal';
import TextStyle from '@/src/components/common/text_style';
import CellContent from '@/src/components/event/plan/CellContent';
import { getAllPlanData } from '@/src/lib/plan';
import { PlanItem } from '@/src/types/plan';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const allTags = [
  '子供向け',
  '企業出店',
  '学生出店',
  '1日目',
  '2日目',
  '事前に参加募集',
  '常時開催',
  'ステージ企画',
  '講義棟企画',
  '体育館企画',
  '景品あり',
  '飛び込み参加歓迎',
];

export default function PlanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<PlanItem[]>([]);

  const allData = getAllPlanData();

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
              <TextStyle styleType="title">企画</TextStyle>
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
              {filteredData.map((item, index) => {
                const itemId = item.番号 || `missing-${index}`;
                return (
                  <div key={itemId} className="text-center">
                    <Link href={`/event/plan/${encodeURIComponent(itemId)}`}>
                      <TextStyle styleType="body2">
                        <CellContent imageId={item.番号} title={item.企画名} />
                      </TextStyle>
                    </Link>
                  </div>
                );
              })}
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
