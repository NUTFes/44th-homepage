import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ZoomableImageProps {
  children?: React.ReactNode;
}

function ZoomableImage({ children }: ZoomableImageProps) {
  return (
    <TransformWrapper initialScale={1}>
      <TransformComponent>
        {/* TransformComponent の内部に position: relative の div を追加 */}
        <div className="border-2 border-main rounded-sm shadou_button">
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default ZoomableImage;
