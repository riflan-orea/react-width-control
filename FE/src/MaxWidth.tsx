import React, {
    ReactElement,
    CSSProperties,
    forwardRef,
    Ref,
    createElement,
  } from "react";
  
  /**
   * Props for the MaxWidth component
   * @property {ReactElement} children - The children to apply the max-width
   * @property {number} size - The size of the max-width
   */
  
  type MaxWidthProps = {
    children: ReactElement;
    size: number;
  };
  
  const MaxWidth = forwardRef<HTMLDivElement, MaxWidthProps>(
    ({ children, size, ...props }, ref: Ref<HTMLDivElement>) => {
      const childStyle = (children.props.style as CSSProperties) || {};
      const maxWidthValue = `${size}px`;
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        maxWidth: maxWidthValue,
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
  
      // Apply max-width for native HTML elements
      return createElement(children.type, {
        ...children.props,
        style: combinedStyle,
      });
    }
  );
  
  MaxWidth.displayName = "MaxWidth";
  
  export default MaxWidth;