import React, {
  ReactElement,
  CSSProperties,
  forwardRef,
  Ref,
  createElement,
} from "react";

/**
 * Props for the MinWidth component
 * @property {ReactElement} children - The children to apply the min-width
 * @property {number} size - The size of the min-width
 */

type MinWidthProps = {
  children: ReactElement;
  size: number;
};

const MinWidth = forwardRef<HTMLDivElement, MinWidthProps>(
  ({ children, size, ...props }, ref: Ref<HTMLDivElement>) => {
    const childStyle = (children.props.style as CSSProperties) || {};
    const minWidthValue = `${size}px`;

    const combinedStyle: CSSProperties = {
      ...childStyle,
      minWidth: minWidthValue,
    };

    // if children is react component
    if (
      typeof children.type === "function" ||
      typeof children.type === "object"
    ) {
      return (
        <div ref={ref} style={combinedStyle} {...props}>
          {children}
        </div>
      );
    }

    // Apply min-width for native HTML elements
    return createElement(children.type, {
      ...children.props,
      style: combinedStyle,
    });
  }
);

MinWidth.displayName = "MinWidth";

export default MinWidth;