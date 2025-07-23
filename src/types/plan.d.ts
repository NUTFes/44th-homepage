export interface PlanItem {
  番号: string;
  企画名: string;
  PR文: string;
  画像URL: string;
  '開催場所（晴れ）': string;
  '開催場所（雨）': string;
  タグ: string;
  参加応募URL?: string;
  '1日目(晴)開始時刻': string;
  '1日目(晴)終了時刻': string;
  '1日目(雨)開始時刻': string;
  '1日目(雨)終了時刻': string;
  '2日目(晴)開始時刻': string;
  '2日目(晴)終了時刻': string;
  '2日目(雨)開始時刻': string;
  '2日目(雨)終了時刻': string;
}
