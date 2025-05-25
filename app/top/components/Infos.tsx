import InfosClient from './InfosClient';
import Frame from '@/app/components/frame';
import TextStyle from '@/app/components/text_style';

interface Info {
  番号: string;
  投稿日時: string;
  タイトル: string;
  内容: string;
}

const Infos = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_INFO_API_URL as string, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('ネットワークエラーです');
    }

    const infos: Info[] = await res.json();

    return <InfosClient infos={infos} />;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : '不明なエラー';

    return (
      <div>
        <Frame>
        <p className="text-center">
          <TextStyle styleType="section_title">お知らせ</TextStyle>
        </p>
        <p><TextStyle styleType="body3">エラーが発生しました: {errorMessage}</TextStyle></p>
        </Frame>
      </div>
    );
  }
};

export default Infos;
