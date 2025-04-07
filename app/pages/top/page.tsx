import React from "react";
import TextStyle from "@/app/components/text_style";

export default function TopPage() {
  return (
    <div>
      <h1 className="font-tegomin">Top Page tegomin</h1>
      <h1 className="font-noto">Top Page noto sans jp</h1>
      <div className="font-not text-h1">h1</div>
      <div className="font-not text-h2">h2</div>
      <div className="font-not text-body1">body1</div>
      <div className="font-not text-body2">body2</div>
      <div className="font-not text-body3">body3</div>
      <div className="text-white bg-black">white</div>
      <div className="text-black">black</div>
      <div className="text- bg-base">base</div>
      <div className="text-main ">main</div>
      <div className="text-second">second</div>
      <div className="text-accent">accent</div>
      <div className="text-gray">gray</div>
      <div className="text-font_main">font-main</div>
      <div className="text-font_khaki">font-khaki</div>
      <div className="text-logo_color">logo-color</div>
      <div className="text-font_link">font-link</div>
      <div className="bg-white_back">white-back</div>
      <div className="bg-base_back">base-back</div>
      <div className="bg-dark_back">dark-back</div>
      <div className="shadow_right bg-dark_back text-white">shadow_right</div>
      <div className="shadow_font">shadow_font</div>
      <div className="shadow_logo m-4">shadow_logo</div>
      <div className="shadow_dark m-4">shadow_dark</div>
      <div className="bg-second shadow_button m-4">shadow_button</div>
      <TextStyle styleType="title">タイトル</TextStyle>



















    </div>
  );
}