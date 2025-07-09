'use client';

import Image from 'next/image';

interface CellContentProps {
  imageId?: string;
  title?: string;
}

export default function CellContent({ imageId, title }: CellContentProps) {
  const imageUrl = imageId ? `/images/food/${imageId}.png` : null;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-2/4 mx-auto aspect-square flex items-center justify-center relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title || 'image'}
            fill
            className="object-contain"
            unoptimized // If the images are static and already optimized
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <Image
              src="/icon/44thlogo.svg"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="mt-2">NO IMAGE</p>
          </div>
        )}
      </div>
      <p className="mt-2 font-bold">{title || '飲食店名'}</p>
    </div>
  );
}
