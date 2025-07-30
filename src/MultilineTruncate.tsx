import React, {
    ReactElement,
    CSSProperties,
    forwardRef,
    Ref,
    createElement,
  } from "react";
  
  /**
   * Props for the MultilineTruncate component
   * @property {ReactElement} children - The children to apply multi-line text truncation
   * @property {number} lines - The number of lines before truncation
   */
  
  type MultilineTruncateProps = {
    children: ReactElement;
    lines: number;
  };
  
  const MultilineTruncate = forwardRef<HTMLDivElement, MultilineTruncateProps>(
    ({ children, lines, ...props }, ref: Ref<HTMLDivElement>) => {
      const childStyle = (children.props.style as CSSProperties) || {};
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
  
      // Apply multi-line truncation for native HTML elements
      return createElement(children.type, {
        ...children.props,
        style: combinedStyle,
      });
    }
  );
  
  MultilineTruncate.displayName = "MultilineTruncate";
  
  export default MultilineTruncate;