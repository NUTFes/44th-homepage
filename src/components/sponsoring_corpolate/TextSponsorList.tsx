'use client';

import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';
import Link from 'next/link';

interface TextSponsorListProps {
  sponsors: SponsoringCorpolateItem[];
}

export default function TextSponsorList({ sponsors }: TextSponsorListProps) {
  if (sponsors.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border-4 border-yellow-400 p-6 text-center">
      <div className="space-y-2">
        {sponsors.map((sponsor, index) => {
          const SponsorText = () => (
            <div className="!text-[#432F2F] text-base">{sponsor.企業名}</div>
          );

          if (sponsor.企業HPのURL) {
            return (
              <Link
                key={index}
                href={sponsor.企業HPのURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600 transition-colors"
              >
                <SponsorText />
              </Link>
            );
          }

          return (
            <div key={index}>
              <SponsorText />
            </div>
          );
        })}
      </div>
    </div>
  );
}
