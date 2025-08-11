'use client';

import { useEffect, useState } from 'react';
import { getSponsoringCorpolateDataWithImages } from '@/src/lib/sponsoring_corpolate';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';
import ImageSponsorCard from '@/src/components/sponsoring_corpolate/ImageSponsorCard';
import SimpleCarousel from '@/src/components/common/simple-carousel';

interface SponsorCarouselProps {
  title?: string;
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function SponsorCarousel({
  title = '協賛企業一覧',
  className = '',
  autoSlide = true,
  autoSlideInterval = 4000,
}: SponsorCarouselProps) {
  const [imageSponsors, setImageSponsors] = useState<SponsoringCorpolateItem[]>([]);

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
    <div className={`w-full ${className}`}>
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      <div className="w-full max-w-5xl mx-auto mb-8">
        <SimpleCarousel autoSlide={autoSlide} autoSlideInterval={autoSlideInterval}>
          {imageSponsors.map((sponsor, index) => (
            <ImageSponsorCard key={index} sponsor={sponsor} />
          ))}
        </SimpleCarousel>
      </div>
    </div>
  );
}