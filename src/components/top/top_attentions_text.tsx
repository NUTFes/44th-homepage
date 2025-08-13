"use client";
import Frame from '@/src/components/common/frame';
import TextStyle from '@/src/components/common/text_style';

const TopAttentionTexts: React.FC = () => {
  return (
    <div>
      <Frame>
        <TextStyle styleType="section_title" className="text-center">
          技大祭を楽しむために
        </TextStyle>
        <TextStyle styleType="body1_bold_khaki" className="text-center">
          ご来場の際お困りの際は案内所まで
        </TextStyle>
        <p>
        <TextStyle styleType="body2_bold">
          技大祭のパンフレットを案内所にて配布しております。いくつかのイベントに必須なので忘れずにお受け取りください。
        </TextStyle>
        <TextStyle styleType="body2">
          体調不良や落とし物などお困りの際にもお立ち寄りください。
        </TextStyle>
        </p>
        <TextStyle styleType="body1_bold_khaki" className="text-center">
            アルコールについて
        </TextStyle>
        <p>
        <TextStyle styleType="body2_bold">
          飲酒を希望される方はリストバンドの着用が必要です。
        </TextStyle>
        <TextStyle styleType="body2">
          リストバンドは案内所にて年齢確認および運転者でないことを確認した後にお渡しします。
          <br />
          また、アルコールをお飲みになる際は、歩きのみを避け、必ず休憩所をご利用ください。20歳未満の方の飲酒は「未成年者飲酒禁止法」により禁止されています。
        </TextStyle>
        </p>

        <TextStyle styleType="body1_bold_khaki" className="text-center">
            屋内では飲食が禁止
        </TextStyle>
        <p>
        <TextStyle styleType="body2_bold" className='text-logo_color'>
          講義棟内部など大学構内の屋内では食事禁止です。
        </TextStyle>
        <TextStyle styleType="body2">
          水分補給に制限はありませんのでご自由にお取りください。屋外では飲食に関する制限はございません。
          <br />
          設営されている休憩所をご活用ください。
        </TextStyle>
        </p>

        <TextStyle styleType="body1_bold_khaki" className="text-center">
            構内は全面禁煙
        </TextStyle>
        <p>
        <TextStyle styleType="body2_bold" className='text-logo_color'>
          大学構内は全面禁煙です。
        </TextStyle>
        <TextStyle styleType="body2">
          ご協力お願いいたします
        </TextStyle>
        </p>

        <TextStyle styleType="body1_bold_khaki" className="text-center">
            公共交通機関をご利用ください
        </TextStyle>
        <p>
        <TextStyle styleType="body2_bold">
          駐車場の台数には限りがございます。
        </TextStyle>
        <TextStyle styleType="body2">
          当日は大変混雑が予想されますので、できるだけ公共交通機関をご利用くださいますようお願いいたします。
          <br />
          また近隣住民の皆様にご迷惑をおかけする恐れがありますので、
        </TextStyle>
        <TextStyle styleType="body2_bold" className='text-logo_color'>
          路上駐車はご遠慮ください。
        </TextStyle>
        <TextStyle styleType="body2">
          <br />
          ご協力をお願いいたします。
        </TextStyle>
        </p>

      </Frame>
    </div>
  );
};

export default TopAttentionTexts;