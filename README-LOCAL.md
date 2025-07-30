# 🚀 React Width Components - Local Development Setup

A comprehensive guide for setting up and running the React Width Components project locally for development, testing, and contribution.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Running Tests](#running-tests)
- [Building the Project](#building-the-project)
- [Contributing](#contributing)
- [Scripts Reference](#scripts-reference)
- [Troubleshooting](#troubleshooting)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.20.0 or higher)

### Checking Your Environment

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## ⚡ Quick Start

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/username/react-width-control.git

# Navigate to the project directory
cd react-width-control
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Start Development

```bash
# Start the development server
npm run dev

# Or using yarn
yarn dev
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
react-width-control/
├── src/                          # Source code
│   ├── index.ts                  # Main entry point
│   ├── MinWidth.tsx             # MinWidth component
│   ├── MaxWidth.tsx             # MaxWidth component
│   ├── Width.tsx                # Width component
│   ├── Truncate.tsx             # Truncate component
│   ├── MultilineTruncate.tsx    # MultilineTruncate component
│   └── TextTruncate.tsx         # TextTruncate component
├── tests/                        # Test components
│   ├── TestRunner.tsx           # Main test runner
│   ├── MinWidth.test.tsx        # MinWidth tests
│   ├── MaxWidth.test.tsx        # MaxWidth tests
│   ├── Width.test.tsx           # Width tests
│   ├── Truncate.test.tsx        # Truncate tests
│   ├── MultilineTruncate.test.tsx # MultilineTruncate tests
│   ├── TextTruncate.test.tsx    # TextTruncate tests
│   ├── example-usage.tsx        # Usage examples
│   └── README.md                # Test documentation
├── dist/                         # Build output (generated)
├── examples/                     # Example applications
├── docs/                         # Documentation
├── package.json                  # Project configuration
├── tsconfig.json                 # TypeScript configuration
├── rollup.config.js             # Build configuration
├── README.md                     # Main documentation
├── README-LOCAL.md              # This file
├── CHANGELOG.md                 # Version history
├── LICENSE                       # MIT License
└── .gitignore                   # Git ignore rules
```

## 🔧 Development Setup

### 1. Environment Setup

```bash
# Install dependencies
npm install

# Verify installation
npm run verify
```

### 2. Development Server

```bash
# Start development server
npm run dev

# Start with hot reload
npm run dev:watch

# Start with specific port
npm run dev -- --port 3001
```

### 3. Type Checking

```bash
# Run TypeScript type checking
npm run type-check

# Run type checking in watch mode
npm run type-check:watch
```

### 4. Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Run Prettier formatting
npm run format

# Check formatting
npm run format:check
```

## 🧪 Running Tests

### 1. Test Components

The project includes comprehensive test components for all 6 React Width Components:

```bash
# Start test runner
npm run test:components

# Or run individual test components
npm run test:minwidth
npm run test:maxwidth
npm run test:width
npm run test:truncate
npm run test:multilinetruncate
npm run test:texttruncate
```

### 2. Using TestRunner

The easiest way to run all tests is using the TestRunner component:

```tsx
import TestRunner from './tests/TestRunner';

function App() {
  return <TestRunner />;
}
```

### 3. Manual Testing

You can also run individual test components:

```tsx
import MinWidthTest from './tests/MinWidth.test';
import MaxWidthTest from './tests/MaxWidth.test';
// ... other test imports

function App() {
  return (
    <div>
      <MinWidthTest />
      <MaxWidthTest />
      {/* ... other test components */}
    </div>
  );
}
```

### 4. Test Coverage

Each test component covers:
- ✅ Basic functionality
- ✅ React component handling
- ✅ Edge cases
- ✅ Responsive behavior
- ✅ Style preservation
- ✅ Different content types

## 🏗️ Building the Project

### 1. Development Build

```bash
# Build for development
npm run build:dev

# Build with source maps
npm run build:dev -- --sourcemap
```

### 2. Production Build

```bash
# Build for production
npm run build

# Build with optimization
npm run build:prod
```

### 3. Build Output

The build process generates:
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES Module bundle
- `dist/index.d.ts` - TypeScript declarations
- Source maps for debugging

### 4. Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Generate bundle report
npm run analyze:report
```

## 📦 Package Management

### 1. Publishing

```bash
# Build and publish to npm
npm run publish

# Dry run (test without publishing)
npm run publish:dry-run

# Update version
npm run version:patch  # 1.0.0 -> 1.0.1
npm run version:minor  # 1.0.0 -> 1.1.0
npm run version:major  # 1.0.0 -> 2.0.0
```

### 2. Package Verification

```bash
# Verify package contents
npm run verify:package

# Test package installation
npm run test:install
```

## 🤝 Contributing

### 1. Development Workflow

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
# ... edit files ...

# Run tests
npm run test:all

# Build the project
npm run build

# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name
```

### 2. Code Quality

```bash
# Run all quality checks
npm run quality

# Run quality checks before commit
npm run pre-commit
```

### 3. Testing Your Changes

```bash
# Run all tests
npm run test:all

# Run specific component tests
npm run test:component -- --component MinWidth

# Run tests in watch mode
npm run test:watch
```

### 4. Documentation

```bash
# Generate documentation
npm run docs:generate

# Serve documentation locally
npm run docs:serve

# Build documentation
npm run docs:build
```

## 📜 Scripts Reference

### Development Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:watch` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier formatting |

### Testing Scripts

| Script | Description |
|--------|-------------|
| `npm run test:components` | Start test runner |
| `npm run test:all` | Run all tests |
| `npm run test:minwidth` | Run MinWidth tests |
| `npm run test:maxwidth` | Run MaxWidth tests |
| `npm run test:width` | Run Width tests |
| `npm run test:truncate` | Run Truncate tests |
| `npm run test:multilinetruncate` | Run MultilineTruncate tests |
| `npm run test:texttruncate` | Run TextTruncate tests |

### Quality Scripts

| Script | Description |
|--------|-------------|
| `npm run quality` | Run all quality checks |
| `npm run pre-commit` | Run pre-commit hooks |
| `npm run verify` | Verify project setup |
| `npm run analyze` | Analyze bundle size |

### Publishing Scripts

| Script | Description |
|--------|-------------|
| `npm run publish` | Build and publish to npm |
| `npm run publish:dry-run` | Test publish without publishing |
| `npm run version:patch` | Bump patch version |
| `npm run version:minor` | Bump minor version |
| `npm run version:major` | Bump major version |

## 🔍 Troubleshooting

### Common Issues

#### 1. Node.js Version Issues

```bash
# Check Node.js version
node --version

# If version is too old, update Node.js
# Download from https://nodejs.org/
```

#### 2. Dependency Issues

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. TypeScript Issues

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Reinstall TypeScript
npm install typescript@latest
```

#### 4. Build Issues

```bash
# Clear build cache
rm -rf dist

# Rebuild
npm run build
```

#### 5. Test Issues

```bash
# Clear test cache
npm run test:clear

# Run tests with verbose output
npm run test:all -- --verbose
```

### Performance Issues

#### 1. Slow Build Times

```bash
# Use faster build mode
npm run build:fast

# Enable build caching
npm run build:cache
```

#### 2. Memory Issues

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Development Tips

#### 1. Hot Reload

```bash
# Start with hot reload
npm run dev:watch
```

#### 2. Debug Mode

```bash
# Start with debug logging
DEBUG=* npm run dev
```

#### 3. Profile Mode

```bash
# Start with profiling
npm run dev:profile
```

## 📚 Additional Resources

### Documentation

- [Main README](./README.md) - Project overview and API documentation
- [Test Documentation](./tests/README.md) - Test suite documentation
- [Examples](./examples.md) - Usage examples and patterns
- [Changelog](./CHANGELOG.md) - Version history and changes

### External Resources

- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Rollup Documentation](https://rollupjs.org/guide/)
- [npm Documentation](https://docs.npmjs.com/)

### Community

- [GitHub Issues](https://github.com/username/react-width-control/issues)
- [GitHub Discussions](https://github.com/username/react-width-control/discussions)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🎯 Getting Help

If you encounter any issues:

1. **Check the troubleshooting section** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Join the community** discussions

### Issue Template

When creating an issue, please include:

- **Environment**: Node.js version, npm version, OS
- **Steps to reproduce**: Clear, step-by-step instructions
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Screenshots**: If applicable
- **Code example**: Minimal reproduction case

---

**Happy Coding! 🚀**

*This project is maintained by the React Width Components community. We welcome contributions from developers of all skill levels.* 