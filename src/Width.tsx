import React, {
    ReactElement,
    CSSProperties,
    forwardRef,
    Ref,
    createElement,
  } from "react";
  
  /**
   * Props for the Width component
   * @property {ReactElement} children - The children to apply the width constraints
   * @property {number} [minWidth] - The minimum width in pixels
   * @property {number} [maxWidth] - The maximum width in pixels
   * @property {number} [width] - The exact width in pixels
   */
  
  type WidthProps = {
    children: ReactElement;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
  };
  
  const Width = forwardRef<HTMLDivElement, WidthProps>(
    ({ children, minWidth, maxWidth, width, ...props }, ref: Ref<HTMLDivElement>) => {
      const childStyle = (children.props.style as CSSProperties) || {};
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        ...(minWidth !== undefined && { minWidth: `${minWidth}px` }),
        ...(maxWidth !== undefined && { maxWidth: `${maxWidth}px` }),
        ...(width !== undefined && { width: `${width}px` }),
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
  
      // Apply width constraints for native HTML elements
      return createElement(children.type, {
        ...children.props,
        style: combinedStyle,
      });
    }
  );
  
  Width.displayName = "Width";
  
  export default Width;