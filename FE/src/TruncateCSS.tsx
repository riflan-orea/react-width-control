import React from 'react';
import type { CSSProperties } from 'react';

/**
 * Props for the TruncateCSS component
 * @property {React.ReactNode} children - The children to apply CSS truncation
 * @property {number | 'multi'} [lines] - The number of lines before truncation (2, 3, or 'multi')
 * @property {string} [className] - Additional CSS classes
 * @property {CSSProperties} [style] - Additional inline styles
 */

type TruncateCSSProps = {
  children: React.ReactNode;
  lines?: 2 | 3 | 'multi';
  className?: string;
  style?: CSSProperties;
};

const TruncateCSS: React.FC<TruncateCSSProps> = ({ 
  children, 
  lines = 2, 
  className = '', 
  style = {} 
}) => {
  // Determine CSS class based on lines
  let truncateClass = '';
  switch (lines) {
    case 2:
      truncateClass = 'truncate-2-lines';
      break;
    case 3:
      truncateClass = 'truncate-3-lines';
      break;
    case 'multi':
      truncateClass = 'truncate-multi-line';
      break;
    default:
      truncateClass = 'truncate-2-lines';
  }

  // Combine classes
  const combinedClassName = `${truncateClass} ${className}`.trim();

  // Wrap children in a div with CSS classes
  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  );
};

export default TruncateCSS; 