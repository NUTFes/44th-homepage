import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ZoomableImageProps {
  children?: React.ReactNode;
}

function ZoomableImage({ children }: ZoomableImageProps) {
  return (
     <div className="border-2 border-accent rounded-sm shadou_button">
    <TransformWrapper initialScale={1}>
      <TransformComponent>
        {/* TransformComponent の内部に position: relative の div を追加 */}
       
          {children}
   
      </TransformComponent>
    </TransformWrapper>
         </div>
  );
}

export default ZoomableImage;
