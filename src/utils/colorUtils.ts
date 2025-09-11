// 番号文字列からアルファベット部分を抽出する関数
const extractAlphabetPrefix = (roomNumber: string): string => {
  // 最後のアルファベット+数字の組み合わせ（例：G3, E8, F1など）を抽出
  const match = roomNumber.match(/[A-Z]\d+(?:\s|$)/);
  if (match) {
    return match[0].charAt(0); // アルファベット部分のみを返す
  }
  
  // 上記でマッチしない場合は、単独のアルファベットを探す
  const singleMatch = roomNumber.match(/\b[A-Z]\b/);
  if (singleMatch) {
    return singleMatch[0];
  }
  
  // それでもマッチしない場合は最初のアルファベットを返す
  const firstMatch = roomNumber.match(/[A-Z]/);
  return firstMatch ? firstMatch[0] : '';
};

// 番号からカラークラスを決定する関数
export const getColorByRoomNumber = (roomNumber: string): string => {
  if (!roomNumber) return 'text-font_main';
  
  const prefix = extractAlphabetPrefix(roomNumber.toUpperCase());
  
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
  
  const prefix = extractAlphabetPrefix(roomNumber.toUpperCase());
  
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
