import TextStyle from '@/src/components/common/text_style';
import ExhExpCellContent from '@/src/components/event/exh_exp/CellContent';
import CellContent from '@/src/components/event/plan/CellContent';
import { getAllExhExpData } from '@/src/lib/exh_exp';
import { getAllPlanData } from '@/src/lib/plan';
import Link from 'next/link';
import IdFrame from '../common/id_frame';

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function RandomPlanItems() {
  const plans = getAllPlanData();
  const randomPlans = getRandomItems(plans, 2);

  return (
    <div>
      <main
        className="grid grid-cols-2 gap-8 pb-4"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      >
        {randomPlans.map((item) => {
          const originalIndex = plans.findIndex(
            (plan) => plan.番号 === item.番号
          );
          return (
            <Link
              key={item.番号}
              href={`/event/plan/${encodeURIComponent(item.番号)}`}
            >
              <IdFrame>
                <TextStyle styleType="body2">
                  <CellContent
                    imageId={item.番号}
                    title={item.企画名}
                    sequenceNumber={originalIndex + 1}
                  />
                </TextStyle>
              </IdFrame>
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export function RandomExhExpItems() {
  const exhs = getAllExhExpData();
  const randomExhs = getRandomItems(exhs, 2);

  return (
    <div>
      <main
        className="grid grid-cols-2 gap-8 pb-4"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      >
        {randomExhs.map((item) => {
          const originalIndex = exhs.findIndex((exh) => exh.番号 === item.番号);
          return (
            <Link
              key={item.番号}
              href={`/event/exh_exp/${encodeURIComponent(item.番号)}`}
            >
              <IdFrame>
                <TextStyle styleType="body2">
                  <ExhExpCellContent
                    imageId={item.番号}
                    title={item.出店タイトル}
                    sequenceNumber={originalIndex + 1}
                  />
                </TextStyle>
              </IdFrame>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
