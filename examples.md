# React Width Components - Usage Examples

This document provides comprehensive examples for all components in the React Width Components library.

## Table of Contents
- [MinWidth Component](#minwidth-component)
- [MaxWidth Component](#maxwidth-component)
- [Width Component](#width-component)
- [Truncate Component](#truncate-component)
- [MultilineTruncate Component](#multilinetruncate-component)
- [TextTruncate Component](#texttruncate-component)
- [CSS Framework Integration](#css-framework-integration)
- [Dashboard Layouts](#dashboard-layouts)
- [Form Elements](#form-elements)
- [Responsive Design](#responsive-design)

## MinWidth Component

### Basic Usage
```tsx
import { MinWidth } from 'react-minwidth';

// Minimum width of 200px
<MinWidth size={200}>
  <div>This div will never be smaller than 200px</div>
</MinWidth>
```

### With Styled Components
```tsx
import styled from 'styled-components';
import { MinWidth } from 'react-minwidth';

const StyledCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

<MinWidth size={300}>
  <StyledCard>
    <h3>Card Title</h3>
    <p>Card content with minimum width constraint</p>
  </StyledCard>
</MinWidth>
```

## MaxWidth Component

### Basic Usage
```tsx
import { MaxWidth } from 'react-minwidth';

// Maximum width of 500px
<MaxWidth size={500}>
  <div>This div will never exceed 500px in width</div>
</MaxWidth>
```

### Responsive Text
```tsx
<MaxWidth size={400}>
  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
    This paragraph will be constrained to a maximum width of 400px,
    making it more readable on larger screens.
  </p>
</MaxWidth>
```

## Width Component

### Basic Width Constraints
```tsx
import { Width } from 'react-minwidth';

// Fixed width
<Width width={300}>
  <div>Fixed width of 300px</div>
</Width>

// Min and max width
<Width minWidth={200} maxWidth={500}>
  <div>Width between 200px and 500px</div>
</Width>
```

### Enhanced Width Component with Truncation

#### Single-line Truncation
```tsx
// Basic single-line truncation
<Width maxWidth={300} truncate>
  <p>This is a very long text that will be truncated with ellipsis when it exceeds the container width.</p>
</Width>

// With custom ellipsis
<Width maxWidth={250} truncate truncateEllipsis=" [more]">
  <p>This text uses a custom ellipsis that says "[more]" instead of "..."</p>
</Width>
```

#### Multi-line Truncation
```tsx
// 2-line truncation
<Width maxWidth={400} truncateLines={2}>
  <p>This text will be truncated after exactly 2 lines with ellipsis. 
  The text will be cut off and replaced with "..." at the end of the second line.</p>
</Width>

// 3-line truncation
<Width maxWidth={500} truncateLines={3}>
  <p>This text will be truncated after exactly 3 lines with ellipsis. 
  This allows for more content to be displayed before truncation occurs.</p>
</Width>
```

#### Combined Width and Truncation
```tsx
// Min-width + Max-width + Single-line truncation
<Width minWidth={200} maxWidth={400} truncate>
  <div style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
    This div has min-width 200px, max-width 400px, and single-line truncation.
  </div>
</Width>

// Fixed width + Multi-line truncation
<Width width={350} truncateLines={2}>
  <div style={{ padding: '1rem', backgroundColor: '#e3f2fd' }}>
    This div has a fixed width of 350px and multi-line truncation after 2 lines.
  </div>
</Width>
```

#### With React Components
```tsx
const ProductCard = ({ name, description, price }) => (
  <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
    <h4>{name}</h4>
    <p>{description}</p>
    <span>{price}</span>
  </div>
);

// Apply truncation to React component
<Width maxWidth={350} truncate>
  <ProductCard 
    name="Product with Very Long Name"
    description="This is a very long product description that should be truncated"
    price="$29.99"
  />
</Width>
```

## Truncate Component

### Basic Single-line Truncation
```tsx
import { Truncate } from 'react-minwidth';

<Truncate>
  <p>This text will be truncated with ellipsis if it's too long</p>
</Truncate>
```

### With Custom Ellipsis
```tsx
<Truncate ellipsis=" [read more]">
  <p>This text uses a custom ellipsis</p>
</Truncate>
```

## MultilineTruncate Component

### Basic Multi-line Truncation
```tsx
import { MultilineTruncate } from 'react-minwidth';

// 2-line truncation
<MultilineTruncate lines={2}>
  <p>This text will be truncated after exactly 2 lines with ellipsis.</p>
</MultilineTruncate>

// 3-line truncation
<MultilineTruncate lines={3}>
  <p>This text will be truncated after exactly 3 lines with ellipsis.</p>
</MultilineTruncate>
```

### With Custom Ellipsis
```tsx
<MultilineTruncate lines={2} ellipsis=" [continue reading]">
  <p>This text uses a custom ellipsis for multi-line truncation.</p>
</MultilineTruncate>
```

## TextTruncate Component

### Basic Usage
```tsx
import { TextTruncate } from 'react-minwidth';

// Single-line truncation
<TextTruncate>
  This text will be truncated with ellipsis if it's too long
</TextTruncate>

// Multi-line truncation
<TextTruncate lines={2}>
  This text will be truncated after exactly 2 lines with ellipsis.
</TextTruncate>
```

### With Custom Ellipsis
```tsx
<TextTruncate ellipsis=" [more]">
  This text uses a custom ellipsis
</TextTruncate>
```

## CSS Framework Integration

### With Tailwind CSS
```tsx
import { Width } from 'react-minwidth';

<Width minWidth={200} maxWidth={500}>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">Card content with width constraints</p>
  </div>
</Width>
```

### With Styled Components
```tsx
import styled from 'styled-components';
import { Width } from 'react-minwidth';

const StyledButton = styled.button`
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

<Width minWidth={120} maxWidth={200}>
  <StyledButton>Responsive Button</StyledButton>
</Width>
```

## Dashboard Layouts

### Card Grid with Width Constraints
```tsx
import { Width } from 'react-minwidth';

const DashboardCard = ({ title, content, icon }) => (
  <Width minWidth={250} maxWidth={400}>
    <div style={{ 
      padding: '1.5rem', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{icon}</span>
        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
      </div>
      <p style={{ margin: 0, color: '#666' }}>{content}</p>
    </div>
  </Width>
);

// Usage in grid
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
  padding: '1rem'
}}>
  <DashboardCard 
    title="Total Users" 
    content="1,234 active users" 
    icon="👥"
  />
  <DashboardCard 
    title="Revenue" 
    content="$12,345 this month" 
    icon="💰"
  />
  <DashboardCard 
    title="Orders" 
    content="567 orders processed" 
    icon="📦"
  />
</div>
```

### Responsive Sidebar
```tsx
import { MinWidth } from 'react-minwidth';

const Sidebar = () => (
  <MinWidth size={250}>
    <div style={{ 
      width: '100%',
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderRight: '1px solid #dee2e6',
      height: '100vh'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Navigation</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Dashboard</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Users</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  </MinWidth>
);
```

## Form Elements

### Responsive Input Fields
```tsx
import { Width } from 'react-minwidth';

const FormField = ({ label, placeholder, type = "text" }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
      {label}
    </label>
    <Width minWidth={200} maxWidth={400}>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '1rem'
        }}
      />
    </Width>
  </div>
);

// Usage
<form>
  <FormField label="Full Name" placeholder="Enter your full name" />
  <FormField label="Email" type="email" placeholder="Enter your email" />
  <FormField label="Phone" type="tel" placeholder="Enter your phone number" />
</form>
```

### Textarea with Truncation
```tsx
import { Width } from 'react-minwidth';

<Width minWidth={300} maxWidth={600}>
  <textarea
    placeholder="Enter your message here..."
    style={{
      width: '100%',
      minHeight: '100px',
      padding: '0.5rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      resize: 'vertical'
    }}
  />
</Width>
```

## Responsive Design

### Mobile-First Approach
```tsx
import { Width } from 'react-minwidth';

const ResponsiveCard = ({ title, content }) => (
  <Width minWidth={280} maxWidth={600}>
    <div style={{ 
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      margin: '0.5rem'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{content}</p>
    </div>
  </Width>
);

// Usage in responsive grid
<div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1rem',
  padding: '1rem'
}}>
  <ResponsiveCard 
    title="Feature 1" 
    content="This is a responsive card that adapts to different screen sizes."
  />
  <ResponsiveCard 
    title="Feature 2" 
    content="Another responsive card with width constraints."
  />
  <ResponsiveCard 
    title="Feature 3" 
    content="Third responsive card in the grid layout."
  />
</div>
```

### Flexible Layout with Constraints
```tsx
import { Width } from 'react-minwidth';

const FlexibleLayout = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem'
  }}>
    {/* Header with max width */}
    <Width maxWidth={800}>
      <header style={{ 
        backgroundColor: '#007bff', 
        color: 'white',
        padding: '1rem',
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0 }}>Application Header</h1>
      </header>
    </Width>
    
    {/* Main content with responsive width */}
    <Width minWidth={300} maxWidth={900}>
      <main style={{ 
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        borderRadius: '4px'
      }}>
        <h2>Main Content</h2>
        <p>This content area has responsive width constraints.</p>
      </main>
    </Width>
    
    {/* Footer with min width */}
    <Width minWidth={400}>
      <footer style={{ 
        backgroundColor: '#6c757d',
        color: 'white',
        padding: '1rem',
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>© 2024 Your Application</p>
      </footer>
    </Width>
  </div>
);
```

## Advanced Patterns

### Conditional Width Constraints
```tsx
import { Width } from 'react-minwidth';

const ConditionalWidth = ({ isMobile, content }) => (
  <Width 
    minWidth={isMobile ? 280 : 400}
    maxWidth={isMobile ? 500 : 800}
  >
    <div style={{ 
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      {content}
    </div>
  </Width>
);
```

### Dynamic Truncation Based on Content
```tsx
import { Width } from 'react-minwidth';

const SmartTruncate = ({ text, maxLength = 100 }) => {
  const shouldTruncate = text.length > maxLength;
  
  return (
    <Width 
      maxWidth={400} 
      truncate={shouldTruncate}
      truncateLines={shouldTruncate ? 2 : undefined}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </Width>
  );
};
```

### Performance Optimization
```tsx
import { memo } from 'react';
import { Width } from 'react-minwidth';

const OptimizedCard = memo(({ title, content, width }) => (
  <Width minWidth={200} maxWidth={width}>
    <div style={{ 
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666' }}>{content}</p>
    </div>
  </Width>
));
```

These examples demonstrate the flexibility and power of the React Width Components library. The enhanced Width component with truncation features provides a comprehensive solution for responsive design and text handling in React applications. 