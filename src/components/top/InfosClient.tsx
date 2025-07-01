'use client';

import Frame from '@/src/components/common/frame';
import Line from '@/src/components/common/line';
import TextStyle from '@/src/components/common/text_style';
import React from 'react';

interface Info {
  番号: string;
  投稿日時: string;
  タイトル: string;
  内容: string;
}

interface Props {
  infos: Info[];
}

const InfosClient: React.FC<Props> = ({ infos }) => {

  const sortedInfos = [...infos].sort((a, b) => Number(b.番号) - Number(a.番号));

  return (
    <div>
      <Frame>
        <p className="text-center">
          <TextStyle styleType="section_title">お知らせ</TextStyle>
        </p>
        <div className="overflow-y-auto max-h-96 scrollbar-custom">
          <div className="pr-2">
            {sortedInfos.map((info) => (
              <div key={info.番号}>
                <p>
                  <TextStyle styleType="body3_khaki">{info.投稿日時}</TextStyle>
                </p>
                <p>
                  <TextStyle styleType="body2_bold_khaki">
                    {info.タイトル}
                  </TextStyle>
                </p>
                <p>
                  <TextStyle styleType="body3">{info.内容}</TextStyle>
                </p>

                <div className="py-4">
                  <Line className="border-main" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default InfosClient;
