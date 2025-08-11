'use client';

import SimpleCarousel from '@/src/components/common/simple-carousel';
import ImageSponsorCard from '@/src/components/sponsoring_corpolate/ImageSponsorCard';
import { getSponsoringCorpolateDataWithImages } from '@/src/lib/sponsoring_corpolate';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';
import { useEffect, useState } from 'react';
import Frame from './frame';

interface SponsorCarouselProps {
  title?: string;
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function SponsorCarousel({
  className = '',
  autoSlide = true,
  autoSlideInterval = 4000,
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
    <Frame>
      <div className="w-hull px-2">
        <SimpleCarousel
          autoSlide={autoSlide}
          autoSlideInterval={autoSlideInterval}
        >
          {imageSponsors.map((sponsor, index) => (
            <ImageSponsorCard key={index} sponsor={sponsor} />
          ))}
        </SimpleCarousel>
      </div>
    </Frame>
  );
}
