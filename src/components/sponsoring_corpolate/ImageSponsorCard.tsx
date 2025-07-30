'use client';

import FallbackImage from '@/src/components/common/FallbackImage';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';
import Link from 'next/link';

interface ImageSponsorCardProps {
  sponsor: SponsoringCorpolateItem;
}

export default function ImageSponsorCard({ sponsor }: ImageSponsorCardProps) {
  const CardContent = () => (
    <div className="bg-white border-2 border-yellow-400 p-4 text-center">
      <h3 className="text-lg font-bold mb-4 text-[#432F2F]">
        {sponsor.企業名}
      </h3>
      <div className="w-full aspect-video flex items-center justify-center relative bg-black">
        <FallbackImage
          imageDir="sponsoring_corpolate"
          imageId={sponsor.番号}
          alt={sponsor.企業名}
          fill
          className="object-contain"
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
