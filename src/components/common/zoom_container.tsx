'use client'

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { ReactNode, useEffect, useRef } from 'react'

type ZoomContainerProps = {
  children: ReactNode
  wrapperStyle?: React.CSSProperties
}

export default function ZoomContainer({ children, wrapperStyle }: ZoomContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('zoomScrollY')
    const savedScrollX = sessionStorage.getItem('zoomScrollX')
    if (containerRef.current) {
      containerRef.current.scrollTop = savedScrollY ? parseInt(savedScrollY, 10) : 0
      containerRef.current.scrollLeft = savedScrollX ? parseInt(savedScrollX, 10) : 0
    }

    const handleScroll = () => {
      if (containerRef.current) {
        sessionStorage.setItem('zoomScrollY', containerRef.current.scrollTop.toString())
        sessionStorage.setItem('zoomScrollX', containerRef.current.scrollLeft.toString())
      }
    }

    const container = containerRef.current
    container?.addEventListener('scroll', handleScroll)

    return () => {
      container?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh', // 画面全体に表示
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch', // iOS 慣性スクロール
        touchAction: 'pan-x pan-y', // タッチ操作によるスクロールを許可
        ...wrapperStyle,
      }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={5}
        wheel={{ step: 0.2 }}
        pinch={{ disabled: false }} // スマホでのピンチズームを有効化
        panning={{ disabled: false }} // ドラッグによる移動も許可
        doubleClick={{ disabled: true }}
      >
        <TransformComponent>
          {children}
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}