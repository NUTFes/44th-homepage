import React from "react";
import TextStyle from "@/app/components/text_style";
import Frame from "@/app/components/frame";
import Icon from "@/public/icon/44thlogo.png";
import Image from "next/image";
import TopAttentions from "./components/top_attentions";

export default function TopPage() {
  return (
    <div>
      <h1>Top Page</h1>
      <TopAttentions/>
    </div>
  );
}
