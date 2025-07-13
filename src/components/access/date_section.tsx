import Frame from '@/src/components/common/frame';
import TextStyle from '@/src/components/common/text_style';
const DateSection = () => {
  return (
    <Frame>
      <TextStyle styleType="section_title">開催日時</TextStyle>
      <div className="p-0">
        <div>
          <TextStyle styleType="body1_khaki">１日目</TextStyle>
        </div>
        <div>
          <TextStyle styleType="body1_bold">９/13（土）</TextStyle>
        </div>
      </div>
      <div className="p-0">
        <div>
          <TextStyle styleType="body1_khaki">２日目</TextStyle>
        </div>
        <div>
          <TextStyle styleType="body1_bold">９/14（日）</TextStyle>
        </div>
      </div>
    </Frame>
  );
};
export default DateSection;
