import Image from 'next/image'; // Assuming you're using Next.js for image handling
import Frame from '../../common/frame';
import Line from '../../common/line';
import TextStyle from '../../common/text_style';
const Cast = () => {
  return (
    <Frame>
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          出演者情報
        </TextStyle>
        <div className="text-center flex flex-col items-center relative">
          <p className="body2">ゲスト</p>
          <p className="body1 font-bold">トム・ブラウン</p>

          <Image
            src="/images/guest/cast_tombrown.png"
            alt="トム・ブラウン"
            width={216}
            height={149}
            className="object-cover h-auto w-full"
          ></Image>
        </div>
        <div className="flex  flex-col justify-start items-start gap-y-4">
          <div>
          <p>
            <b>布川ひろき さん</b>（左）
          </p>
          <div className="body2">
            <span className="text-font_khaki">生年月日：</span>1984年1月28日
          </div>
          <div className="body2">
            <span className="text-font_khaki">出身地：</span>北海道札幌市
          </div>
          <div className="body2">
            <span className="text-font_khaki">趣味：</span>
            ギザ10円集め/aikoのことを調べる
          </div>
          <div className="body2">
            <span className="text-font_khaki">特技：</span>足ツッコミ/九九
          </div>
          </div>
<div>
          <p>
            <b>みちお さん</b>（右）
          </p>
          <div className="body2">
            <span className="text-font_khaki">生年月日：</span>1984年12月29日
          </div>
          <div className="body2">
            <span className="text-font_khaki">出身地：</span>北海道札幌市
          </div>
          <div className="body2">
            <span className="text-font_khaki">趣味：</span>
            ロボットアニメ/映画鑑賞/歴史/ゲーム/スポーツ
          </div>
          <div className="body2">
            <span className="text-font_khaki">特技：</span>
            スノーボード/相撲/柔道/素手でフルーツを潰してミックスジュースを作る/少年紙を素手で真っ二つに破く/Y字バランス/股わり
          </div>
          </div>
        </div>
      </div>
      <Line className="border-main" />
      <div className="text-center flex flex-col items-center relative w">
        <p className="body2">MC</p>
        <p className="body1 font-bold">清野幹</p>
        <div className="flex  flex-col items-start">
          <p>
            <b>清野幹（せいの もとき） さん</b>
          </p>
          <div className="body2">
            <span className="text-font_khaki">生年月日：</span>1979年2月22日
          </div>
          <div className="body2">
            <span className="text-font_khaki">出身地：</span>
            阿賀野氏（旧水原町）
          </div>
          <div className="body2">
            <span className="text-font_khaki">趣味：</span>
            一人イントロクイズ
          </div>
          <div className="body2">
            <span className="text-font_khaki">特技：</span>二段階右折
          </div>
        </div>
      </div>
    </Frame>
  );
};
export default Cast;
