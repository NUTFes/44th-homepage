"use client";

import React, { useState } from 'react';
import TextStyle from '@/app/components/text_style';
import Line from '@/app/components/line';
import Frame from '@/app/components/frame';
import { FaFileAlt } from "react-icons/fa";
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
        <div className="text-font_main text-body2">
          <p>技大祭実行委員会では、企業の皆さまからのご協賛を募集しております。</p>
          <p className="mt-2">ご関心をお持ちの方は、以下の資料をご覧いただき、メールにてご連絡ください。</p>
        </div>
        
        {/* 資料を見るボタン */}
        <button className="w-full bg-main hover:bg-second text-white py-3 rounded flex items-center transition-colors">
          <div className="pl-4 flex items-center justify-center w-12">
            <FaFileAlt className="text-xl text-white" />
          </div>
          <div className="flex-grow text-center font-bold">資料を見る</div>
        </button>
        
        <Line className="border-main w-full my-2" />
        
        <div className="flex flex-col gap-3">
          <p className="text-font_main text-body2">協賛のお問い合わせは、以下のメールアドレスからご連絡ください。</p>
          
          {/* メールアドレスをコピーボタン*/}
          <button 
            onClick={handleCopyEmail} 
            className="w-full bg-font_link hover:bg-opacity-80 text-white py-3 rounded flex items-center relative transition-colors"
            aria-label="メールアドレスをコピー"
          >
            <div className="pl-4 flex items-center justify-center w-12">
              <FaRegCopy className="text-xl text-white" />
            </div>
            <div className="flex-grow text-center font-bold">
              メール<span className="no-spam">xyz123</span>アドレス<span className="no-spam">abc456</span>をコピー
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
