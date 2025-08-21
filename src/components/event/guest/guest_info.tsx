import Frame from '@/src/components/common/frame';
import TextStyle from '@/src/components/common/text_style';

const GuestInfos: React.FC = () => {
  return (
    <Frame>
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          ゲストステージ
        </TextStyle>
        <div>
          <p>
            場所：<b>体育館</b>
          </p>
          <p>
            日時：<b>9/14（日）　13:00~14:00</b>
            <br />
            　　　※12:00～入場開始
          </p>
        </div>
      </div>
    </Frame>
  );
};
export default GuestInfos;
