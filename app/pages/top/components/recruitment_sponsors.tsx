"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import TextStyle from '@/app/components/text_style';
import Line from '@/app/components/line';
import Frame from '@/app/components/frame';
import { GoCopy } from "react-icons/go";
import { FaRegCopy } from 'react-icons/fa';

const RecruitmentSponsors: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // メールアドレスのスパム対策
  const emailName = "nutfes_shogai_kyosan";
  const emailDomain = "googlegroups.com";
  
  const handleCopyEmail = () => {
    // 直接メールアドレスを構築
    const email = `${emailName}@${emailDomain}`;
    
    // クリップボードにコピー
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('メールアドレスのコピーに失敗しました', err);
      });
  };

  return (
    <Frame>
      <div className="text-center w-full">
        <TextStyle styleType="section_title">企業協賛大募集！</TextStyle>
      </div>
      
      <Line className="border-main w-full my-4" />
      
      <div className="flex flex-col gap-4">
        <div className="text-font_main text-body3">
          <p>技大祭実行委員会では、活気あふれる大学祭の実現に向け、皆様からの力強いご支援を賜りたく、ご協賛のお願いをしております。</p>
          <p className="mt-2">ご関心をお持ちいただけましたら、こちらの資料をご覧いただき、ご検討いただけますと幸いです。</p>
        </div>
        
        {/* 資料を見るボタン */}
        <Link href="https://drive.google.com/drive/u/0/folders/15rxDMxk7GcWHYNMCwtlqw6kEP4-K2jKk" target="_blank" rel="noopener noreferrer" className="w-full">
          <button className="w-full bg-main hover:bg-second text-white py-4 rounded flex items-center transition-colors shadow_button">
            <div className="pl-4 flex items-center justify-center w-12">
              <GoCopy className="text-xl text-white" />
            </div>
            <div className="flex-grow text-center">
              <div className="text-white text-body1 font-noto">資料を見る</div>
            </div>
          </button>
        </Link>
        
        <Line className="border-main w-full my-2" />
        
        <div className="flex flex-col gap-3">
          <p className="text-font_main text-body3">協賛のお問い合わせは、こちらのメールアドレスからご連絡ください。</p>
          
          {/* メールアドレスをコピーボタン*/}
          <button 
            onClick={handleCopyEmail} 
            className="w-full bg-font_link hover:bg-opacity-80 text-white py-4 rounded flex items-center relative transition-colors shadow_button"
            aria-label="メールアドレスをコピー"
          >
            <div className="pl-4 flex items-center justify-center w-12">
              <FaRegCopy className="text-xl text-white" />
            </div>
            <div className="flex-grow text-center">
              <div className="text-white text-body2 font-noto">メール<span className="no-spam">xyz123</span>アドレス<span className="no-spam">abc456</span>をコピー</div>
            </div>
          </button>
          
          {copied && (
            <div className="text-sm text-main text-center font-bold mt-1">
              コピーしました
            </div>
          )}
        </div>
      </div>
    </Frame>
  );
};

export default RecruitmentSponsors;
