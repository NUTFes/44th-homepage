"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 5月時点の公開用に、一時的にリンクを無効化するためのフラグ
// 後で有効にする場合は、これをfalseに変更するだけ
const DISABLE_LINKS_TEMPORARILY = true;

export default function Header() {
  // メニューの開閉状態を管理するための状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの開閉を切り替える関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between pb-4 pt-4 pl-[3%] pr-[3%] bg-gradient-to-b from-header_grad bg-blend-darken z-50">
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
        <button onClick={toggleMenu} aria-label="メニューを開く">
          <Image src="/icon/BiMenu.svg" alt="menu" width={32} height={32} />
        </button>
      </div>

      {/* メニューが開いた時の背景オーバーレイ */}
      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-50 transform transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* メニューの内容 */}
      <div
        className={`fixed top-0 right-0 h-screen bg-black w-64 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto z-50`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
            aria-label="メニューを閉じる"
          >
            ✕
          </button>
        </div>

        {/* メニューリンク */}
        <nav className="flex flex-col text-white px-6 space-y-5">
          {/* トップページへのリンクは常に有効 */}
          <Link href="/pages/top" onClick={toggleMenu} className="text-lg">
            トップ
          </Link>

          {/* 他のメニュー項目は条件によって有効/無効を切り替え */}
          {!DISABLE_LINKS_TEMPORARILY ? (
            // 通常時の完全なメニュー（すべてのリンクが有効）
            <>
              <Link
                href="/pages/greeting"
                onClick={toggleMenu}
                className="text-lg"
              >
                代表者挨拶
              </Link>
              <Link
                href="/pages/access"
                onClick={toggleMenu}
                className="text-lg"
              >
                アクセス
              </Link>
              <Link href="/pages/map" onClick={toggleMenu} className="text-lg">
                マップ
              </Link>

              <div className="space-y-3">
                <div className="text-lg">
                  <Link
                    href="/pages/event"
                    onClick={toggleMenu}
                    className="flex items-center"
                  >
                    イベント
                  </Link>
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/pages/event/guest"
                    onClick={toggleMenu}
                    className="flex items-center"
                  >
                    <span className="mr-2">◆</span> ゲスト
                  </Link>
                  <Link
                    href="/pages/event/plan"
                    onClick={toggleMenu}
                    className="flex items-center"
                  >
                    <span className="mr-2">◆</span> 企画
                  </Link>
                  <Link
                    href="/pages/event/exh_exp"
                    onClick={toggleMenu}
                    className="flex items-center"
                  >
                    <span className="mr-2">◆</span> 展示・体験
                  </Link>
                  <Link
                    href="#"
                    onClick={toggleMenu}
                    className="flex items-center"
                  >
                    <span className="mr-2">◆</span> タイムスケジュール
                  </Link>
                </div>
              </div>

              <Link href="/pages/food" onClick={toggleMenu} className="text-lg">
                飲食
              </Link>
              <Link href="/pages/sale" onClick={toggleMenu} className="text-lg">
                物品販売
              </Link>
              <Link
                href="/pages/corpolate_booth"
                onClick={toggleMenu}
                className="text-lg"
              >
                企業ブース
              </Link>
              <Link
                href="/pages/sponsoring_corpolate"
                onClick={toggleMenu}
                className="text-lg"
              >
                協賛企業一覧
              </Link>
            </>
          ) : (
            // 5月時点公開用の制限されたメニュー（リンクが無効で灰色表示）
            <>
              <div className="text-lg text-gray">代表者挨拶</div>
              <div className="text-lg text-gray">アクセス</div>
              <div className="text-lg text-gray">マップ</div>

              <div className="space-y-3">
                <div className="text-lg text-gray">イベント</div>
                <div className="pl-4 space-y-2 text-gray">
                  <div className="flex items-center">
                    <span className="mr-2">◆</span> ゲスト
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">◆</span> 企画
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">◆</span> 展示・体験
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">◆</span> タイムスケジュール
                  </div>
                </div>
              </div>

              <div className="text-lg text-gray">飲食</div>
              <div className="text-lg text-gray">物品販売</div>
              <div className="text-lg text-gray">企業ブース</div>
              <div className="text-lg text-gray">協賛企業一覧</div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
