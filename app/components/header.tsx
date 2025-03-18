import Image from "next/image";
export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-black flex justify-between p-4">
        <div className="flex">
            <Image 
            src="/icon/44thlogo.png"
            alt="44th_icon"
            width={40}
            height={40}
            />
        </div>
        <div className="flex">
            <Image 
            src="/icon/BiMenu.svg"
            alt="menu"
            width={32}
            height={32}
            />
        </div>
      </header>
    );
  }