"use client";
import Image from "next/image";
const ReturnTopButton = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={returnTop}>
      <Image
        src="/icon/return_top_button.svg"
        alt="return_top_button"
        width={70}
        height={70}
      />
    </button>
  );
};

export default ReturnTopButton;
