import Image from 'next/image';
import BackFrame from '@/src/components/common/back_frame';
import Line from '@/src/components/common/line';
import ReturnEventButton from '@/src/components/common/return_event_button';
import SponsorCarousel from '@/src/components/common/sponser-carousel';
import TextStyle from '@/src/components/common/text_style';
import Cast from '@/src/components/event/guest/cast';
import GuestAttentions from '@/src/components/event/guest/guest_attentions';
import GuestInfos from '@/src/components/event/guest/guest_info';
import TicketInfos from '@/src/components/event/guest/ticket_infos';

export default function GuestPage() {
  return (
    <div className="text-font_main">
      <BackFrame>
        <ReturnEventButton size="small" href="/event" />
        <div className="flex flex-col gap-y-8 pb-4">
          <TextStyle styleType="title" className="text-center">
            ゲスト
          </TextStyle>
          <div className="px-4">
            <Image
              src="/images/guest/cast_tate.png"
              alt="トム・ブラウン"
              width={216}
              height={149}
              className="object-cover h-auto w-full justifuy-center flex border-2 border-main rounded-sm shadow_button"
            ></Image>
          </div>
          <div className="body1 font-bold">
            今年の技大祭に大人気お笑いコンビ
            <span className="text-font_khaki">「トム・ブラウン」</span>
            がやってくる！
          </div>
          <div className="gap-y-2">
            <div>
              唯一無二のシュールでパワフルなネタと<b>「ダメ〜！」</b>
              でおなじみの強烈ツッコミで、笑いの渦を巻き起こします！
            </div>
            <div>
              ゲストイベントは<b>技大祭2日目、9月14日（日）13:00～14:00</b>
              で体育館にて行われます！その日限りのカオスな舞台をぜひお見逃しなく！
            </div>
          </div>
          <Line />
          <GuestInfos />
          <TicketInfos />
          <GuestAttentions />
          <Cast />
          <ReturnEventButton size="large_event" href="/event" />
          <Line />
          <SponsorCarousel />
        </div>
      </BackFrame>
    </div>
  );
}
