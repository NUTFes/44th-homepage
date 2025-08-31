
import BackFrame from '@/src/components/common/back_frame';
import TextStyle from '@/src/components/common/text_style';
import Image from 'next/image';
import About50th from "../../components/greeting/about50th";
import Line from '@/src/components/common/line';
import President from "../../components/greeting/president_greeting";
import Taiko from "../../components/greeting/Taiko_greeting";
import SponsorCarousel from '../../components/common/sponser-carousel';
import GreetingCard from '../../components/greeting/greetingcard';

import React from 'react';
import BackFrame from '@/src/components/common/back_frame';
import About50th from '../../components/greeting/about50th';


export default function GreetingPage() {
  return (
    <div>
      <BackFrame>

        <div className="flex flex-col text-center gap-y-8 py-4">
          <TextStyle styleType="title" className=''>
            代表者挨拶
          </TextStyle>
          <div className='w-[90%] flex flex-col text-center gap-y-8 py-4 ml-auto mr-auto'>
            <TextStyle styleType="body1_khaki" >
              技大祭44thのテーマ
            </TextStyle>
            <TextStyle styleType="title" >
              【千客万彩】
            </TextStyle>
            <TextStyle styleType="body1_khaki" >
              【せんきゃくばんさい】
            </TextStyle>
            <div className='text-left'>
              <TextStyle styleType="body1_khaki" className=''>
                今年の技大祭のテーマは
              </TextStyle>
              <TextStyle styleType="body1_bold_khaki" className=''>
                「先客万彩」
              </TextStyle>
              <p></p>
              <TextStyle styleType="body1_khaki" className=''>
                千客万来の「来」を「彩」に置き換えることで、技大祭が多くのお客さんや学生で賑わい、
              </TextStyle>
              <TextStyle styleType="body1_bold_khaki" className=''>
                それぞれが色とりどりの個性を輝かせてほしい
              </TextStyle>
              <TextStyle styleType="body1_khaki" className=''>
                という願いを込めました。
              </TextStyle>
              <p></p>
              <TextStyle styleType="body1_khaki" className=''>
                たくさんの「彩」が集まる今年の技大祭に、ぜひ足を運んでみてください。
              </TextStyle>
            </div>
          </div>
          <Line/>
          <div className='py-4'>
            <About50th />
          </div>
          <Line/>
          <div className='py-4'>
            <GreetingCard
              title="実行委員長挨拶"
              imageSrc="/images/greeting/president.svg"
              imageAlt="学長"
              name="鎌土　重晴"
              message="　第44回技大祭へようこそお越しくださいました。\n
   　技大祭はこれまで地域の皆様に温かく支えていただくとともに、学生たちの熱意と努力により、多くの方に親しまれる学園祭に成長してまいりました。心より感謝申し上げます。\n
　今年度の技大祭実行委員会が掲げたテーマは「千客万彩」です。\n
   このテーマは多くの方に技大祭にご来場いただき、技大祭に関わるすべての人がそれぞれの個性を彩り豊かに発揮し、輝けるイベントにしたいという意気込みが込められています。\n
　 目玉企画の１つである「技大神輿」は、昨年度から始まり、多くの来場者様にご好評をいただいたものです。当日は展示のほか、担いでの巡行や、神輿の上からのお菓子の配布も予定されています。神輿の近くを通った際は是非足を止めてご覧ください。また、実行委員会やサークル主催の各種企画イベントに加えて、参加型で楽しめるビンゴ大会も予定しております。技大生だけではなく、ご来場の皆様が一緒に楽しめる企画が多数用意されていますので、これらをきっかけに、学生と外部の方との交流が生まれることを期待します。ご来場いただく皆様からのお声は技大生にとっての今後の学生生活のモチベーション向上、さらには大きく羽ばたくためのエネルギー源にも繋がります。技大生の元気で活気あふれる姿をぜひご覧いただき、その奮闘ぶりにご声援、叱咤激励をいただければ幸いです。\n
　今後とも本学へのご支援をどうぞよろしくお願いします。
"
/>
            
          </div>
<GreetingCard
  title="実行委員長挨拶"
  imageSrc="/images/greeting/taiko.svg"
  imageAlt="太閤"
  name="太閤　良樹"
  message="　ご来場の皆さま、こんにちは。\n
  　本日は第44回技大祭にお越しいただき、誠にありがとうございます。\n
  　技大祭実行委員会を代表して、心より歓迎いたします。\n
   　今年のテーマは「千客万彩」。 関わる人すべてが自分の色や個性を出して楽しめる、自由でにぎやかな祭を目指して準備を進めてきました。私自身、音楽カルチャーが好きで、いろんな人の個性が混ざり合い、空気が変わっていく瞬間を大切にしています。今回の技大祭も、そんな“交わり”が詰まった場になればと思っています。\n
   　協賛団体、参加団体、大学関係者、そして実行委員の皆さま。多くの方々の支えがあって、この日を迎えることができました。この場をお借りして、心より感謝申し上げます。\n
   　200名を超える実行委員会が一丸となって準備に取り組み、企画・装飾ともに大きくパワーアップした今年の技大祭。新設の入場ゲートや装飾に加え、今年初登場の「お化け屋敷」もぜひお楽しみください。\n
   　さらに、今年のゲストにはお笑いコンビ「トム・ブラウン」をお迎えします。個性あふれるステージが、会場を笑顔で包んでくれることでしょう。人気作品「幼稚園ウォーズ」とのコラボも、今年の見どころのひとつです。今日という一日が、皆さまにとって少しでも心に残るものになれば幸いです。\n
   　どうぞ最後まで、存分にお楽しみください。
"
/>
          <SponsorCarousel/>
        </div>

        <h1 className="text-center text-2xl font-bold">Greeting Page</h1>
        <About50th />
        <h1>Greeting Page</h1>

      </BackFrame>
    </div>
  );
}
