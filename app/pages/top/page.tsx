import React from "react";
import TextStyle from "@/app/components/text_style";
import Frame from "@/app/components/frame";
import Icon from "@/public/icon/44thlogo.png";
import Image from "next/image";
import RecruitmentSponsors from "./components/recruitment_sponsors";

export default function TopPage() {
  return (
    <div>
      <h1>Top Page</h1>
      <div className="my-8 max-w-md mx-auto">
        <RecruitmentSponsors />
      </div>
    </div>
  );
}
