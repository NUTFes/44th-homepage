import React from "react";
import TextStyle from "@/app/components/text_style";
import Frame from "@/app/components/frame";
import Icon from "@/public/icon/44thlogo.png";
import Image from "next/image";
import Line from "@/app/components/line";
import BackFrame from "@/app/components/back_frame";
import Infos from "../top/components/Infos";

import Carousel from "@/app/components/carousel";

import LinkButton from "@/app/components/link_button";
import { MdMailOutline } from "react-icons/md";


export default function TopPage() {
  return (
    <div>
      <BackFrame>
        <div className="py-2 space-y-8">
          <Frame>
            <TextStyle styleType="section_title">
              <div className="text-center">見出しがあって</div>
            </TextStyle>
            <TextStyle styleType="body2">
              このような本文などがあるかもしれませんね
            </TextStyle>
            <div>
              <TextStyle styleType="body2">
                このように
                <TextStyle styleType="body2_bold_khaki">
                  スタイルが変わる
                </TextStyle>
                かもしれません
              </TextStyle>
            </div>
            <div>
              <TextStyle styleType="body2">
                このように<b>スタイルを変えても</b> いいかもですね
              </TextStyle>
            </div>


            <LinkButton href="/pages/top">
              ボタン
              <br />
              （サイト内リンク）
            </LinkButton>
            <LinkButton
              isExternal={true}
              href="https://www.nagaokaut.ac.jp/index.html"
            >
              ボタン
              <br />
              （サイト外リンク）
            </LinkButton>

          </Frame>

          <Infos></Infos>

          <Frame />
          <div className="justify-center flex">
            <LinkButton
              isExternal={true}
              href="https://www.nagaokaut.ac.jp/index.html"
            >
              frame外に置く場合
            </LinkButton>
          </div>

          <LinkButton href="/pages/top" className="bg-second">
            ボタンの色など変更
          </LinkButton>
          <LinkButton
            isExternal={true}
            href="https://www.nagaokaut.ac.jp/index.html"
            className="bg-font_link flex items-center space-x-2"
          >
            <span>
              <MdMailOutline size={24} />
            </span>
            <span>アイコンを追加</span>
          </LinkButton>
          <LinkButton href="/pages/top" className="bg-font_link">ボタン</LinkButton>
         
        </div>
      </BackFrame>
      <Frame>
        <TextStyle styleType="title">タイトル</TextStyle>
        <div>
          <TextStyle styleType="body1">
            これは本文です。これは本文です。これは本文です。
          </TextStyle>
          <TextStyle styleType="body1_bold_khaki">
            太字＆カーキ色の本文1
          </TextStyle>
          <TextStyle styleType="body1">これは本文です。</TextStyle>
        </div>
      </Frame>

      <Frame>
      <Carousel autoSlide={true}>
        <div className="bg-accent w-[100px] h-[120px]"></div>
        <div className="bg-second w-[200px] h-[500px]"></div>
      </Carousel>
      </Frame>


      <Frame pg="none">
        <div>
          <Image src={Icon} alt="44th Logo" width={100} height={100} />
        </div>
        <TextStyle styleType="title">タイトル</TextStyle>
        <TextStyle styleType="body1">これはパディングのないフレーム</TextStyle>
      </Frame>

      <Frame w="big">
        <div className="text-center">
          <TextStyle styleType="title">お知らせ</TextStyle>
        </div>
        <Line />
        <div>
          <p>
            <TextStyle styleType="body1_khaki">2025/00/00</TextStyle>
          </p>
          <TextStyle styleType="body1">
            これは本文です。これは本文です。これは本文です。これは本文です。これは本文です。
          </TextStyle>
        </div>
        <div>
          <p>
            <TextStyle styleType="body1_khaki">2025/00/00</TextStyle>
          </p>
          <TextStyle styleType="body1">
            これは本文です。これは本文です。これは本文です。これは本文です。これは本文です。
          </TextStyle>
          <TextStyle styleType="body1_bold_khaki">
            太字＆カーキ色の本文1
          </TextStyle>
          <TextStyle styleType="body1">これは本文です。</TextStyle>
        </div>
      </Frame>

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
      <TextStyle styleType="section_title">セクションタイトル</TextStyle>
      <TextStyle styleType="section_title_red">
        赤いセクションタイトル
      </TextStyle>
      <TextStyle styleType="body1">本文1</TextStyle>
      <TextStyle styleType="body1_bold">太字の本文1</TextStyle>
      <TextStyle styleType="body1_khaki">カーキ色の本文1</TextStyle>
      <TextStyle styleType="body1_bold_khaki">太字＆カーキ色の本文1</TextStyle>
      <TextStyle styleType="body2">本文2</TextStyle>
      <TextStyle styleType="body2_bold">太字の本文2</TextStyle>
      <TextStyle styleType="body2_khaki">カーキ色の本文2</TextStyle>
      <TextStyle styleType="body2_bold_khaki">太字＆カーキ色の本文2</TextStyle>
      <TextStyle styleType="body3">本文3</TextStyle>
      <TextStyle styleType="body3_khaki">カーキ色の本文3</TextStyle>
    </div>
  );
}
