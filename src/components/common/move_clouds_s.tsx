import Image from 'next/image';

type MoveCloudsSProps = {
  speed?: number; // 秒数
  speed2nd?: number; // 2枚目の雲の秒数
};

const MoveCloudsS: React.FC<MoveCloudsSProps> = ({
  speed = 70,
  speed2nd = 70,
}) => {
  return (
    <div>
      {/* アニメーションする雲 */}
      <div className="h-full w-full translate-x-0 fixed overflow-hidden">
        <div
          className="absolute top-0 left-0 animate-move-clouds translate-x-0 opacity-80"
          style={{
            width: '1300px',
            height: '540px',
            animationDuration: `${speed}s`,
          }}
        >
          {/*重ねて表示させるために↑こちらのみabsoluteを設定*/}
          <Image
            src="/hero_header/cloud_s.svg"
            alt="流れる雲"
            width={1920} // 必要に応じて適切な幅を指定
            height={540} // 必要に応じて適切な高さを指定
            layout="intrinstic"
          />
        </div>
        <div
          className="top-0 left-0 animate-move-clouds-2nd translate-x-0 opacity-80"
          style={{
            width: '1300px',
            height: '540px',
            animationDuration: `${speed2nd}s`,
          }}
        >
          <Image
            src="/hero_header/cloud_s.svg"
            alt="流れる雲"
            width={1920} // 必要に応じて適切な幅を指定
            height={540} // 必要に応じて適切な高さを指定
            layout="intrinstic"
          />
        </div>
      </div>
    </div>
  );
};

export default MoveCloudsS;
