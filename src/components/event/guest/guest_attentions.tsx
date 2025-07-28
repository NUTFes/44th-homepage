import Frame from '../../common/frame';
import TextStyle from '../../common/text_style';
const GuestAttentions = () => {
  return (
   
      <Frame>
         <div className="flex flex-col items-center justify-center w-full h-full"></div>
        <div className="text-font_main flex flex-col gap-y-4 flex flex-col items-center">
          <TextStyle styleType="section_title_red" className="text-center">
            会場での注意事項
          </TextStyle>
          <div className="body2">
            <p>※MCやゲストの指示があった場合に限り、録音・撮影が可能です。</p>
            <p>体育館内での食事は禁止ですが、<b>水分補給のみ可能です。</b></p>
            <p><b>会場内は非常に暑くなることが予想されます。</b>手荷物検査後、机に設けられている「技大祭うちわ」をぜひご利用ください。</p>
          </div>
        </div>
      </Frame>
   
  );
};
export default GuestAttentions;
