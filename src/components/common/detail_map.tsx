import Link from 'next/link';

type DetailMapProps = {
  location: string;
};

const DetailMap = ({ location }: DetailMapProps) => {
  return (
    <div className="border-4 border-yellow-400 p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">開催場所</h2>
      <p className="text-xl text-center mb-4">{location}</p>
      {/* Map image placeholder */}
      <div className="bg-gray-200 w-full h-64 flex items-center justify-center mb-4">
        地図画像
      </div>
      <Link
        href="/map"
        className="block w-full bg-yellow-500 text-white text-center py-3 rounded-md font-bold"
      >
        マップページへ
      </Link>
    </div>
  );
};

export default DetailMap;
