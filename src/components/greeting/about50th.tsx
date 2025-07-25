"use client";
import Frame from '@/src/components/common/frame';
import TextStyle from '@/src/components/common/text_style';
import Image from 'next/image';

const About50th: React.FC = () => {
return (
  <div>
    <Frame>
      <TextStyle styleType="section_title" className="text-center">
        学校について
      </TextStyle>
      <div className="w-full flex justify-center">
        <Image
          src="/images/greeting/greeting.png"
          alt="50周年記念"
          width={500}
          height={300}
          className="w-full h-auton"
        />
      </div>
      <TextStyle styleType="body1_bold_khaki" >
        長岡技術科学大学は、
        令和8（2026）年10月1日に開学50周年を迎えます。
      </TextStyle>
      <TextStyle styleType="body2">
        大学では技大祭のほか、地域の皆様や本学に関係する皆様と本学教職員・在学生と交流を深めていただくイベントを開催していきます。
      </TextStyle>
      <div className="flex justify-center flex-col gap-[8px]">
              <TextStyle styleType="body2_khaki" className="text-center pt-4">
                50周年記念サイトはこちら
              </TextStyle>
                    <TextStyle styleType="body1" className="text-center">
                <a
                  href="https://www.nagaokaut.ac.jp/j/50th/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/greeting/greeting_button.png"
                    alt="50周年記念サイトはこちら"
                    width={200}
                    height={80}
                    className="mx-auto h-auto object-contain"
                  />
                </a>
            </TextStyle>
      </div>
    </Frame>
    </div>
  );
};

export default About50th;