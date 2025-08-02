// components/ImageModal.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({
  src,
  alt,
  width = 300,
  height = 200
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
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

      {isOpen &&
        createPortal(
          <div
            onClick={closeModal}
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
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={800}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: 'none',
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}
