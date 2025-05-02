import React, { ReactNode } from "react";

interface TextProps {
  styleType:
    | "title"
    | "section_title"
    | "section_title_red"
    | "body1"
    | "body1_bold"
    | "body1_khaki"
    | "body1_bold_khaki"
    | "body2"
    | "body2_bold"
    | "body2_khaki"
    | "body2_bold_khaki"
    | "body3"
    | "body3_khaki"; // 許可されるスタイルを制限
  children: ReactNode;
  className?: string; // 上書きでCSSクラスを指定できる
}

const TextStyle: React.FC<TextProps> = ({ styleType, children, className }) => {
  const styles: Record<TextProps["styleType"], string> = {
    title: "text-h1 font-tegomin text-font_khaki shadow_font",
    section_title: "text-h2 font-tegomin text-font_khaki shadow_font",
    section_title_red: "text-h2 font-tegomin text-logo_color shadow_font",
    body1: "text-body1 font-noto text-font_main",
    body1_bold: "text-body1 font-noto text-font_main font-bold",
    body1_khaki: "text-body1 font-noto text-font_khaki ",
    body1_bold_khaki: "text-body1 font-noto text-font_khaki font-bold",
    body2: "text-body2 font-noto text-font_main",
    body2_bold: "text-body2 font-noto text-font_main font-bold",
    body2_khaki: "text-body2 font-noto text-font_khaki",
    body2_bold_khaki: "text-body2 font-noto text-font_khaki font-bold",
    body3: "text-body3 font-noto text-font_main",
    body3_khaki: "text-body2 font-noto text-font_khaki",
  };

  return <span className={`${styles[styleType]} ${className || ""}`}>{children}</span>;
};

export default TextStyle;
