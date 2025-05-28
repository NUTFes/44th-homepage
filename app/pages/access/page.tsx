import TextStyle from '../../components/text_style';
import GoogleMap from './components/googlemap';

export default function AccessPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-base py-12">
      <div className="text-center mb-4">
        <h1 className="mb-6">
          <TextStyle styleType="title">アクセス</TextStyle>
        </h1>
        <h2 className="mb-2">
          <TextStyle styleType="section_title">大学Googleマップ</TextStyle>
        </h2>
      </div>
      <GoogleMap />
    </div>
  );
}
