import Image from 'next/image'; // Assuming you're using Next.js for image handling
import Frame from '../../common/frame';
import TextStyle from '../../common/text_style';
const Cast = () => {
  return (
    <Frame>
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          出演者情報
        </TextStyle>
        <div className="text-center">
          <p className="body2">ゲスト</p>
          <p className="body1 font-bold">トム・ブラウン</p>
          <Image
            src="/images/guest/cast_tombrown.png"
            alt="トム・ブラウン"
            width={216}
            height={169}
          ></Image>
        </div>
      </div>
    </Frame>
  );
};
export default Cast;
