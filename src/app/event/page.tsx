import Image from 'next/image';
import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import LinkButton from '@/src/components/common/link_button';
import SponsorCarousel from '@/src/components/common/sponser-carousel';
import TextStyle from '@/src/components/common/text_style';
import TimeSchedule from '@/src/components/common/time_schedule';
import {
  RandomExhExpItems,
  RandomPlanItems,
} from '@/src/components/event/random_banner';

export default function EventPage() {
  return (
    <div>
      <BackFrame>
        <div className="flex flex-col text-center gap-y-8 py-4 relative">
          <div className="py- px-4">
            <TextStyle styleType="title">イベント</TextStyle>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between px-8 items-center">
              <TextStyle styleType="section_title">ゲスト</TextStyle>
              <LinkButton href="/event/guest" className="px-4 py-2">
                詳しく見る＞＞
              </LinkButton>
            </div>
            <div className="px-8">
              <a href="/event/guest">
                <Image
                  src="/images/guest/cast_yoko.png"
                  width={1080}
                  height={810}
                  className="border-2 border-main rounded-sm hover:opacity-60 transition-opacity"
                  alt="ゲスト/トム・ブラウン"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-between px-8 items-center">
            <TextStyle styleType="section_title">企画</TextStyle>
            <LinkButton href="/event/plan" className="px-4 py-2">
              もっと見る＞＞
            </LinkButton>
          </div>
          <div>
            {/* 企画ランダム表示 */}
            <RandomPlanItems />
          </div>
          <div className="flex justify-between px-8 items-center">
            <TextStyle styleType="section_title">展示・体験</TextStyle>
            <LinkButton href="/event/exh_exp" className="px-4 py-2">
              もっと見る＞＞
            </LinkButton>
          </div>
          <div>
            {/* 展示体験ランダム表示 */}
            <RandomExhExpItems />
          </div>
          <Line />
          <div id="timeschedule">
            <TextStyle styleType="section_title">タイムスケジュール</TextStyle>
            <TimeSchedule />
          </div>
          <Line />
          <SponsorCarousel />
        </div>
      </BackFrame>
    </div>
  );
}
