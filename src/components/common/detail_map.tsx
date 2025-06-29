'use client';
import Frame from './frame';
import LinkButton from './link_button';
import TextStyle from './text_style';

type DetailMapProps = {
  location: string;
};

const DetailMap = ({ location }: DetailMapProps) => {
  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          開催場所
        </TextStyle>
        <TextStyle styleType="body1" className="text-center">
          {location}
        </TextStyle>
        {/* Map image placeholder */}
        <div className="bg-gray-200 w-full h-64 flex items-center justify-center mb-4">
          地図画像
        </div>
        <LinkButton href="/map" className="bg-second">
          マップページへ
        </LinkButton>
      </Frame>
    </div>
  );
};

export default DetailMap;
