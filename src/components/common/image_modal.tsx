// components/ImageModal.js
'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({
  src,
  alt,
  width = 300, // 初期表示用
  height = 200 // 初期表示用
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* モーダルを開くトリガーとなる画像 */}
      <div
        onClick={openModal}
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
            {/* モーダル内の画像コンテナ */}
            <div
              onClick={(e) => e.stopPropagation()} // 画像クリックでモーダルが閉じないようにイベント伝播を停止
              style={{
                position: 'relative', // Imageのfillプロパティの基準になる
                maxWidth: '90vw', // 画面の幅の90%を最大値とする
                maxHeight: '90vh', // 画面の高さの90%を最大値とする
                width: '100%',     // maxWidth/maxHeightの範囲内で可能な限り幅を広げる
                height: '100%',    // maxWidth/maxHeightの範囲内で可能な限り高さを広げる
                display: 'flex',   // Imageを中央揃えにするため
                justifyContent: 'center',
                alignItems: 'center',
                // オプション: モーダル画像の周りに枠や背景をつけたい場合
                // border: '1px solid white',
                // backgroundColor: 'black',
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill // ★ 最も重要: 親要素いっぱいに画像を広げる
                style={{ objectFit: 'contain' }} // ★ 重要: アスペクト比を維持しつつ、画像がコンテナ内に収まるようにする
                sizes="100vw" // モーダル内の画像はビューポート幅全体を占める可能性が高いので100vw
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}