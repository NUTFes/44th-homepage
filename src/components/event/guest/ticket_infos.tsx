import Frame from '../../common/frame';
import Line from '../../common/line';
import TextStyle from '../../common/text_style';

const TicketInfos = () => {
  return (
    <Frame>
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          整理券配布について
        </TextStyle>

        <p className="body2">
          ゲストステージの整理券を以下のスケジュールで配布します。
        </p>
        <div className="flex flex-col gap-y-2">
          <div>
            <p className="font-bold">【場所】</p>
            <p className="body2 font-bold">　B講義室（講義棟１階）</p>
          </div>
          <div>
            <p className="font-bold">【時間】</p>
            <p className="text-font_khaki font-bold">　９/13（土）</p>
            <p>
              　第一回：<b>10:00~11:30</b>　300枚
            </p>
            <p>
              　第二回：<b>13:00~14:30</b>　300枚
            </p>
          </div>
          <div>
            <p className="text-font_khaki font-bold">　９/14（日）</p>
            <p>
              　第三回：<b>10:00~11:30</b>　200枚
            </p>
          </div>
        </div>
      </div>
      <Line className="border-main" />
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          整理券配布での入場方法
        </TextStyle>

        <p className="body2">
          整理券を受け取りましたら、以下の整列場所へ指定時間内にお集まりください。
        </p>
        <div>
          <p>
            場所：<b>体育館前</b>
          </p>
          <p>
            日付：<b>９/14（日）</b>
          </p>
          <p>
            時間：<b>整理券記載の集合時間をご確認ください</b>
          </p>
        </div>
        <p className="body2">
          ※12:40を過ぎると整理券を持っていても一般入場枠でのご案内となるためご注意ください。
        </p>
      </div>
      <Line className="border-main" />
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title_red" className="text-center">
          整理券配布の注意事項
        </TextStyle>
        <div className="body2">
          <b>整理券1枚につき１人が入場できます。</b>
          <p>
            <b>整理券番号は入場順番を管理するためのものです。</b>
            席の指定ではございません。
          </p>
          <span className="font-bold text-accent">
            整理券の再発行はいたしません
          </span>
          ので、破損や紛失等にご注意ください。
          <p className="font-bold text-accent">
            整理券記載の集合時間までに整列場所にお越しください。
          </p>
          12:40を過ぎると整理券を持っていても一般入場枠でのご案内となります。
        </div>
      </div>
      <Line className="border-main" />
      <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
        <TextStyle styleType="section_title" className="text-center">
          一般入場枠について
        </TextStyle>
        <div className="body2">
          当日は整理券なしでも入場できる<b>一般入場枠</b>
          がございますが、整理券持ちのお客様の後での空きスペースへのご案内となります。
          <p>
            <b>
              先着順で枠が埋まり次第入場終了となり、入場の確約はできませんのでご注意ください。
            </b>
          </p>
        </div>
      </div>
    </Frame>
  );
};
export default TicketInfos;
