"use client";
import Frame from "@/src/components/common/frame";
import TextStyle from "@/src/components/common/text_style";
import { FaBusAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";
import { RiBeerFill } from "react-icons/ri";
import { TbSmokingNo } from "react-icons/tb";

const attentionDetails = [
  {
    icon: <FaCircleInfo size={32} className="text-main" />,
    title: "ご来場の際お困りの際は案内所まで",
    bodyBold: "技大祭のパンフレットを案内所にて配布しております。いくつかのイベントに必須なので忘れずにお受け取りください。",
    body: "体調不良や落とし物などお困りの際にもお立ち寄りください。",
    bodyBoldClass: "",
  },
  {
    icon: <RiBeerFill size={32} className="text-main" />,
    title: "アルコールについて",
    bodyBold: "飲酒を希望される方はリストバンドの着用が必要です。",
    body: "リストバンドは案内所にて年齢確認および運転者でないことを確認した後にお渡しします。\nまた、アルコールをお飲みになる際は、歩きのみを避け、必ず休憩所をご利用ください。20歳未満の方の飲酒は「未成年者飲酒禁止法」により禁止されています。",
    bodyBoldClass: "",
  },
  {
    icon: <MdNoMeals size={32} className="text-main" />,
    title: "屋内での食事禁止",
    bodyBold: "講義棟内部など大学構内の屋内では食事禁止です。",
    body: "水分補給に制限はありませんのでご自由にお取りください。屋外では飲食に関する制限はございません。\n設営されている休憩所をご活用ください。",
    bodyBoldClass: "text-logo_color",
  },
  {
    icon: <TbSmokingNo size={32} className="text-main" />,
    title: "大学構内は全面禁煙",
    bodyBold: "大学構内は全面禁煙です。",
    body: "ご協力お願いいたします。",
    bodyBoldClass: "text-logo_color",
  },
  {
    icon: <FaBusAlt size={32} className="text-main" />,
    title: "公共交通機関をご利用ください",
    bodyBold: "駐車場の台数には限りがございます。",
    body: "当日は大変混雑が予想されますので、できるだけ公共交通機関をご利用くださいますようお願いいたします。\nまた近隣住民の皆様にご迷惑をおかけする恐れがありますので、",
    bodyBoldClass: "",
    bodyBoldExtra: "路上駐車はご遠慮ください。",
    bodyBoldExtraClass: "text-logo_color",
    bodyExtra:"\nご協力をお願いいたします。",
  },
];

const TopAttentions: React.FC = () => {
  return (
    <Frame pg="none" className="px-[20px] py-6">
      <TextStyle styleType="section_title" className="text-center pb-6">
        技大祭を楽しむために
      </TextStyle>
      <div className="flex flex-col gap-4">
        {attentionDetails.map((item, idx) => (
          <div key={idx} className="items-start">
            <div className="flex gap-4 pb-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex flex-col ">
                <TextStyle styleType="body1_bold_khaki" className="mb-1">{item.title}</TextStyle>
              </div>
            </div>
            <div className="">
              <TextStyle styleType="body2_bold" className={`mb-1 ${item.bodyBoldClass}`}>{item.bodyBold}</TextStyle>
                {item.body.split(' \n ').map((line, i) => (
                  <TextStyle styleType="body2" key={i} className="whitespace-pre-line">{line}</TextStyle>
                ))}
                {item.bodyBoldExtra && (
                  <TextStyle styleType="body2_bold" className={item.bodyBoldExtraClass}>
                    {item.bodyBoldExtra}
                  </TextStyle>
                )}
                {item.bodyExtra && (
                  <TextStyle styleType="body2" className="whitespace-pre-line">
                    {item.bodyExtra}
                  </TextStyle>
                )}
              </div>
          </div>
        ))}
      </div>
    </Frame>
  );
};

export default TopAttentions;