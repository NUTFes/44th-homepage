'use client';

import Image from 'next/image';
import Frame from '@/src/components/common/frame';
import TextStyle from '@/src/components/common/text_style';

type GreetingCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  message: string;
};

const GreetingCard: React.FC<GreetingCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  name,
  message,
}) => {
  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          {title}
        </TextStyle>
        <div className="flex w-[90%] ml-auto mr-auto">
          <div className="w-[45%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={300}
              className="h-full"
            />
          </div>
          <TextStyle
            styleType="body1"
            className="mt-auto mb-auto ml-auto mr-auto"
          >
            {name}
          </TextStyle>
        </div>
        <TextStyle styleType="body2" className="text-left">
          {message.split('\\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </TextStyle>
      </Frame>
    </div>
  );
};

export default GreetingCard;
