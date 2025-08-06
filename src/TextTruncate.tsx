import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the TextTruncate component
 * @property {React.ReactNode} children - The text content to apply truncation
 * @property {number} [lines] - The number of lines before truncation. If not provided, defaults to single-line truncation
 */

type TextTruncateProps = {
  children: React.ReactNode;
  lines?: number;
};

const TextTruncate = forwardRef<HTMLDivElement, TextTruncateProps>(
  ({ children, lines, ...props }, ref: Ref<HTMLDivElement>) => {
    // Single-line truncation
    const singleLineStyle: CSSProperties = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      margin: 0,
      padding: 0,
    };

    // Multi-line truncation
    const multiLineStyle: CSSProperties = {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lines!,
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    };

    const combinedStyle: CSSProperties = {
      ...(lines && lines > 1 ? multiLineStyle : singleLineStyle),
    };

    // Wrap children in a div with truncation styles and no spacing
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

TextTruncate.displayName = "TextTruncate";

export default TextTruncate;