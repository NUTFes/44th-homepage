import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import LinkButton from '@/src/components/common/link_button';
import TextStyle from '@/src/components/common/text_style';

export default function EventPage() {
  return (
    <div>
      <BackFrame>
        <div className="flex flex-col text-center gap-y-8 py-4">
          <div className="py- px-4">
            <TextStyle styleType="title">イベント</TextStyle>
          </div>
          <div className="flex justify-between px-8 items-center">
            <TextStyle styleType="section_title">ゲスト</TextStyle>
            <LinkButton href="/event/guest" className="px-4 py-2">
              詳しく見る＞＞
            </LinkButton>
          </div>
          <div>
            <p>ここにゲストバナー画像</p>
            <TextStyle styleType="body2">ゲスト：〇〇〇〇</TextStyle>
          </div>
          <div className="flex justify-between px-8 items-center">
            <TextStyle styleType="section_title">企画</TextStyle>
            <LinkButton href="/event/plan" className="px-4 py-2">
              詳しく見る＞＞
            </LinkButton>
          </div>
          <div>
            <p>ここに企画ランダム表示</p>
          </div>
          <div className="flex justify-between px-8 items-center">
            <TextStyle styleType="section_title">展示・体験</TextStyle>
            <LinkButton href="/event/exh_exp" className="px-4 py-2">
              詳しく見る＞＞
            </LinkButton>
          </div>
          <div>
            <p>ここに展示体験ランダム表示</p>
          </div>
          <Line />
          <TextStyle styleType="section_title">タイムスケジュール</TextStyle>
          <p>ここにタイスケコンポーネント</p>
        </div>
      </BackFrame>
    </div>
  );
}
