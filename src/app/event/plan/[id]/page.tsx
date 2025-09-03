import Link from 'next/link';
import BackFrame from '@/src/components/common/back_frame';
import DetailMapPlan from '@/src/components/common/detail_map_plan';
import FallbackImage from '@/src/components/common/FallbackImage';
import Frame from '@/src/components/common/frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import TimeSchedule from '@/src/components/common/time_schedule';
import { getAllPlanData, getPlanDataById } from '@/src/lib/plan';
import { PlanItem } from '@/src/types/plan';

export const runtime = 'edge';

type PlanDetailProps = {
  params: {
    id: string;
  };
};

export default async function PlanDetailPage({ params }: PlanDetailProps) {
  const decodedId = decodeURIComponent(params.id);

  let item: PlanItem | undefined;
  let itemIndex = 0;

  if (decodedId.startsWith('missing-')) {
    // missing-${index} 形式の場合、インデックスから取得
    itemIndex = parseInt(decodedId.split('-')[1]);
    const allData = getAllPlanData();
    item = allData[itemIndex];
  } else {
    // 通常のIDの場合、全データから該当アイテムのインデックスを取得
    const allData = getAllPlanData();
    item = getPlanDataById(decodedId);
    if (item) {
      itemIndex = allData.findIndex((data) => data.番号 === item?.番号);
    }
  }

  if (!item) {
    return <div>データが見つかりません。</div>;
  }

  const tags = item.タグ ? item.タグ.split(',').map((tag) => tag.trim()) : [];

  return (
    <BackFrame>
      <div className="container mx-auto text-font_main flex flex-col items-col gap-y-8">
        <ReturnEventButton href="/event/plan" />
        <div className="text-center">
          <TextStyle styleType="section_title">企画</TextStyle>
          <p className="text-h2">{item.企画名}</p>
        </div>

        <div className="w-[70%] aspect-square flex items-center justify-center relative max-w-lg mx-auto">
          <FallbackImage
            imageDir="plan"
            category="plan"
            sequenceNumber={itemIndex + 1}
            alt={item.企画名 || 'image'}
            fill
            className="object-contain"
          />
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

        <p className="text-center text-body1">{item.PR文}</p>

        <div className="flex  flex-wrap justify-center gap-2 my-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border-2 border-accent text-accent px-4 py-1 rounded-sm bg-base whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        <Line />

        {/* 開催時間セクション */}

        <Frame>
          <TextStyle styleType="section_title" className="text-center mb-4">
            開催時間
          </TextStyle>

          {(item['1日目(晴)開始時刻'] || item['1日目(雨)開始時刻']) && (
            <div className="text-center mb-2">
              <div className="font-bold">1日目</div>

              {/* 晴れの表示 */}
              {item['1日目(晴)開始時刻'] === 'なし' ? (
                <div className="text-body1">晴れ: 開催なし</div>
              ) : (
                item['1日目(晴)開始時刻'] &&
                item['1日目(晴)終了時刻'] && (
                  <div className="text-body1">
                    晴れ: {item['1日目(晴)開始時刻']}～
                    {item['1日目(晴)終了時刻']}
                  </div>
                )
              )}

              {/* 雨の表示 */}
              {item['1日目(雨)開始時刻'] === 'なし' ? (
                <div className="text-body1">雨: 開催なし</div>
              ) : (
                item['1日目(雨)開始時刻'] &&
                item['1日目(雨)終了時刻'] && (
                  <div className="text-body1">
                    雨: {item['1日目(雨)開始時刻']}～{item['1日目(雨)終了時刻']}
                  </div>
                )
              )}
            </div>
          )}
          {(item['2日目(晴)開始時刻'] || item['2日目(雨)開始時刻']) && (
            <div className="text-center mb-4">
              <div className="font-bold">2日目</div>

              {/* 晴れの表示 */}
              {item['2日目(晴)開始時刻'] === 'なし' ? (
                <div className="text-body1">晴れ: 開催なし</div>
              ) : (
                item['2日目(晴)開始時刻'] &&
                item['2日目(晴)終了時刻'] && (
                  <div className="text-body1">
                    晴れ: {item['2日目(晴)開始時刻']}～
                    {item['2日目(晴)終了時刻']}
                  </div>
                )
              )}

              {/* 雨の表示 */}
              {item['2日目(雨)開始時刻'] === 'なし' ? (
                <div className="text-body1">雨: 開催なし</div>
              ) : (
                item['2日目(雨)開始時刻'] &&
                item['2日目(雨)終了時刻'] && (
                  <div className="text-body1">
                    雨: {item['2日目(雨)開始時刻']}～{item['2日目(雨)終了時刻']}
                  </div>
                )
              )}
            </div>
          )}
        </Frame>
        <Frame>
          <TextStyle styleType="section_title" className="text-center">
            タイムスケジュール
          </TextStyle>
          <TimeSchedule />
        </Frame>

        <DetailMapPlan
          location={item['開催場所（晴れ）']}
          roomNumber={item.番号}
        />

        <ReturnEventButton size={'large'} href="/event/plan" />
      </div>
    </BackFrame>
  );
}
