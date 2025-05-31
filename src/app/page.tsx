import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import TextStyle from '@/src/components/common/text_style';
import Infos from '@/src/components/top/Infos';
import RecruitmentSponsors from '@/src/components/top/recruitment_sponsors';
import TopAttentions from '@/src/components/top/top_attentions';
import TopCarousel from '@/src/components/top/top_carousel';
import Image from 'next/image';
import TitleLogo from 'public/logo/title_logo.svg';
import TitleDate from 'public/logo/title_date.svg';
export const runtime = 'edge';

export default function TopPage() {
  return (
    <div>
      <div style={{ paddingBottom: '308px' }} className="space-y-6 pt-4">
        <div className="flex justify-center">
          <Image
            src={TitleLogo}
            alt="44th_logo"
            width={200}
            height={200}
            className="slide-in-bck-top"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={TitleDate}
            alt="44th_date"
            width={200}
            height={200}
            className="slide-in-bck-top"
          />
        </div>
      </div>
      <BackFrame>
        <div className="py-4 space-y-8">
          <TopCarousel />
          <RecruitmentSponsors />
          <Infos />
          <TopAttentions />
          <Line />

          <div className="text-center">
            <TextStyle styleType="section_title">タイムスケジュール</TextStyle>
          </div>

          <div className="text-center">
            <TextStyle styleType="body2">Coming soon</TextStyle>
          </div>

          <Line />
          <div className="text-center">
            {' '}
            <TextStyle styleType="section_title">関連アプリ・サイト</TextStyle>
          </div>

          <div className="text-center">
            <TextStyle styleType="body2">Coming soon</TextStyle>
          </div>
        </div>
      </BackFrame>
    </div>
  );
}