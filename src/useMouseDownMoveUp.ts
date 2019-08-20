import * as React from 'react';

// 没时间写example了, 后面补上
export const useMouseDownMoveUp = ({
  onMouseMove,
  onMouseUp
}: {
  onMouseMove: ({ dx, dy }: { dx: number; dy: number }) => void;
  onMouseUp: () => void;
}): {
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseUp: (e: React.MouseEvent) => void;
} => {
  const pos0Ref = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const dx = e.clientX - pos0Ref.current.x;
    const dy = e.clientY - pos0Ref.current.y;
    onMouseMove({ dx, dy });
  }, []);

  const handleMouseUp = React.useCallback((e: React.MouseEvent) => {
    document.body.style.cursor = 'default';
    onMouseUp();
    document.body.removeEventListener('mousemove', handleMouseMove as any);
    document.body.removeEventListener('mouseup', handleMouseUp as any);
    document.body.removeEventListener('mouseup', handleMouseDown as any);
  }, []);

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    document.body.style.cursor = 'col-resize';
    e.preventDefault();
    pos0Ref.current = { x: e.clientX, y: e.clientY };
    document.body.addEventListener('mousemove', handleMouseMove as any);
    document.body.addEventListener('mouseup', handleMouseUp as any);
  }, []);

  return { handleMouseDown, handleMouseUp };
};
