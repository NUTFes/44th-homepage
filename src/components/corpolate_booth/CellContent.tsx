'use client';

import FallbackImage from '@/src/components/common/FallbackImage';

interface CellContentProps {
  imageId?: string;
  title?: string;
}

export default function CellContent({ imageId, title }: CellContentProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-2/4 mx-auto aspect-square flex items-center justify-center relative">
        <FallbackImage
          imageDir="corpolate_booth"
          imageId={imageId}
          alt={title || 'image'}
          fill
          className="object-contain"
        />
      </div>
      <p className="mt-2">{title || '企業名'}</p>
    </div>
  );
}
