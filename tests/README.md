# 🧪 React Width Components - Test Suite

This directory contains comprehensive test components for all 6 React Width Components to verify their functionality and behavior.

## 📁 Test Components

### 1. **MinWidth.test.tsx**
Tests for the `MinWidth` component that sets minimum width constraints.
- ✅ Native HTML elements (div, button, input)
- ✅ React components (custom components, styled components)
- ✅ Edge cases (very small/large min-width values)
- ✅ Responsive behavior
- ✅ Style preservation

### 2. **MaxWidth.test.tsx**
Tests for the `MaxWidth` component that sets maximum width constraints.
- ✅ Native HTML elements (div, p, article)
- ✅ React components (custom components, styled components)
- ✅ Content behavior (long text, images, forms)
- ✅ Edge cases (very small/large max-width values)
- ✅ Responsive behavior

### 3. **Width.test.tsx**
Tests for the `Width` component that provides flexible width control.
- ✅ Individual constraints (minWidth only, maxWidth only, width only)
- ✅ Combined constraints (minWidth + maxWidth, minWidth + width, etc.)
- ✅ React components and styled components
- ✅ Form elements (input, textarea, button)
- ✅ Edge cases (conflicting constraints)
- ✅ Responsive behavior

### 4. **Truncate.test.tsx**
Tests for the `Truncate` component that provides single-line text truncation.
- ✅ Native HTML elements (p, span, h3, a, code)
- ✅ React components (custom components, styled components)
- ✅ Different container sizes
- ✅ Content types (URLs, emails, file paths)
- ✅ Edge cases (short text, special characters, emojis)
- ✅ Responsive behavior

### 5. **MultilineTruncate.test.tsx**
Tests for the `MultilineTruncate` component that provides multi-line text truncation.
- ✅ Different line counts (1, 2, 3, 4, 5+ lines)
- ✅ React components (custom components, styled components)
- ✅ Content types (articles, descriptions, comments)
- ✅ Edge cases (short text, line breaks, emojis)
- ✅ Responsive behavior

### 6. **TextTruncate.test.tsx**
Tests for the `TextTruncate` component that provides flexible text truncation.
- ✅ Single-line truncation (default behavior)
- ✅ Multi-line truncation (with lines prop)
- ✅ React components (custom components, styled components)
- ✅ Different line counts (1, 2, 3, 4, 5+ lines)
- ✅ Content types (articles, descriptions, comments)
- ✅ Edge cases (short text, special characters, emojis)
- ✅ Responsive behavior

### 7. **TestRunner.tsx**
Main test runner component that combines all individual test components.
- ✅ Tabbed navigation between all test components
- ✅ Sticky header with component information
- ✅ Test instructions and summary
- ✅ Responsive design

## 🚀 How to Use

### Option 1: Use TestRunner (Recommended)
```tsx
import TestRunner from './tests/TestRunner';

function App() {
  return <TestRunner />;
}
```

### Option 2: Use Individual Test Components
```tsx
import MinWidthTest from './tests/MinWidth.test';
import MaxWidthTest from './tests/MaxWidth.test';
import WidthTest from './tests/Width.test';
import TruncateTest from './tests/Truncate.test';
import MultilineTruncateTest from './tests/MultilineTruncate.test';
import TextTruncateTest from './tests/TextTruncate.test';

function App() {
  return (
    <div>
      <MinWidthTest />
      <MaxWidthTest />
      <WidthTest />
      <TruncateTest />
      <MultilineTruncateTest />
      <TextTruncateTest />
    </div>
  );
}
```

## 🧪 Test Coverage

Each test component covers:

### **Width Control Components**
- ✅ **MinWidth**: Minimum width constraints
- ✅ **MaxWidth**: Maximum width constraints  
- ✅ **Width**: Flexible width control (min/max/fixed)

### **Text Truncation Components**
- ✅ **Truncate**: Single-line truncation with ellipsis
- ✅ **MultilineTruncate**: Multi-line truncation with line count
- ✅ **TextTruncate**: Flexible truncation (single or multi-line)

### **Test Scenarios**
- ✅ **Native HTML Elements**: div, p, span, h3, button, input, textarea, article, etc.
- ✅ **React Components**: Custom components and styled components
- ✅ **Edge Cases**: Very small/large values, conflicting constraints
- ✅ **Content Types**: URLs, emails, file paths, articles, descriptions, comments
- ✅ **Special Characters**: Emojis, special symbols, line breaks
- ✅ **Responsive Behavior**: Container width changes, browser resizing
- ✅ **Style Preservation**: Existing styles maintained when constraints applied

## 📋 Expected Behaviors

### **Width Control Components**
- Elements should maintain their width constraints regardless of container size
- Elements should be able to expand beyond min-width when content requires it
- Elements should not exceed max-width even on larger screens
- Elements should be responsive within their constraints
- Existing styles should be preserved
- React components should be wrapped in a div with constraints
- Native HTML elements should have constraints applied directly

### **Text Truncation Components**
- Text should be truncated with ellipsis when it exceeds container width
- Text should not be truncated when it fits within container
- Ellipsis should appear at the end of truncated text
- Only single line should be shown for single-line truncation
- Multi-line truncation should respect the specified line count
- Existing styles should be preserved
- Should work with different text content types
- Should handle special characters and emojis properly
- Should be responsive to container width changes

## 🎯 Testing Instructions

1. **Open the TestRunner component** in your React application
2. **Click on different test tabs** to view specific component tests
3. **Resize your browser window** to test responsive behavior
4. **Check that elements maintain their width constraints** as expected
5. **Verify that text truncation works correctly** with ellipsis
6. **Ensure existing styles are preserved** when constraints are applied
7. **Test with both native HTML elements and React components**

## 🔧 Development

To add new test cases:

1. **Create a new test file** following the naming convention: `ComponentName.test.tsx`
2. **Import the component** from the main source: `import { ComponentName } from '../src'`
3. **Create comprehensive test scenarios** covering:
   - Basic functionality
   - React component handling
   - Edge cases
   - Responsive behavior
4. **Add the test to TestRunner.tsx** in the tests array
5. **Update this README** with the new test component information

## 📊 Test Statistics

- **Total Test Components**: 7
- **Main Components Tested**: 6
- **Test Scenarios per Component**: 15-25
- **Edge Cases Covered**: 5-10 per component
- **Responsive Tests**: 2-3 per component
- **Content Types Tested**: 5-8 per component

## 🎨 Styling

All test components use inline styles for consistency and easy modification. The styling includes:
- Color-coded sections for different test types
- Clear visual separation between test cases
- Responsive design for different screen sizes
- Professional appearance with proper spacing and typography

---

**Happy Testing! 🎯** 