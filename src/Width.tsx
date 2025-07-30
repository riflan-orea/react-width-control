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
   * @property {boolean} [truncate] - Enable single-line text truncation with ellipsis
   * @property {number} [truncateLines] - Number of lines for multi-line truncation (1 = single-line)
   * @property {string} [truncateEllipsis] - Custom ellipsis text (default: "...")
   */
  
  type WidthProps = {
    children: ReactElement;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    truncate?: boolean;
    truncateLines?: number;
    truncateEllipsis?: string;
  };
  
  const Width = forwardRef<HTMLDivElement, WidthProps>(
    ({ 
      children, 
      minWidth, 
      maxWidth, 
      width, 
      truncate = false,
      truncateLines,
      truncateEllipsis = "...",
      ...props 
    }, ref: Ref<HTMLDivElement>) => {
      const childStyle = (children.props.style as CSSProperties) || {};
  
      // Base width constraints
      const widthConstraints: CSSProperties = {
        ...(minWidth !== undefined && { minWidth: `${minWidth}px` }),
        ...(maxWidth !== undefined && { maxWidth: `${maxWidth}px` }),
        ...(width !== undefined && { width: `${width}px` }),
      };
  
      // Truncation styles
      const truncationStyles: CSSProperties = {};
      
      if (truncate || truncateLines) {
        const lines = truncateLines || (truncate ? 1 : undefined);
        
        if (lines === 1 || (!lines && truncate)) {
          // Single-line truncation
          truncationStyles.overflow = 'hidden';
          truncationStyles.textOverflow = 'ellipsis';
          truncationStyles.whiteSpace = 'nowrap';
        } else if (lines && lines > 1) {
          // Multi-line truncation
          truncationStyles.display = '-webkit-box';
          truncationStyles.WebkitLineClamp = lines;
          truncationStyles.WebkitBoxOrient = 'vertical';
          truncationStyles.overflow = 'hidden';
          truncationStyles.textOverflow = 'ellipsis';
        }
      }
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        ...widthConstraints,
        ...truncationStyles,
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
  
      // Apply width constraints and truncation for native HTML elements
      return createElement(children.type, {
        ...children.props,
        style: combinedStyle,
      });
    }
  );
  
  Width.displayName = "Width";
  
  export default Width;