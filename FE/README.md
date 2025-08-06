# React MinWidth Component Library - Frontend Demo

This is a Vite.js-based frontend application that showcases the React MinWidth component library.

## Features

- **Component Showcase**: Visual demonstration of all components
- **Responsive Design**: Works on all screen sizes
- **Modern UI**: Beautiful gradient background and clean design
- **CSS-based Truncation**: Pure CSS solution with fallback support

## Available Scripts

### Development
```bash
# Start the Vite development server
npm run dev
```

### Building
```bash
# Build the application for production
npm run build
```

### Other
```bash
# Lint the code
npm run lint

# Preview the production build
npm run preview
```

## Components Showcased

1. **MinWidth**: Sets minimum width constraints
2. **MaxWidth**: Sets maximum width constraints
3. **Width**: Combined width constraints with truncation
4. **Truncate**: Single-line text truncation
5. **MultilineTruncate**: Multi-line text truncation
6. **TextTruncate**: Flexible truncation options
7. **TruncateCSS**: CSS-based truncation with fallback support

## Access Points

- **Main Demo**: `http://localhost:5173` (Vite dev server)

## Project Structure

```
FE/
├── src/
│   ├── components/          # React components
│   ├── App.tsx            # Main demo application
│   ├── main.tsx           # Application entry point
│   ├── truncate.css       # CSS truncation classes
│   └── index.ts           # Component exports
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Development

This project uses:
- **Vite**: Fast build tool and dev server
- **React 19**: Latest React with TypeScript
- **TypeScript**: Type-safe development
- **CSS**: Pure CSS truncation with cross-browser support

## Testing Components

1. **Visual Testing**: Run `npm run dev` to see the component showcase
2. **Responsive Testing**: Resize browser window to test responsive behavior
3. **Edge Cases**: Test with different content lengths and special characters
4. **Cross-browser Testing**: Test truncation in different browsers

## Component Features

### Width Constraints
- **MinWidth**: Ensures minimum width regardless of content
- **MaxWidth**: Limits maximum width and wraps content
- **Width**: Combines min/max/fixed width with truncation

### Text Truncation
- **Truncate**: Single-line truncation with ellipsis
- **MultilineTruncate**: Multi-line truncation with specified line count
- **TextTruncate**: Flexible truncation (single or multi-line)
- **TruncateCSS**: CSS-based truncation with fallback support

### CSS Truncation Benefits
- ✅ **Pure CSS solution** - No JavaScript calculations
- ✅ **Cross-browser compatibility** - Fallback support for older browsers
- ✅ **Better performance** - CSS-only approach is faster
- ✅ **Easy customization** - Simple CSS classes to modify

## Contributing

To add new components or modify existing ones:

1. Add the component to `src/`
2. Update the exports in `src/index.ts`
3. Update the showcase in `src/App.tsx`
4. Test with the Vite dev server
