# MinWidth React Component

A simple React component to set a minimum width for its children.

## Installation

$ npm install minwidth-react

## Usage

```tsx
import MinWidth from "minwidth-react";
function App() {
  return (
    <MinWidth width={200}>
      <div>This content will have a minimum width of 200px</div>
    </MinWidth>
  );
}
```

## Props

- `width` (number): The minimum width in pixels
- `children` (ReactNode): The content to be wrapped

## License

MIT
