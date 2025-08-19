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
  // 新しい命名規則用のプロパティ
  category?: string;
  sequenceNumber?: number;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
}

// カテゴリ別の頭文字マッピング
const CATEGORY_PREFIXES: Record<string, string> = {
  exh_exp: 'E',
  sale: 'S',
  food: 'F',
  corpolate_booth: 'C',
  plan: 'P',
  sponsoring_corpolate: 'SP',
};

export default function FallbackImage({
  imageDir,
  imageId,
  category,
  sequenceNumber,
  alt,
  fill,
  width,
  height,
  className,
  unoptimized = true,
}: FallbackImageProps) {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  // 新しい命名規則を使用するかどうかを判定
  const useNewNaming = category && sequenceNumber !== undefined;

  // 実際に使用するimageIdを決定
  let actualImageId = imageId;
  if (useNewNaming) {
    const prefix = CATEGORY_PREFIXES[category] || 'X';
    actualImageId = `${prefix}${sequenceNumber}`;
  }

  if (!actualImageId) {
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

  const fallbacks = generateImageFallbacks(imageDir, actualImageId);
  const currentSrc =
    fallbacks[currentSrcIndex] || getInitialImageSrc(imageDir, actualImageId);

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
