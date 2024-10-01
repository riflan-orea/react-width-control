import React, { ReactElement, CSSProperties } from "react";

type MinWidthProps = {
  children: ReactElement;
  size: number;
};

const MinWidth: React.FC<MinWidthProps> = ({ children, size }) => {
  const childStyle = (children.props.style as CSSProperties) || {};
  const combinedStyle: CSSProperties = {
    ...childStyle,
    minWidth: `${size}px`,
  };

  // Check if the child is a React component
  if (
    typeof children.type === "function" ||
    typeof children.type === "object"
  ) {
    return React.cloneElement(children, {
      style: combinedStyle,
    });
  }

  return React.cloneElement(children, {
    style: combinedStyle,
  });
};

export default MinWidth;
