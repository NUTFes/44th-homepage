'use client';

import FallbackImage from '@/src/components/common/FallbackImage';

interface CellContentProps {
  imageId?: string;
  title?: string;
  sequenceNumber?: number;
}

export default function CellContent({
  imageId,
  title,
  sequenceNumber,
}: CellContentProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-2/4 mx-auto aspect-square flex items-center justify-center relative">
        <FallbackImage
          imageDir="sale"
          imageId={imageId}
          category="sale"
          sequenceNumber={sequenceNumber}
          alt={title || 'image'}
          fill
          className="object-contain"
        />
      </div>
      <p className="mt-2">{title || '物品販売名'}</p>
    </div>
  );
}
