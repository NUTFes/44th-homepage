export const runtime = 'edge';
import BackFrame from '@/src/components/common/back_frame';
import DetailMap from '@/src/components/common/detail_map';
import FallbackImage from '@/src/components/common/FallbackImage';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import { getAllPlanData, getPlanDataById } from '@/src/lib/plan';
import { PlanItem } from '@/src/types/plan';
import Link from 'next/link';
import Frame from '@/src/components/common/frame';

type PlanDetailProps = {
  params: {
    id: string;
  };
};

export default async function PlanDetailPage({ params }: PlanDetailProps) {
  const decodedId = decodeURIComponent(params.id);

  let item: PlanItem | undefined;
  if (decodedId.startsWith('missing-')) {
    // missing-${index} 形式の場合、インデックスから取得
    const index = parseInt(decodedId.split('-')[1]);
    const allData = getAllPlanData();
    item = allData[index];
  } else {
    item = getPlanDataById(decodedId);
  }

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];

  return (
    <BackFrame>
      <div className="container mx-auto py-8 text-font_main">
        <ReturnEventButton href="/event/plan" />
        <div className="text-center">
          <TextStyle styleType="section_title">企画</TextStyle>
          <p className="text-h2 pt-2 py-4">{item.企画名}</p>
        </div>
        <div className="pb-4 pt-4">
          <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
            <FallbackImage
              imageDir="plan"
              imageId={item.番号}
              alt={item.企画名 || 'image'}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 参加応募ボタン */}
        {item.参加応募URL && (
          <div className="my-6 text-center">
            <Link
              href={item.参加応募URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12  py-4 text-white bg-second rounded-sm text-body2 shadow_button text-center hover:bg-yellow-500 transition-colors"
            >
              参加応募はこちら
            </Link>
          </div>
        )}

        <p className="text-center my-8 text-body1">{item.PR文}</p>

        <div className="flex justify-center gap-4 my-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 border-accent text-accent px-4 py-1 rounded-sm bg-base"
            >
              {tag}
            </span>
          ))}
        </div>

        <Line className="my-8" />

        {/* 開催時間セクション */}
        <div className="my-8">
          <Frame>
            <TextStyle styleType="section_title" className="text-center mb-4">
              開催時間
            </TextStyle>

            {(item['1日目(晴)開始時刻'] || item['1日目(雨)開始時刻']) && (
              <div className="text-center mb-2">
                <div className="text-font_khaki font-bold">1日目</div>
                {item['1日目(晴)開始時刻'] && item['1日目(晴)終了時刻'] && (
                  <div className="text-body1">
                    晴れ: {item['1日目(晴)開始時刻']}～
                    {item['1日目(晴)終了時刻']}
                  </div>
                )}
                {item['1日目(雨)開始時刻'] && item['1日目(雨)終了時刻'] && (
                  <div className="text-body1">
                    雨: {item['1日目(雨)開始時刻']}～{item['1日目(雨)終了時刻']}
                  </div>
                )}
              </div>
            )}

            {(item['2日目(晴)開始時刻'] || item['2日目(雨)開始時刻']) && (
              <div className="text-center mb-4">
                <div className="text-font_khaki font-bold">2日目</div>
                {item['2日目(晴)開始時刻'] &&
                  item['2日目(晴)終了時刻'] &&
                  item['2日目(晴)開始時刻'] !== 'なし' && (
                    <div className="text-body1">
                      晴れ: {item['2日目(晴)開始時刻']}～
                      {item['2日目(晴)終了時刻']}
                    </div>
                  )}
                {item['2日目(雨)開始時刻'] &&
                  item['2日目(雨)終了時刻'] &&
                  item['2日目(雨)開始時刻'] !== 'なし' && (
                    <div className="text-body1">
                      雨: {item['2日目(雨)開始時刻']}～
                      {item['2日目(雨)終了時刻']}
                    </div>
                  )}
              </div>
            )}
          </Frame>
        </div>

        <DetailMap location={item['開催場所（晴れ）']} roomNumber={item.番号} />

        <ReturnEventButton size={'large'} href="/event/plan" />
      </div>
    </BackFrame>
  );
}
