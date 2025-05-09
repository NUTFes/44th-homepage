import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 bg-header_footer min-h-screen">
      <div className="flex justify-center p-4">
        <Link href={"/"}>
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
          href="https://x.com/nut_fes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icon/x_logo.svg" alt="X-link" width={50} height={50} />
        </a>
        <a
          href="https://www.instagram.com/nutfes/"
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
          href="https://www.facebook.com/profile.php?id=61570063509591"
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
