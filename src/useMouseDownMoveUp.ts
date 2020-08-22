import * as React from "react";

//
/***
 * 没时间写example了, 后面补上
 *  注意!!! : onMouseMove 和 onMouseUp 如果使用React.useCallback, 会引发闭包问题
 *  所以最终定义 onMouseXX 的组件, 应该使用 class 组件
 */
export const useMouseDownMoveUp = ({
  onMouseMove,
  onMouseUp,
  cursor,
  startPointRef
}: {
  onMouseMove: ({
    dx,
    dy,
    x,
    y
  }: {
    dx: number;
    dy: number;
    x: number;
    y: number;
  }) => void;
  onMouseUp?: ({
    dx,
    dy,
    x,
    y
  }: {
    dx: number;
    dy: number;
    x: number;
    y: number;
  }) => void;
  cursor?: string;
  startPointRef: React.MutableRefObject<{ x: number; y: number }>;
}): {
  handleMouseDown: (e: React.MouseEvent) => void;
} => {
  const hasDownRef = React.useRef<boolean>(false);
  const pos0Ref = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    document.body.style.cursor = cursor || "move";
    pos0Ref.current = { x: e.clientX, y: e.clientY };
    hasDownRef.current = true;
  }, []);

  React.useEffect(() => {
    function getResult(e: React.MouseEvent, p0: { x: number; y: number }) {
      const dx = e.clientX - pos0Ref.current.x;
      const dy = e.clientY - pos0Ref.current.y;
      const x = p0.x + dx;
      const y = p0.y + dy;
      return { dx, dy, x, y };
    }

    function handleMouseMove(e: React.MouseEvent) {
      e.preventDefault();
      const p0 = startPointRef.current;
      if (hasDownRef.current) {
        onMouseMove(getResult(e, p0));
      }
    }

    function handleMouseUp(e: React.MouseEvent) {
      const p0 = startPointRef.current;
      document.body.style.cursor = "default";
      onMouseUp && onMouseUp(getResult(e, p0));
      hasDownRef.current = false;
    }

    document.body.addEventListener("mousemove", handleMouseMove as any);
    document.body.addEventListener("mouseup", handleMouseUp as any);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove as any);
      document.body.removeEventListener("mouseup", handleMouseUp as any);
    };
  });

  return { handleMouseDown };
};
