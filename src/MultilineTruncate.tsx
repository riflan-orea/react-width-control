import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the MultilineTruncate component
 * @property {React.ReactNode} children - The children to apply multi-line text truncation
 * @property {number} lines - The number of lines before truncation
 */

type MultilineTruncateProps = {
  children: React.ReactNode;
  lines: number;
};

const MultilineTruncate = forwardRef<HTMLDivElement, MultilineTruncateProps>(
  ({ children, lines, ...props }, ref: Ref<HTMLDivElement>) => {
    const combinedStyle: CSSProperties = {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lines,
      overflow: 'hidden',
    };

    // Wrap children in a div with multi-line truncation styles
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

MultilineTruncate.displayName = "MultilineTruncate";

export default MultilineTruncate;