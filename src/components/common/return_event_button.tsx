'use client';
import Link from 'next/link';
import React from 'react';

interface ReturnEventButtonProps {
  className?: string;
  size?: 'small' | 'large' | 'large_event';
  children?: React.ReactNode;
  href: string;
}
const ReturnEventButton: React.FC<ReturnEventButtonProps> = ({
  size = 'small',
  href,
  className,
}) => {
  const label = (() => {
    switch (size) {
      case 'small':
        return '<<戻る';
      case 'large':
        return '<<一覧へ戻る';
      case 'large_event':
        return '<<イベントページへ戻る';
      default:
        return '<<戻る';
    }
  })();

  return (
    <div
      className={`w-full pt-8 pb-8
                    ${
                      size === 'small'
                        ? 'flex justify-start'
                        : 'flex justify-center'
                    } ${className}`}
    >
      <div className="flex justify-center">
        <Link
          href={href}
          className={`px-6  py-2 text-white bg-gray rounded-sm text-body2 shadow_button text-center ${className}`}
        >
          {label}
        </Link>
      </div>
    </div>
  );
};
export default ReturnEventButton;
