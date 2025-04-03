import React from "react";
import Frame from "@/app/components/frame";
import ReturnTopButton from "@/app/components/return_top_button";
import Logo from "@/public/icon/44thlogo.png"
import People from "@/public/assets/illust_people_1.svg"

export default function TopPage() {
  return (
    <div className="flex flex-col items-center gap-6 p-6">

<Frame
    items={[
      
    ]}
/>

<Frame
    items={[
      { title: "これは赤いタイトルです",
        color: "red"
      }
    ]}
/>

<Frame
    items={[
      { title: "お知らせ" },
      { inform_time: "2025/00/00",
        inform_title: "◆サイトを公開しました！",
        content: "サイトを公開しました！今年の夏に行われる長岡技術科学大学の文化祭にぜひお越しください！"
      },
      { inform_time: "2025/00/00",
        inform_title: "◆サイトを公開しました！",
        content: "サイトを公開しました！今年の夏に行われる長岡技術科学大学の文化祭にぜひお越しください！"
      }
    ]}
/>

<Frame
    items={[
      { content: "<red>赤色</red>になります。\n<b>黒色</b>になります。"}
    ]}
/>

<Frame
    items={[
      { center_content: "<red>赤色</red>になります。\n<b>黒色</b>になります。"}
    ]}
/>

<Frame
    w="small"
    items={[
      
    ]}
/>

<Frame
    items={[
      { html:(
        <div className="bg-accent text-center text-white">
          <p>自由にHTMLを書けます</p>
          <ReturnTopButton/>
        </div>
      )}
    ]}
/>

<Frame
    pg="none"
    items={[
      { html:(
        <div className="h-20 bg-accent text-center text-white">
          <p>paddingとgapのないフレームです</p>
        </div>
      )}
    ]}
/>


<Frame
    items={[
      { url: "https://example.com"},
      { html: (
        <div>
          <div className="h-20 bg-accent text-center">
            <p>フレームです</p>
          </div>
          <div className="h-20 bg-main text-center">
            <p>paddiームです</p>
          </div>
        </div>
      )},
      { html: (
          <div className="h-20 bg-main text-center">
            <p>paddiームです</p>
          </div>
      )},
      { html: (
        <ReturnTopButton/>
    )},
    { html: (
      <div className="h-20 bg-main text-center">
        <p>paddiームです</p>
      </div>
  )}
    ]}
/>

<Frame
    items={[
      { icon: Logo,
        icon_name: "ゲスト：〇〇〇〇〇"}
    ]}
/>

<Frame
    items={[
      { content: "これはcontentです。これは説明などの文章を書く際に使います。これは文章です。"}
    ]}
/>
<Frame/>

<Frame 
                w="big"
                items={[
                    { title: "お知らせ",color: "red"},
                    { inform_time: "2025/03/00",
                      inform_title: "◆サイトを公開しました！",
                      content:"<red>ぜひお越しください！</red>ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！"
                    },
                    { inform_time: "2025/03/00",
                      inform_title: "◆サイトを公開しました！",
                      content:"<b>ぜひお越しください！</b>ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！"
                    },
                    { inform_time: "2025/03/00",
                      inform_title: "◆サイトを公開しました！",
                      content:"ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！ぜひお越しください！"
                    }
                ]}
/>

<Frame 
    w="big"
    items={[
        { icon: Logo,
          icon_name: "ゲスト：〇〇〇〇〇" },
        { 
            inform_time: "2025/03/00",
            title: "お知らせ",
            inform_title: "◆サイトを公開しました！",
            content: "ぜひお越しください！ぜひお越しください！"
        },
        { 
          icon: People, // 画像パスを渡す
          icon_name: "ゲスト：〇〇〇〇〇", // アイコンの横に表示する名前
          inform_time: "2025/03/00",
          title: "お知らせ",
          inform_title: "◆サイトを公開しました！",
          content: "ぜひお越しください！ぜひお越しください！"
      } 
    ]}
/>

<Frame
    items={[
      { center_content: "<b>企業名</b> (画像広告なし)"},
      { center_content: "<b>企業名 (画像広告なし)"},
      { center_content: "<red>企業名</red> (画像広告なし)"},
      { center_content: "<red>企業名 (画像広告なし)"},
      { center_content: "企業名 (画像広告なし)"},
      { center_content: "企業名 (画像広告なし)"},
    ]}
/>

<Frame pg="none"
items={[
  {html: (
    <div>
      <div className="h-20 bg-accent text-center">
    <p>paddingとgapのないフレームです</p>
  </div>
  <div className="h-20 bg-main text-center">
    <p>paddingとgapのないフレームです</p>
  </div>
    </div>
  )}
]}>
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



















    </div>
  );
}