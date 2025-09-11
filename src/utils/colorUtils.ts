// 番号からカラークラスを決定する関数
export const getColorByRoomNumber = (roomNumber: string): string => {
  if (!roomNumber) return 'text-font_main';
  
  const prefix = roomNumber.charAt(0).toUpperCase();
  
  switch (prefix) {
    case 'A': return 'text-area-a'; // 事務棟エリア - #C44C2B
    case 'B': return 'text-area-b'; // 図書館エリア - #346482
    case 'C': return 'text-area-c'; // 電気棟エリア - #4C7343
    case 'D': return 'text-area-d'; // 屋外ステージエリア - #A37C1C
    case 'E': return 'text-area-e'; // 機械建設棟エリア - #602976
    case 'F': return 'text-area-f'; // F系列 - #386A77
    case 'G': return 'text-area-g'; // G系列 - #D33726
    case 'キ': return 'text-area-kitchen'; // キッチンカー系列 - #2A3E76
    default: return 'text-font_main'; // デフォルト
  }
};

// タグのボーダーカラーも連動させる関数
export const getBorderColorByRoomNumber = (roomNumber: string): string => {
  if (!roomNumber) return 'border-accent';
  
  const prefix = roomNumber.charAt(0).toUpperCase();
  
  switch (prefix) {
    case 'A': return 'border-area-a'; // 事務棟エリア - #C44C2B
    case 'B': return 'border-area-b'; // 図書館エリア - #346482
    case 'C': return 'border-area-c'; // 電気棟エリア - #4C7343
    case 'D': return 'border-area-d'; // 屋外ステージエリア - #A37C1C
    case 'E': return 'border-area-e'; // 機械建設棟エリア - #602976
    case 'F': return 'border-area-f'; // F系列 - #386A77
    case 'G': return 'border-area-g'; // G系列 - #D33726
    case 'キ': return 'border-area-kitchen'; // キッチンカー系列 - #2A3E76
    default: return 'border-accent'; // デフォルト
  }
};
