import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the Width component
 * @property {React.ReactNode} children - The children to apply the width constraints
 * @property {number} [minWidth] - The minimum width in pixels
 * @property {number} [maxWidth] - The maximum width in pixels
 * @property {number} [width] - The exact width in pixels
 * @property {boolean} [truncate] - Enable single-line text truncation with ellipsis
 * @property {number} [truncateLines] - Number of lines for multi-line truncation (1 = single-line)
 * @property {string} [truncateEllipsis] - Custom ellipsis text (default: "...")
 */

type WidthProps = {
  children: React.ReactNode;
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
        truncationStyles.WebkitBoxOrient = 'vertical';
        truncationStyles.WebkitLineClamp = lines;
        truncationStyles.overflow = 'hidden';
      }
    }

    const combinedStyle: CSSProperties = {
      ...widthConstraints,
      ...truncationStyles,
    };

    // Wrap children in a div with width constraints and truncation styles
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

Width.displayName = "Width";

export default Width;