// components/ImageModal.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({
  src,
  alt,
  width = 300, // 初期表示用
  height = 200, // 初期表示用
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* モーダルを開くトリガーとなる画像 */}
      <div
        onClick={openModal} // このクリックでモーダルを開く
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* モーダルのコンテンツ (ポータルで描画) */}
      {isOpen &&
        createPortal(
          <div
            onClick={closeModal} // 背景クリックでモーダルを閉じる
            onTouchStart={closeModal} // スマホでのタップを確実に検出
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              cursor: 'pointer', // 背景がクリック可能であることを示す
            }}
          >
            {/* モーダル内の画像コンテナと閉じるボタンを囲むラッパー */}
            <div
              onClick={(e) => e.stopPropagation()} // この領域内でのクリックは背景に伝播させない
              onTouchStart={(e) => e.stopPropagation()} // この領域内でのタップも背景に伝播させない
              style={{
                position: 'relative', // 画像コンテナと閉じるボタンのposition: absoluteの基準となる
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black', // 画像コンテナの背景色（任意）
                // オプション: モーダル画像の周りに枠などをつけたい場合
                // border: '1px solid white',
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="100vw"
              />

              {/* × 閉じるボタン */}
              <button
                onClick={closeModal} // ボタンクリックでモーダルを閉じる
                style={{
                  position: 'absolute',
                  top: '10px', // 上からの位置
                  right: '10px', // 右からの位置

                  color: 'white',
                  border: 'none',

                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  zIndex: 10000, // 他の要素より手前に表示
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)', // オプション: 影
                }}
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
