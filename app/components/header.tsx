import Image from "next/image";
export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-black flex justify-between p-4">
        <div className="flex">
            <img src="../public/icon/44thlogo.png" />
        </div>
        <div className="flex">
            <img src="../public/icon/BiMenu.svg" />
        </div>
      </header>
    );
  }