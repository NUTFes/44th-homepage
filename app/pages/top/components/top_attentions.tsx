import Frame from "@/src/components/frame";
import TextStyle from "@/src/components/text_style";
import { FaBusAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";
import { RiBeerFill } from "react-icons/ri";
import { TbSmokingNo } from "react-icons/tb";

const attentionItems:{text: React.ReactNode}[] = [
  { text: <>お困りの際は案内所まで</> },
  { text: <>アルコール提供は<br/>リストバンドが必要</> },
  { text: <>大学構内では食事が禁止</> },
  { text: <>構内は全面禁煙</> },
  { text: <>公共交通機関をご利用<br/>ください</> },
];
const attentionIcons:{icon: React.ReactNode}[] = [
  {icon:<FaCircleInfo size={32} className="text-main" />},
  {icon:<RiBeerFill size={32} className="text-main" />},
  {icon:<MdNoMeals size={32} className="text-main" />},
  {icon:<TbSmokingNo size={32} className="text-main" />},
  {icon:<FaBusAlt size={32} className="text-main" />}
];
const TopAttentions: React.FC = () => {
  return (
    <Frame pg="none" className="px-[20px] py-6">
      <TextStyle styleType="section_title" className="text-center pb-6">
        技大祭を楽しむために
      </TextStyle>
      {attentionItems.map((item, index) => (
        <div
          key={index}
          className={`flex justify-start items-center space-x-2 w-full ${
            index < attentionItems.length - 1 ? "pb-6" : ""
          }`}
        >
          {attentionIcons[index]?.icon}
          <TextStyle styleType="body1_bold_khaki">{item.text}</TextStyle>
        </div>
      ))}
    </Frame>
  );
};
export default TopAttentions;
