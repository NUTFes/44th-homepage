import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 bg-header_footer min-h-screen">
      <div className="flex justify-center p-4">
        <Link href={"/pages/top"}>
          <Image
            src="/icon/44thlogo.png"
            alt="44th-icon"
            width={64}
            height={64}
          />
        </Link>
      </div>
      <div className="flex justify-center gap-[30%] md:gap-[30%] lg:gap-[30%] p-4">
      <a
          href="https://www.instagram.com/nutfes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/x_logo.svg"
            alt="X-link"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://x.com/nut_fes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/Instagram_Glyph_White.svg"
            alt="instagram-link"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://www.facebook.com/people/%E9%95%B7%E5%B2%A1%E6%8A%80%E8%A1%93%E7%A7%91%E5%AD%A6%E5%A4%A7%E5%AD%A6%E6%8A%80%E5%A4%A7%E7%A5%AD%E5%AE%9F%E8%A1%8C%E5%A7%94%E5%93%A1%E4%BC%9A/61570063509591/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon/facebook_logo.svg"
            alt="facebook-link"
            width={50}
            height={50}
          />
        </a>
      </div>
      <div className="flex flex-col justify-center p-4 text-body2 text-gray text-center whitespace-pre-wrap">
        <div>協賛企業一覧</div>
        <div>アンケートリンク</div>
        <a
          href="https://www.nagaokaut.ac.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white hover:underline hover:text-main">
            長岡技術科学大学ホームページ
          </div>
        </a>

        <div className="p-6 text-white">
          <div>〒940-2188</div>
          <div>新潟県長岡市上富岡町1603-1 長岡技術科学大学</div>
        </div>
      </div>
    </footer>
  );
}
