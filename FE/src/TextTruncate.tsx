import React from 'react';
import type { ReactElement, CSSProperties, Ref } from 'react';
import { forwardRef, createElement } from 'react';
  
  /**
   * Props for the TextTruncate component
   * @property {ReactElement} children - The children to apply text truncation
   * @property {number} [lines] - The number of lines before truncation. If not provided, defaults to single-line truncation
   */
  
  type TextTruncateProps = {
    children: ReactElement;
    lines?: number;
  };
  
  const TextTruncate = forwardRef<HTMLDivElement, TextTruncateProps>(
    ({ children, lines, ...props }, ref: Ref<HTMLDivElement>) => {
      // @ts-ignore - children.props.style exists but TypeScript doesn't know the type
      const childStyle = (children.props?.style as CSSProperties) || {};
  
      // Single-line truncation
      const singleLineStyle: CSSProperties = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      };
  
      // Multi-line truncation
      const multiLineStyle: CSSProperties = {
        display: '-webkit-box',
        WebkitLineClamp: lines!,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
  
      const combinedStyle: CSSProperties = {
        ...childStyle,
        ...(lines && lines > 1 ? multiLineStyle : singleLineStyle),
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
      // @ts-ignore - createElement expects specific props but we're passing dynamic ones
      return createElement(children.type, {
        ...(children.props as Record<string, unknown>),
        style: combinedStyle,
      });
    }
  );
  
  TextTruncate.displayName = "TextTruncate";
  
  export default TextTruncate;