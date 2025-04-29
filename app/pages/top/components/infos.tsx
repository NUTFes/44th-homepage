'use client';
import React, { useEffect, useState } from 'react';
import TextStyle from '../../../components/text_style';
import Frame from "@/app/components/frame";

interface Info {
    番号: string;
    投稿日時: string;
    タイトル: string;
    内容: string;
}

const Infos: React.FC = () => {
    const [infos, setInfos] = useState<Info[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
    const fetchInfos = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_INFO_API_URL as string);
            if (!response.ok) {
                throw new Error('ネットワークエラーです');
            }
            const data = await response.json();
            setInfos(data);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('不明なエラーが発生しました');
            }
        } finally {
            setLoading(false);
        }
    };

    fetchInfos();
}, []);

if (loading) return <div><p className='mb-4'><TextStyle styleType="title">お知らせ</TextStyle></p><p><TextStyle styleType='body1_bold_khaki'>読み込み中…</TextStyle></p></div>;
if (error) return <div><p className='mb-4'><TextStyle styleType="title">お知らせ</TextStyle></p><p><TextStyle styleType='body1_bold_khaki'>エラーが発生しました: {error}</TextStyle></p></div>;

return (
    <div>
        <Frame>
            <p className='text-center'>
                <TextStyle styleType="section_title">お知らせ</TextStyle>
            </p>
                {infos.map((info) => (
                    <div key={info.番号}>
                        <p>
                            <TextStyle styleType="body1_khaki">{info.投稿日時}</TextStyle>
                        </p>
                        <p>
                            <TextStyle styleType="body1_bold_khaki">{info.タイトル}</TextStyle>
                        </p>
                        <p>
                            <TextStyle styleType="body2">{info.内容}</TextStyle>
                        </p>
                    </div>
                ))}
        </Frame>
    </div>
);
};

export default Infos;
