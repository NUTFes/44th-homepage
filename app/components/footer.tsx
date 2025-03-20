import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bottom-0 w-full p-4 bg-black min-h-screen">
      <div className="flex justify-center p-4">
        <Image
          src="/icon/44thlogo.png"
          alt="44th-icon"
          width={64}
          height={64}
        />
      </div>
      <div className="flex justify-center gap-[30%] md:gap-[30%] lg:gap-[30%] p-4">
        <Image
          src="/icon/Instagram_Glyph_White.svg"
          alt="instagram-link"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col justify-center p-4 text-body2 text-gray text-center whitespace-pre-wrap">
        <div>協賛企業一覧</div>
        <div>アンケートリンク</div>
        <div>長岡技術科学大学ホームページ</div>
        <div className="p-2 text-white">
          <div>〒940-2188</div>
          <div>新潟県長岡市上富岡町1603-1 長岡技術科学大学</div>
        </div>
      </div>
    </footer>
  );
}
