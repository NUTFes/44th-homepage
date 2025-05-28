'use client';

import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="relative">
      {/* 金色の枠 */}
      <div className="border-4 border-[#D4AF37] bg-white p-2 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.551502862745!2d138.7779765!3d37.424074399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5aedc609c6e15%3A0x75a37d3645c0f37a!2z5Zu956uL5aSn5a2m5rOV5Lq6IOmVt-WyoeaKgOihk-enkeWtpuWkp-Wtpg!5e0!3m2!1sja!2sjp!4v1748408545877!5m2!1sja!2sjp"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="長岡技術科学大学 アクセスマップ"
          className="block"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
