import BackFrame from '@/app/components/back_frame';
import Line from '@/app/components/line';
import TextStyle from '@/app/components/text_style';
import Image from 'next/image';
import Infos from './components/Infos';
import RecruitmentSponsors from './components/recruitment_sponsors';
import TopAttentions from './components/top_attentions';
import TopCarousel from './components/top_carousel';

export default function TopPage() {
  return (
    <div>
      <div style={{ paddingBottom: '308px' }} className="space-y-6 pt-4">
        <div className="flex justify-center">
          <Image
            src="/logo/title_logo.svg"
            alt="44th_logo"
            width={162}
            height={256}
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo/title_date.svg"
            alt="44th_date"
            width={175}
            height={103}
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
            {' '}
            <TextStyle styleType="section_title">タイムスケジュール</TextStyle>
          </div>

          <div className="text-center">
            <TextStyle styleType="body2">Comming soon</TextStyle>
          </div>

          <Line />
          <div className="text-center">
            {' '}
            <TextStyle styleType="section_title">関連アプリ・サイト</TextStyle>
          </div>

          <div className="text-center">
            <TextStyle styleType="body2">Comming soon</TextStyle>
          </div>
        </div>
      </BackFrame>
    </div>
  );
}
