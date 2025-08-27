'use client';

import BackFrame from '@/src/components/common/back_frame';
import ReturnEventButton from '@/src/components/common/return_event_button';
import TextStyle from '@/src/components/common/text_style';
import ImageSponsorCard from '@/src/components/sponsoring_corpolate/ImageSponsorCard';
import TextSponsorList from '@/src/components/sponsoring_corpolate/TextSponsorList';
import {
  getAllSponsoringCorpolateData,
  getSponsoringCorpolateDataWithImages,
  getSponsoringCorpolateDataWithoutImages,
} from '@/src/lib/sponsoring_corpolate';

export default function SponsoringCorpolatePage() {
  const allData = getAllSponsoringCorpolateData();
  const imageSponsors = getSponsoringCorpolateDataWithImages();
  const textSponsors = getSponsoringCorpolateDataWithoutImages();

  return (
    <BackFrame>
      <div className="container mx-auto py-8 px-4 text-[#432F2F]">
        <ReturnEventButton href="/" />

        <div className="text-center py-8">
          <TextStyle styleType="title">協賛企業一覧</TextStyle>
          <p className="text-body1 mt-4 text-[#432F2F]">
            ご協賛いただいた企業様（順不同、敬称略）
          </p>
        </div>

        {/* 画像付き協賛企業セクション */}
        {imageSponsors.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-col gap-6 max-w-md mx-auto">
              {imageSponsors.map((sponsor, index) => {
                const originalIndex = allData.findIndex(
                  (item) => item.番号 === sponsor.番号
                );
                return (
                  <ImageSponsorCard
                    key={index}
                    sponsor={sponsor}
                    sequenceNumber={originalIndex + 1}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* 文字のみ協賛企業セクション */}
        {textSponsors.length > 0 && (
          <div className="mb-8">
            <TextSponsorList sponsors={textSponsors} />
          </div>
        )}

        {/* データがない場合の表示 */}
        {imageSponsors.length === 0 && textSponsors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              協賛企業データを読み込み中...
            </p>
          </div>
        )}

        <ReturnEventButton size="large" href="/" />
      </div>
    </BackFrame>
  );
}
