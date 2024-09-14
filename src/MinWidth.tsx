import { createElement, CSSProperties, ReactElement } from "react";

type MinWidthProps = {
  children: ReactElement;
  size: number;
};

const MinWidth = ({ children, size }: MinWidthProps) => {
  const childStyle = children.props.style || {};
  const combinedStyle: CSSProperties = {
    ...childStyle,
    minWidth: `${size}px`,
  };

  return createElement(
    children.type,
    {
      ...children.props,
      style: combinedStyle,
    },
    children.props.children
  );
};

export default MinWidth;
