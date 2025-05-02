import Frame from "@/app/components/frame";
import TextStyle from "@/app/components/text_style";
import { FaCircleExclamation } from "react-icons/fa6";

const TopAttentions: React.FC = () => {
  return (
    <Frame pg="none" className="px-[20px] py-6">
      <TextStyle styleType="section_title" className="text-center pb-6">
        技大祭を楽しむために
      </TextStyle>

      <div className="flex justify-start items-center space-x-2 w-full pb-6">
        <FaCircleExclamation size={32} className="text-main" />
        <TextStyle styleType="body1_bold_khaki">
          ご来場の際、<br />お困りの際は案内所まで
        </TextStyle>
        </div>
        <div className="flex justify-start items-center space-x-2 w-full pb-6">
        <FaCircleExclamation size={32} className="text-main" />
        <TextStyle styleType="body1_bold_khaki">
          アルコール提供は<br />リストバンドが必要
        </TextStyle>
        </div>
        <div className="flex justify-start items-center space-x-2 w-full pb-6">
        <FaCircleExclamation size={32} className="text-main" />
        <TextStyle styleType="body1_bold_khaki">
          大学構内では食事が禁止
        </TextStyle>
        </div>
        <div className="flex justify-start items-center space-x-2 pb-6">
        <FaCircleExclamation size={32} className="text-main" />
        <TextStyle styleType="body1_bold_khaki">
          構内は全面禁煙
        </TextStyle>
        </div>
        <div className="flex justify-start items-center space-x-2">
        <FaCircleExclamation size={32} className="text-main" />
        <TextStyle styleType="body1_bold_khaki">
          公共交通機関をご利用<br />ください
        </TextStyle>
        </div>
    </Frame>
  );
};
export default TopAttentions;
