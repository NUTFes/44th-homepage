'use client';
import Frame from './frame';
import TextStyle from './text_style';

type DetailMapProps = {
  location: string;
  roomNumber?: string;
};

const DetailMap = ({ location, roomNumber }: DetailMapProps) => {
  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          開催場所
        </TextStyle>
        <TextStyle styleType="body1" className="text-center">
          {location}
        </TextStyle>
        {roomNumber && (
          <TextStyle styleType="body1" className="text-center">
            {roomNumber}
          </TextStyle>
        )}
        {/* Map image placeholder */}
        <div className="bg-gray-200 w-full h-64 flex items-center justify-center mb-4">
          coming soon
        </div>
        {/* <LinkButton href="/map" className="bg-second">
          <TextStyle styleType="body1" className="text-white">
            マップページへ
          </TextStyle>
        </LinkButton> */}
      </Frame>
    </div>
  );
};

export default DetailMap;
