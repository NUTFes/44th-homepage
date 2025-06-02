import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import TextStyle from '@/src/components/common/text_style';
import Infos from '@/src/components/top/Infos';
import RecruitmentSponsors from '@/src/components/top/recruitment_sponsors';
import TopAttentions from '@/src/components/top/top_attentions';
import TopCarousel from '@/src/components/top/top_carousel';
import Image from 'next/image';
// const TitleDate = '/logo/title_date.svg';
// const TitleLogo = '/logo/title_logo.svg';
export const runtime = 'edge';

export default function TopPage() {
  return (
    <div>
      <div style={{ paddingBottom: '308px' }} className="space-y-6 pt-4">
        <div className="flex justify-center">
          <div className="relative aspect-[344/552] w-[20%] max-md:w-[55%]">
            <Image src="/logo/title_logo.png" alt="44th_logo" fill={true} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative aspect-[175/103] w-[20%] max-md:w-[55%]">
            <Image src="/logo/title_date.png" alt="44th_date" fill={true} />
          </div>
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
