'use client';

import React from 'react';
import TextStyle from '../../components/text_style';
import Frame from "@/app/components/frame";

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
    return (
    <div>
        <Frame>
            <p className='text-center'>
                <TextStyle styleType="section_title">お知らせ</TextStyle>
            </p>
            {infos.map((info) => (
                <div key={info.番号}>
                    <p><TextStyle styleType="body3_khaki">{info.投稿日時}</TextStyle></p>
                    <p><TextStyle styleType="body2_bold_khaki">{info.タイトル}</TextStyle></p>
                    <p><TextStyle styleType="body3">{info.内容}</TextStyle></p>
                </div>
            ))}
        </Frame>
    </div>
    );
};

export default InfosClient;
