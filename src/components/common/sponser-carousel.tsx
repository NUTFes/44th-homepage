'use client';

import SimpleCarousel from '@/src/components/common/simple-carousel';
import ImageSponsorCard from '@/src/components/sponsoring_corpolate/ImageSponsorCard';
import { getSponsoringCorpolateDataWithImages } from '@/src/lib/sponsoring_corpolate';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';
import { useEffect, useState } from 'react';

interface SponsorCarouselProps {
  title?: string;
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function SponsorCarousel({
  autoSlide = true,
  autoSlideInterval = 5000,
}: SponsorCarouselProps) {
  const [imageSponsors, setImageSponsors] = useState<SponsoringCorpolateItem[]>(
    []
  );

  useEffect(() => {
    setImageSponsors(getSponsoringCorpolateDataWithImages());
  }, []);

  if (imageSponsors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">協賛企業データを読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div
        className={`p-0.5 w-[90%] min-w-[200px] max-w-[300px] border-2 border-second bg-base_back rounded-sm`}
      >
        <div
          className="w-full border border-second rounded-sm
                  py-2"
        >
          <div className="flex flex-col gap-4">
            <div className="w-hull px-2 h-auto">
              <SimpleCarousel
                autoSlide={autoSlide}
                autoSlideInterval={autoSlideInterval}
              >
                {imageSponsors.map((sponsor, index) => (
                  <ImageSponsorCard key={index} sponsor={sponsor} />
                ))}
              </SimpleCarousel>
              {/* ↓協賛ページ公開時に有効にする */}
              {/* <div className="flex justify-center">
              <a
                className="bg-base text-body2 text-main border border-main w-full py-4 rounded-sm text-body2 shadow_button text-center hover:bg-second hover:text-base transition-colors"
                href="/sponsoring_corpolate"
                target="_blank"
                rel="noopener noreferrer"
              >
                ご協賛いただいた企業様＞＞
              </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
