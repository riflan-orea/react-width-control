import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the MaxWidth component
 * @property {React.ReactNode} children - The children to apply the max-width
 * @property {number} size - The size of the max-width
 */

type MaxWidthProps = {
  children: React.ReactNode;
  size: number;
};

const MaxWidth = forwardRef<HTMLDivElement, MaxWidthProps>(
  ({ children, size, ...props }, ref: Ref<HTMLDivElement>) => {
    const maxWidthValue = `${size}px`;

    const combinedStyle: CSSProperties = {
      maxWidth: maxWidthValue,
    };

    // Wrap children in a div with max-width constraint
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

MaxWidth.displayName = "MaxWidth";

export default MaxWidth;