'use client';

import Link from 'next/link';
import FallbackImage from '@/src/components/common/FallbackImage';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';

interface ImageSponsorCardProps {
  sponsor: SponsoringCorpolateItem;
  sequenceNumber?: number;
}

export default function ImageSponsorCard({
  sponsor,
  sequenceNumber,
}: ImageSponsorCardProps) {
  const CardContent = () => (
    <div className=" p-2 text-center">
      <h3 className="body1 text-font_khaki pb-2">{sponsor.企業名}</h3>
      <div className="w-full aspect-[3/2] flex items-center justify-center relative">
        <FallbackImage
          imageDir="sponsoring_corpolate"
          category="sponsoring_corpolate"
          sequenceNumber={sequenceNumber || Number(sponsor.番号)}
          alt={sponsor.企業名}
          fill
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );

  if (sponsor.企業HPのURL) {
    return (
      <Link
        href={sponsor.企業HPのURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
