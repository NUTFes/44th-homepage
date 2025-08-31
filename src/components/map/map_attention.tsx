import Frame from '../common/frame';
import TextStyle from '../common/text_style';

export default function MapAttention() {
  return (
    <Frame>
      <div className="flex flex-col gap-y-4 text-font_main">
        <TextStyle styleType="section_title" className="text-center">
          駐車場について
        </TextStyle>
        <p>
          駐車場には限りがあるため、できるだけ公共交通機関をご利用ください。また、
          <b>路上駐車はご遠慮ください。</b>
        </p>
      </div>
    </Frame>
  );
}
