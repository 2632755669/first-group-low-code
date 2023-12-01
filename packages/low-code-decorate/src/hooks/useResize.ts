import { useState, useCallback, useEffect } from 'react';

interface ResizeState {
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
}

export function useResize(
  elementRef: React.RefObject<HTMLDivElement>
) {
  const [resizeState, setResizeState] = useState<ResizeState>({
    startX: 0,
    startY: 0, 
    startWidth: 0,
    startHeight: 0
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!resizeState.startX) return;

      const { startX, startY, startWidth, startHeight } = resizeState;

      elementRef.current!.style.width = 
        `${startWidth + (e.pageX - startX)}px`;

      elementRef.current!.style.height =
         `${startHeight + (e.pageY - startY)}px`;

    },
    [resizeState, elementRef]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setResizeState({
        startX: e.pageX,
        startY: e.pageY,
        startWidth: elementRef.current!.offsetWidth, 
        startHeight: elementRef.current!.offsetHeight  
      });
      elementRef.current!.addEventListener('mousemove', handleMouseMove as any)
    },
    [elementRef, handleMouseMove]
  );

  const handleMouseUp = useCallback(() => {
    elementRef.current!.removeEventListener('mousemove', handleMouseMove as any);
  }, [elementRef, handleMouseMove])

  useEffect(() => {
    if (!elementRef?.current) return;
    handleMouseUp(); 
  }, [handleMouseUp, elementRef])

  // ...

  return {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove
  };
}