import DateSection from '@/src/components/access/date_section';
import GoogleMap from '@/src/components/access/googlemap';
import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import TextStyle from '@/src/components/common/text_style';

export default function AccessPage() {
  return (
    <div>
      <BackFrame>
        <div className="flex flex-col text-center gap-y-8 py-4">
          <TextStyle styleType="title">アクセス</TextStyle>
          <TextStyle styleType="section_title">大学Googleマップ</TextStyle>
          <GoogleMap />
          <DateSection />
          <Line />
          <TextStyle styleType="section_title">技大前バス時刻表</TextStyle>
          ここにバス時刻表
        </div>
      </BackFrame>
    </div>
  );
}
