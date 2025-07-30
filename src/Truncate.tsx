import React, {
    ReactElement,
    CSSProperties,
    forwardRef,
    Ref,
    createElement,
  } from "react";
  
  /**
   * Props for the Truncate component
   * @property {ReactElement} children - The children to apply text truncation
   */
  
  type TruncateProps = {
    children: ReactElement;
  };
  
  const Truncate = forwardRef<HTMLDivElement, TruncateProps>(
    ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
      const childStyle = (children.props.style as CSSProperties) || {};
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
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
  
      // Apply truncation for native HTML elements
      return createElement(children.type, {
        ...children.props,
        style: combinedStyle,
      });
    }
  );
  
  Truncate.displayName = "Truncate";
  
  export default Truncate;