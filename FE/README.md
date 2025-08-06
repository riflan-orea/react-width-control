# React MinWidth Component Library - Frontend Demo

This is a Vite.js-based frontend application that showcases the React MinWidth component library.

## Features

- **Component Showcase**: Visual demonstration of all components
- **Storybook Integration**: Interactive component testing and documentation
- **Responsive Design**: Works on all screen sizes
- **Modern UI**: Beautiful gradient background and clean design

## Available Scripts

### Development
```bash
# Start the Vite development server
npm run dev

# Start Storybook for component testing
npm run storybook
```

### Building
```bash
# Build the application for production
npm run build

# Build Storybook for deployment
npm run build-storybook
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

## Access Points

- **Main Demo**: `http://localhost:5173` (Vite dev server)
- **Storybook**: `http://localhost:6006` (Storybook dev server)

## Project Structure

```
FE/
├── src/
│   ├── components/          # React components
│   ├── stories/            # Storybook stories
│   ├── App.tsx            # Main demo application
│   └── main.tsx           # Application entry point
├── .storybook/            # Storybook configuration
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Development

This project uses:
- **Vite**: Fast build tool and dev server
- **React 19**: Latest React with TypeScript
- **Storybook**: Component development and testing
- **TypeScript**: Type-safe development

## Testing Components

1. **Visual Testing**: Run `npm run dev` to see the component showcase
2. **Interactive Testing**: Run `npm run storybook` for interactive component testing
3. **Responsive Testing**: Resize browser window to test responsive behavior
4. **Edge Cases**: Test with different content lengths and special characters

## Contributing

To add new components or modify existing ones:

1. Add the component to `src/`
2. Create stories in `src/*.stories.tsx`
3. Update the showcase in `src/App.tsx`
4. Test with both Vite dev server and Storybook
