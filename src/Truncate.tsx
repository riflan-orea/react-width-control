import React from 'react';
import type { CSSProperties, Ref } from 'react';
import { forwardRef } from 'react';

/**
 * Props for the Truncate component
 * @property {React.ReactNode} children - The children to apply text truncation
 */

type TruncateProps = {
  children: React.ReactNode;
};

const Truncate = forwardRef<HTMLDivElement, TruncateProps>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    const combinedStyle: CSSProperties = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };

    // Wrap children in a div with truncation styles
    return (
      <div ref={ref} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  }
);

Truncate.displayName = "Truncate";

export default Truncate;