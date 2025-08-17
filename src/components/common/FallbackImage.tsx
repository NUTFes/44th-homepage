'use client';

import {
  generateImageFallbacks,
  getInitialImageSrc,
} from '@/src/utils/imageUtils';
import Image from 'next/image';
import { useState } from 'react';

interface FallbackImageProps {
  imageDir: string;
  imageId?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
}

export default function FallbackImage({
  imageDir,
  imageId,
  alt,
  fill,
  width,
  height,
  className,
  unoptimized = true,
}: FallbackImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  if (!imageId) {
    // imageIdがない場合のフォールバック
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
        <Image
          src="/icon/44thlogo.svg"
          alt="logo"
          width={width || 100}
          height={height || 100}
          className="object-contain"
        />
        <p className="mt-2">NO IMAGE</p>
      </div>
    );
  }

  const fallbacks = generateImageFallbacks(imageDir, imageId);
  const currentSrc =
    fallbacks[currentSrcIndex] || getInitialImageSrc(imageDir, imageId);

  const handleError = () => {
    if (currentSrcIndex < fallbacks.length - 1) {
      // 次の拡張子を試行
      setCurrentSrcIndex(currentSrcIndex + 1);
    } else {
      // すべての拡張子で失敗した場合
      setHasError(true);
    }
  };

  if (hasError) {
    // すべてのフォールバックが失敗した場合
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
        <Image
          src="/icon/44thlogo.svg"
          alt="logo"
          width={width || 100}
          height={height || 100}
          className="object-contain"
        />
        <p className="mt-2">NO IMAGE</p>
      </div>
    );
  }

  const imageProps = {
    src: currentSrc,
    alt,
    className,
    unoptimized,
    onError: handleError,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return <Image {...imageProps} width={width} height={height} />;
}
