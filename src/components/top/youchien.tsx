'use client';

import Image from 'next/image';
import Frame from '@/src/components/common/frame';
import LinkButton from '@/src/components/common/link_button';
import TextStyle from '@/src/components/common/text_style';

const Youchien: React.FC = () => {
  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          幼稚園WARS×第44回技大祭
        </TextStyle>
        <p>
          <TextStyle styleType="body2">
            第44回技大祭では、長岡技科大出身の漫画家、
          </TextStyle>
          <TextStyle styleType="body2_bold">
            千葉侑生先生による大人気作品『幼稚園WARS』
          </TextStyle>
          <TextStyle styleType="body2">
            とのコラボレーションが決定しました！
            ぜひ、以下のリンクから作品をご覧いただき、技大祭にも足をお運びください！
          </TextStyle>
        </p>

        <TextStyle styleType="body1_bold_khaki" className="text-center">
          ストーリー
        </TextStyle>
        <p>
          <TextStyle styleType="body2_bold">
            世界一”安全”な幼稚園の秘密とは!?
          </TextStyle>
          <br />
          <TextStyle styleType="body3">
            ここは世界の重鎮の子が通うブラック幼稚園。リタ先生は彼氏募集中だけど出会いが全く無かった。ある日、子供を狙った殺し屋が現れ、超イケメンで!?世界一”安全”な幼稚園で繰り広げられるアクション×ラブコメ!?
          </TextStyle>
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/images/Youchien/Youchien.png"
            alt="幼稚園WARS"
            width={500}
            height={300}
            className="w-full h-auto object-contain"
          />
        </div>
        <LinkButton
          href="https://shonenjumpplus.com/episode/4855956445109234830"
          isExternal
          className="w-full"
        >
          第１話の試し読みはこちら
          <br />
          （少年ジャンプ＋）
        </LinkButton>
      </Frame>
    </div>
  );
};

export default Youchien;
