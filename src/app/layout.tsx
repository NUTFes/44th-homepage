import type { Metadata } from 'next';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import MoveClouds from '../components/common/move_clouds';
import ReturnTopButton from '../components/common/return_top_button';
import { newTegomin, notoSansJP } from '../utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: '第44回技大祭ホームページ',
  description:
    '第44回技大祭の公式ホームページです。技大祭の最新情報やイベント情報、参加方法などを掲載しています。9/13,14の2日間、技術大学祭を開催します！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen ${notoSansJP.className} ${notoSansJP.variable} ${newTegomin.variable} antialiased`}
      >
        <div className="fixed inset-0 bg-[url('/hero_header/hero_header.svg')] bg-cover bg-center z-[-100]"></div>
        <div className="absolute -z-10">
          <MoveClouds />
        </div>

        <Header />
        <div className="mt-20 z-20">
          <div>
            <ReturnTopButton />
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
