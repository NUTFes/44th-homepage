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
          <TextStyle styleType="body1_bold">
            9/13{'('}土{')'}
          </TextStyle>
          <p className="font-bold">10:00～20:00{'(出店は17:00まで)'}</p>
        </div>
      </div>
      <div className="p-0">
        <div>
          <TextStyle styleType="body1_khaki">２日目</TextStyle>
        </div>
        <div>
          <TextStyle styleType="body1_bold">
            9/14{'('}日{')'}
          </TextStyle>
          <p className="font-bold">10:00～18:30{'(出店は16:00まで)'}</p>
        </div>
      </div>
    </Frame>
  );
};
export default DateSection;
