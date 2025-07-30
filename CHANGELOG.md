# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-01-20

### Added
- ✂️ **Truncate Component** - Single-line text truncation with ellipsis
- 📝 **MultilineTruncate Component** - Multi-line text truncation with line count control
- 🔧 **TextTruncate Component** - Flexible component for both single and multi-line truncation
- 📚 **Text Truncation Examples** - Comprehensive examples for all truncation use cases
- 🏷️ **Enhanced Keywords** - Added text truncation related SEO keywords
- 📖 **Updated Documentation** - Complete documentation for all truncation components

### Enhanced
- 🎯 **Use Cases** - Added text truncation scenarios (cards, comments, breadcrumbs, etc.)
- 🛠️ **TypeScript Support** - Full type definitions for all new truncation components
- 📦 **Package Description** - Updated to include text truncation functionality

## [1.1.0] - 2024-01-20

### Added
- 🎯 **MaxWidth Component** - New component for setting maximum width constraints
- 🔧 **Width Component** - Flexible component supporting minWidth, maxWidth, and width properties
- 📚 **Enhanced Documentation** - Comprehensive README with examples and use cases
- 🏷️ **SEO Optimization** - Better keywords and metadata for npm discoverability
- ✨ **TypeScript Improvements** - Enhanced type definitions and examples
- 📦 **Better Package Metadata** - Repository links, bugs URL, and comprehensive keywords

### Changed
- 📈 **Version Bump** - Updated from 1.0.3 to 1.1.0
- 📝 **Package Name** - Renamed from `react-minwidth` to `react-width-control` for better discoverability
- 📝 **Package Description** - More descriptive and searchable package description
- 🎨 **README Redesign** - Complete overhaul with better structure and examples

### Enhanced
- 🔍 **Search Discoverability** - Added extensive keywords for better npm search results
- 📖 **Documentation Quality** - Added FAQ, common use cases, and advanced usage examples
- 🛠️ **Developer Experience** - Better TypeScript support and examples

## [1.0.3] - Previous Release

### Features
- ✅ **MinWidth Component** - Basic minimum width functionality
- 🔧 **TypeScript Support** - Type definitions included
- 📦 **Build System** - Rollup-based build with ESM and CommonJS outputs
- 📄 **MIT License** - Open source licensing

---

### Coming Soon in Future Releases

- 📱 **Height Components** - MinHeight, MaxHeight, and Height controls
- 🎨 **CSS Custom Properties** - Support for CSS variables
- 🔄 **Animation Support** - Smooth transitions for width changes
- 📊 **Breakpoint Integration** - Responsive breakpoint support
- 🧩 **Compound Components** - More complex layout components

### How to Upgrade

#### From 1.1.x to 1.2.0

No breaking changes! All existing width control components work exactly the same. Simply install the latest version to get the new text truncation components:

```bash
npm install react-width-control@latest
```

New truncation components can be imported alongside existing ones:

```tsx
// Before (still works)
import { MinWidth, MaxWidth, Width } from 'react-width-control';

// New in 1.2.0 - Text Truncation
import { MinWidth, MaxWidth, Width, Truncate, MultilineTruncate, TextTruncate } from 'react-width-control';
```

#### From 1.0.x to 1.2.0

All components are backward compatible:

```tsx
// Before (still works)
import { MinWidth } from 'react-width-control';

// All new components available
import { MinWidth, MaxWidth, Width, Truncate, MultilineTruncate, TextTruncate } from 'react-width-control';
```