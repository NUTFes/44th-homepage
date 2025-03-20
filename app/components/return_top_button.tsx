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
        width={56}
        height={56}
        className="shadow_button"
      />
    </button>
  );
};

export default ReturnTopButton;
