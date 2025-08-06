import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the MinWidth component
 * @property {React.ReactNode} children - The children to apply the min-width
 * @property {number} size - The size of the min-width
 */

type MinWidthProps = {
  children: React.ReactNode;
  size: number;
};

const MinWidth = forwardRef<HTMLDivElement, MinWidthProps>(
  ({ children, size, ...props }, ref: Ref<HTMLDivElement>) => {
    const minWidthValue = `${size}px`;

    const combinedStyle: CSSProperties = {
      minWidth: minWidthValue,
    };

    // Wrap children in a div with min-width constraint
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

MinWidth.displayName = "MinWidth";

export default MinWidth;