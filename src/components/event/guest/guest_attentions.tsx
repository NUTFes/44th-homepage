import { TbCameraOff } from "react-icons/tb";
import { LuCupSoda } from 'react-icons/lu';
import { MdOutlineNoMeals } from 'react-icons/md';
import Frame from '../../common/frame';
import Line from '../../common/line';
import TextStyle from '../../common/text_style';

const GuestAttentions = () => {
  return (
    <div>
      <Frame>
        <div className="flex flex-col items-center justify-center w-full h-full body2">
          <div className="text-font_main flex flex-col gap-y-6 flex flex-col items-center">
            <TextStyle styleType="section_title_red" className="text-center">
              会場での注意事項
            </TextStyle>
            <div>
              <div className="flex justify-start text-accent items-center gap-x-2">
                <TbCameraOff size={40} />
                <p className="font-bold">イベント中の 録音・撮影は原則禁止</p>
              </div>
              <p className="text-accent">
                ※MCやゲストの指示があった場合に限り、録音・撮影が可能です。
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-start text-accent items-center gap-x-2">
                <div className="flex justify-start text-accent items-center min-w-max">
                  <MdOutlineNoMeals size={40} />
                  <LuCupSoda size={40} />
                </div>
                <div className=" sm:flex sm:items-center sm:justify-center sm:gap-x-2">
                  <p className="font-bold text-center">体育館では食事禁止</p>
                  <p className="font-bold text-center">水分補給のみ可能</p>
                </div>
              </div>
            </div>

            <p>入場時に手荷物検査へのご協力をお願いします。</p>
            <p>
              <b>会場内は非常に暑くなることが予想されます。</b>
              手荷物検査後、机に設けられている「技大祭うちわ」をぜひご利用ください。
            </p>
          </div>
        </div>
        <Line />
        <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
          <TextStyle styleType="section_title_red" className="text-center">
            会場の再入場について
          </TextStyle>
          <p>
            飲み物の購入などで会場から一時退場する場合、
            <b>
              会場出口にて再入場券を受け取ってください。
              <span className="text-accent">
                再入場券が無い場合の再入場はできませんのでご注意ください。
              </span>
            </b>
          </p>
        </div>
      </Frame>
    </div>
  );
};
export default GuestAttentions;
