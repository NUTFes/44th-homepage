import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black flex justify-between pb-4 pt-4 pl-[3%] pr-[3%] shadow_button">
      <div className="flex">
        <Link href={"/pages/top"}>
          <Image
            src="/icon/44thlogo.png"
            alt="44th_icon"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex">
        <Image src="/icon/BiMenu.svg" alt="menu" width={32} height={32} />
      </div>
    </header>
  );
}
