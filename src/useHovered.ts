import * as React from "react";

export const useHovered = () => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setHovered(false);
  }, []);
  return { hovered, handleMouseLeave, handleMouseEnter };
};
