import Image from 'next/image';
import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import TextStyle from '@/src/components/common/text_style';
import Infos from '@/src/components/top/Infos';
import RecruitmentSponsors from '@/src/components/top/recruitment_sponsors';
import TopAttentions from '@/src/components/top/top_attentions';
import TopCarousel from '@/src/components/top/top_carousel';
import LinkButton from '../components/common/link_button';
import SponsorCarousel from '../components/common/sponser-carousel';
import TimeSchedule from '../components/common/time_schedule';
import Youchien from '../components/top/youchien';

// const TitleDate = '/logo/title_date.svg';
// const TitleLogo = '/logo/title_logo.svg';
export const runtime = 'edge';

export default function TopPage() {
  return (
    <div>
      <div style={{ paddingBottom: '308px' }} className="space-y-6 pt-4">
        <div className="flex justify-center">
          <div className="relative aspect-[344/552] w-[20%] max-md:w-[55%]">
            <Image
              src="/logo/title_logo.png"
              alt="44th_logo"
              fill={true}
              priority
              sizes="(max-width: 768px) 55vw, 20vw"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative aspect-[175/103] w-[20%] max-md:w-[55%]">
            <Image
              src="/logo/title_date.png"
              alt="44th_date"
              fill={true}
              priority
              sizes="(max-width: 768px) 55vw, 20vw"
            />
          </div>
        </div>
      </div>
      <BackFrame>
        <div className="py-4 space-y-8">
          <TopCarousel />

          <Infos />
          <Line />
          <SponsorCarousel />
          <Line />
          <TopAttentions />
          <div id="youchien">
            <Youchien />
          </div>
          <Line />

          <div className="text-center">
            <TextStyle styleType="section_title">タイムスケジュール</TextStyle>
          </div>

          <TimeSchedule />

          <Line />
          <RecruitmentSponsors />
          <div className="text-center">
            <TextStyle styleType="section_title">関連アプリ・サイト</TextStyle>
          </div>

          <LinkButton
            href="https://bingo.nutfes.net/"
            isExternal
            className="hover:opacity-80"
          >
            nutfes-Bingo/技大祭ビンゴアプリ
          </LinkButton>
          <Line />
          <SponsorCarousel />
        </div>
      </BackFrame>
    </div>
  );
}
