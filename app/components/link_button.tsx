"use client";
import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  isExternal?: boolean; //外部リンクかどうかの判断(デフォルトfalse)
  className?: string; //上書きでCSSクラスを指定できる
}
const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  isExternal = false,
  className,
  children,
}) => {
  //外部リンクの場合
  if (isExternal == true) {
    return (
      <div className="flex justify-center">
        <a
          href={href}
          className={`px-12  py-4 text-white bg-main rounded-sm text-body2 shadow_button text-center ${className}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <Link
          href={href}
          className={`px-12  py-4 text-white bg-main rounded-sm text-body2 shadow_button text-center ${className}`}
        >
          {children}{" "}
        </Link>
      </div>
    );
  }
};
export default LinkButton;
