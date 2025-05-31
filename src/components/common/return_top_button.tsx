'use client';
import Image from 'next/image';
const ReturnTopButtonImage = '/icon/return_top_bbutton.svg';
const ReturnTopButton = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={returnTop} className="fixed bottom-4 right-4 z-[99]">
      <Image
        src={ReturnTopButtonImage}
        alt="return_top_button"
        width={70}
        height={70}
      />
    </button>
  );
};

export default ReturnTopButton;
