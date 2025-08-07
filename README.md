⚠️ This package has been renamed and moved to [react-width-control](https://www.npmjs.com/package/react-width-control).

# 🎯 React Width Components

[![npm version](https://badge.fury.io/js/react-width-control.svg)](https://badge.fury.io/js/react-width-control)
[![npm downloads](https://img.shields.io/npm/dm/react-width-control.svg)](https://www.npmjs.com/package/react-width-control)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Lightweight, type-safe React components for responsive width constraints and text truncation** 📐

A comprehensive collection of React components designed for modern responsive UI development. Easily control minimum width, maximum width, flexible width constraints, and text truncation with ellipsis on any React element with TypeScript support.

## ✨ Features

- 🎯 **Simple & Intuitive** - Clean API for width constraints and text truncation
- 📱 **Responsive Design** - Perfect for mobile-first development  
- ✂️ **Text Truncation** - Single-line and multi-line text truncation with ellipsis
- 🔧 **TypeScript Ready** - Full TypeScript support with type definitions
- 🪶 **Lightweight** - Minimal bundle size impact
- ⚡ **Performance Optimized** - Zero dependencies, React 17+ compatible
- 🎨 **Flexible Styling** - Works with any CSS framework or styling solution
- 🎛️ **All-in-One Width Component** - Combine width constraints and text truncation in a single component

## 📦 Installation

### NPM
```bash
npm install react-width-control
```

### Yarn
```bash
yarn add react-width-control
```

### PNPM
```bash
pnpm add react-width-control
```

## 🚀 Quick Start

```tsx
import { MinWidth, MaxWidth, Width, TextTruncate } from 'react-width-control';

function App() {
  return (
    <div>
      <MinWidth size={200}>
        <button>Minimum 200px wide button</button>
      </MinWidth>

      <MinWidth size={300}>
        <div>This content will always be at least 300px wide, even if the text is short.</div>
      </MinWidth>
      
      <MaxWidth size={400}>
        <div>Maximum 400px wide container</div>
      </MaxWidth>
      
      <Width minWidth={150} maxWidth={350}>
        <input placeholder="Responsive input field" />
      </Width>

      <TextTruncate lines={2}>
        <p>This long text will be truncated after 2 lines with ellipsis...</p>
      </TextTruncate>

      {/* Width component with built-in truncation */}
      <Width maxWidth={300} truncateLines={2}>
        <p>Width component with multi-line truncation built-in</p>
      </Width>
    </div>
  );
}
```

## 📚 Components API

### MinWidth - Minimum Width Control

Perfect for ensuring elements don't become too narrow on smaller screens.

```tsx
import { MinWidth } from "react-width-control";

<MinWidth size={200}>
  <div>This div will be at least 200px wide</div>
</MinWidth>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `number` | ✅ | Minimum width in pixels |
| `children` | `ReactNode` | ✅ | Content to apply constraints to (can be any valid React node) |

### MaxWidth - Maximum Width Control

Ideal for preventing elements from becoming too wide on larger screens.

```tsx
import { MaxWidth } from "react-width-control";

<MaxWidth size={600}>
  <article>This article won't exceed 600px width</article>
</MaxWidth>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `size` | `number` | ✅ | Maximum width in pixels |
| `children` | `ReactNode` | ✅ | Content to apply constraints to (can be any valid React node) |

### Width - Flexible Width Control

The most versatile component for comprehensive width management with built-in text truncation capabilities.

```tsx
import { Width } from "react-width-control";

// Basic width constraints
<Width minWidth={200} maxWidth={800} width={400}>
  <section>Fully controlled width section</section>
</Width>

// With single-line truncation
<Width maxWidth={300} truncate>
  <p>This long text will be truncated on a single line...</p>
</Width>

// With multi-line truncation
<Width maxWidth={400} truncateLines={3}>
  <p>This long text will be limited to exactly 3 lines with ellipsis...</p>
</Width>

// With custom ellipsis
<Width maxWidth={250} truncate truncateEllipsis=" [more]">
  <span>Custom ellipsis text for this content</span>
</Width>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `minWidth` | `number` | ❌ | Minimum width in pixels |
| `maxWidth` | `number` | ❌ | Maximum width in pixels |
| `width` | `number` | ❌ | Fixed width in pixels |
| `truncate` | `boolean` | ❌ | Enable single-line text truncation with ellipsis |
| `truncateLines` | `number` | ❌ | Number of lines for multi-line truncation (1 = single-line) |
| `truncateEllipsis` | `string` | ❌ | Custom ellipsis text (default: "...") |
| `children` | `ReactNode` | ✅ | Content to apply constraints to (can be any valid React node) |

### Truncate - Single-line Text Truncation

Perfect for single-line text that needs to be cut off with ellipsis.

```tsx
import { Truncate } from "react-width-control";

<Truncate>
  <p>This very long text will be truncated with ellipsis on a single line...</p>
</Truncate>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | ✅ | Single React node to apply truncation |

### MultilineTruncate - Multi-line Text Truncation

Ideal for limiting text to a specific number of lines.

```tsx
import { MultilineTruncate } from "react-width-control";

<MultilineTruncate lines={3}>
  <div>This long content will be limited to exactly 3 lines with ellipsis...</div>
</MultilineTruncate>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `lines` | `number` | ✅ | Number of lines before truncation |
| `children` | `ReactNode` | ✅ | Single React node to apply truncation |

### TextTruncate - Flexible Text Truncation

The most versatile component for both single-line and multi-line truncation.

```tsx
import { TextTruncate } from "react-width-control";

// Single-line truncation (default)
<TextTruncate>
  <span>Single line text with ellipsis...</span>
</TextTruncate>

// Multi-line truncation
<TextTruncate lines={2}>
  <p>Multi-line text limited to 2 lines with ellipsis...</p>
</TextTruncate>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `lines` | `number` | ❌ | Number of lines before truncation (defaults to single-line) |
| `children` | `ReactNode` | ✅ | Single React node to apply truncation |

## ⚠️ Important Notes

### Padding and Margin with Truncate Components

**Important:** The truncate components (`Truncate`, `MultilineTruncate`, `TextTruncate`) wrap your content in a div with specific CSS properties that may interfere with padding and margin on inner/child components. 

**Solution:** Apply padding and margin to the **outer/parent** components instead of the inner content:

```tsx
// ❌ Don't do this - padding/margin won't work properly
<TextTruncate lines={2}>
  <div style={{ padding: '20px', margin: '10px' }}>
    This content's padding and margin may not work as expected
  </div>
</TextTruncate>

// ✅ Do this instead - apply spacing to the parent
<div style={{ padding: '20px', margin: '10px' }}>
  <TextTruncate lines={2}>
    <div>This content will be properly spaced</div>
  </TextTruncate>
</div>
```

### Why This Happens

The truncate components use CSS properties like `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` that can interfere with the box model of inner elements. For multi-line truncation, they also use `-webkit-box` display which has specific layout behavior.

## 🎨 Usage Examples

### Responsive Navigation Bar
```tsx
import { MinWidth, MaxWidth } from 'react-width-control';

function Navigation() {
  return (
    <MinWidth size={320}>
      <MaxWidth size={1200}>
        <nav className="navbar">
          <div className="nav-brand">Logo</div>
          <div className="nav-menu">Menu Items</div>
        </nav>
      </MaxWidth>
    </MinWidth>
  );
}
```

### Responsive Card Layout
```tsx
import { Width } from 'react-width-control';

function ProductCard({ product }) {
  return (
    <Width minWidth={250} maxWidth={350}>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </Width>
  );
}
```

### Form Elements
```tsx
import { MinWidth, MaxWidth } from 'react-width-control';

function ContactForm() {
  return (
    <form>
      <MinWidth size={280}>
        <input type="email" placeholder="Email address" />
      </MinWidth>
      
      <MaxWidth size={600}>
        <textarea placeholder="Your message" rows={4} />
      </MaxWidth>
      
      <MinWidth size={120}>
        <button type="submit">Send Message</button>
      </MinWidth>
    </form>
  );
}
```

### Mobile-First Design
```tsx
import { Width } from 'react-width-control';

function ResponsiveContainer({ children }) {
  return (
    <Width minWidth={320} maxWidth={768}>
      <div className="mobile-container">
        {children}
      </div>
    </Width>
  );
}
```

### Advanced Width Component Features
```tsx
import { Width } from 'react-width-control';

function AdvancedWidthExamples() {
  return (
    <div>
      {/* Width with truncation - all-in-one solution */}
      <Width minWidth={200} maxWidth={350} truncateLines={2}>
        <div className="product-description">
          This product description combines width constraints with multi-line truncation
          in a single component, making it perfect for product cards and lists.
        </div>
      </Width>

      {/* Width with custom ellipsis */}
      <Width maxWidth={300} truncate truncateEllipsis=" [read more]">
        <h4>Article Title</h4>
      </Width>

      {/* Width with single-line truncation */}
      <Width maxWidth={250} truncate>
        <span>Username that might be too long for the UI</span>
      </Width>

      {/* Width with multi-line truncation and custom ellipsis */}
      <Width maxWidth={400} truncateLines={3} truncateEllipsis="... (continued)">
        <p>
          This is a longer piece of content that demonstrates how the Width component
          can handle both width constraints and text truncation simultaneously.
          It's particularly useful for responsive layouts where you need both
          consistent sizing and text overflow handling.
        </p>
      </Width>
    </div>
  );
}
```

### Text Truncation Examples
```tsx
import { Truncate, MultilineTruncate, TextTruncate, Width } from 'react-width-control';

function TextExamples() {
  return (
    <div>
      {/* Single-line truncation for titles */}
      <Width maxWidth={300}>
        <Truncate>
          <h3>This is a very long title that will be truncated</h3>
        </Truncate>
      </Width>

      {/* Multi-line truncation for descriptions */}
      <Width maxWidth={400}>
        <MultilineTruncate lines={3}>
          <p>
            This is a long description that will be limited to exactly 3 lines.
            Any content beyond the third line will be hidden and replaced with
            ellipsis to indicate there's more content available.
          </p>
        </MultilineTruncate>
      </Width>

      {/* Flexible truncation with width constraints */}
      <Width minWidth={200} maxWidth={350}>
        <div className="card-content">
          <TextTruncate lines={2}>
            Combined width control and text truncation for perfect responsive cards
            that maintain consistent sizing while handling variable content lengths.
          </TextTruncate>
        </div>
      </Width>
    </div>
  );
}
```

### Proper Spacing with Truncate Components
```tsx
import { TextTruncate, Width } from 'react-width-control';

function CardWithProperSpacing() {
  return (
    <div>
      {/* ✅ Correct: Apply spacing to parent container */}
      <div style={{ padding: '16px', margin: '8px', border: '1px solid #ccc' }}>
        <TextTruncate lines={2}>
          <p>This content has proper spacing applied to the parent container</p>
        </TextTruncate>
      </div>

      {/* ✅ Correct: Use CSS classes on parent */}
      <div className="card-padding">
        <TextTruncate lines={3}>
          <div>Another example with CSS class styling on the parent</div>
        </TextTruncate>
      </div>

      {/* ✅ Correct: Combine with Width component for spacing */}
      <Width minWidth={250} maxWidth={400}>
        <div style={{ padding: '12px', backgroundColor: '#f5f5f5' }}>
          <TextTruncate>
            <span>Width component with proper parent spacing</span>
          </TextTruncate>
        </div>
      </Width>
    </div>
  );
}
```

## 🔧 Advanced Usage

### With CSS-in-JS Libraries
```tsx
import styled from 'styled-components';
import { Width } from 'react-width-control';

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function App() {
  return (
    <Width minWidth={300} maxWidth={500}>
      <StyledCard>
        Styled component with width constraints
      </StyledCard>
    </Width>
  );
}
```

### With Tailwind CSS
```tsx
import { MaxWidth } from 'react-width-control';

function HeroSection() {
  return (
    <MaxWidth size={1024}>
      <div className="bg-blue-500 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-lg mt-4">This hero section has a maximum width</p>
      </div>
    </MaxWidth>
  );
}
```

## 🤔 FAQ

### Q: Can I use these components with any CSS framework?
**A:** Yes! These components work with any CSS framework including Tailwind CSS, Bootstrap, Material-UI, Chakra UI, and more.

### Q: Do these components affect the original styling of my elements?
**A:** No, they only add width constraints while preserving all existing styles.

### Q: Are these components accessible?
**A:** Yes, they maintain the accessibility properties of the wrapped elements.

### Q: Can I nest these components?
**A:** Yes, you can nest and combine these components as needed.

### Q: Do I need to install React separately?
**A:** React is a peer dependency, so you need React 17+ installed in your project.

## 🎯 Common Use Cases

- **Responsive Design**: Create mobile-first layouts
- **Content Containers**: Limit content width for better readability
- **Form Controls**: Ensure form elements have appropriate sizes
- **Navigation Bars**: Control navbar width across devices
- **Card Layouts**: Maintain consistent card dimensions with truncated text
- **Modal Dialogs**: Control modal width on different screen sizes
- **Sidebar Layouts**: Set minimum/maximum sidebar widths
- **Media Queries Alternative**: Control width without CSS media queries
- **Text Truncation**: Handle long titles, descriptions, and user-generated content
- **List Items**: Truncate text in lists and tables
- **Product Cards**: Show limited product descriptions
- **Comments & Reviews**: Control comment length display
- **Breadcrumbs**: Truncate path names in navigation
- **Tag Lists**: Handle overflow in tag/chip components

## 🛠️ TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { MinWidth, MaxWidth, Width, TextTruncate } from 'react-width-control';
import type { ReactElement } from 'react';

interface MyComponentProps {
  children: ReactElement;
  minSize?: number;
  maxSize?: number;
  truncateLines?: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ 
  children, 
  minSize = 200, 
  maxSize = 600,
  truncateLines 
}) => {
  return (
    <Width minWidth={minSize} maxWidth={maxSize}>
      {truncateLines ? (
        <TextTruncate lines={truncateLines}>
          {children}
        </TextTruncate>
      ) : (
        children
      )}
    </Width>
  );
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/react-width-control)
- [GitHub Repository](https://github.com/riflan-orea/react-width-control)
- [Issue Tracker](https://github.com/riflan-orea/react-width-control/issues)

---

**Made with ❤️ for the React community**

*Keywords: react width components, text truncation, ellipsis, responsive design, min-width, max-width, react ui components, typescript react, mobile-first design, css constraints, react layout, responsive components, line clamp, text overflow*