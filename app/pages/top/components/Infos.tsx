import InfosClient from './InfosClient';

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
        <p className="mb-4 text-font_main">
          <strong>お知らせ</strong>
        </p>
        <p className="text-font_main">エラーが発生しました: {errorMessage}</p>
      </div>
    );
  }
};

export default Infos;
