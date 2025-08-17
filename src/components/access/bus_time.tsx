import Frame from '@/src/components/common/frame';
import ImageModal from '../common/image_modal';

const BusTime = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-y-4">
      <Frame pg="none">
        <ImageModal
          src="/images/access/zikokuhyo.jpg"
          alt="バス時刻表"
          width={621}
          height={894}
        />
      </Frame>
      <p className="text-font_khaki body2">
        時刻表は令和7年4月1日に改正された「越後交通バス時刻表
        長岡駅前＝大手大橋＝希望ヶ丘＝技大＝長岡宗徳大学＝ニュータウン・歴史博物館
        線」を元に作成されています。何かお困りの際はお近くの実行委員にお尋ねください。
      </p>
    </div>
  );
};
export default BusTime;
