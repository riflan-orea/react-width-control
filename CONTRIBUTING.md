# 🤝 Contributing to React Width Components

Thank you for your interest in contributing to React Width Components! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Release Process](#release-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful** of differing opinions and viewpoints
- **Be collaborative** and work together for the common good
- **Be inclusive** and welcome contributors from all backgrounds
- **Be constructive** in feedback and discussions
- **Be professional** in all interactions

### Reporting Issues

If you experience or witness unacceptable behavior, please report it by:
- Opening an issue on GitHub
- Contacting the project maintainers directly

## 🚀 How Can I Contribute?

### Types of Contributions

We welcome contributions in the following areas:

#### 🐛 Bug Reports
- Report bugs and issues
- Provide detailed reproduction steps
- Include environment information

#### 💡 Feature Requests
- Suggest new features and improvements
- Discuss implementation approaches
- Provide use cases and examples

#### 🔧 Code Contributions
- Fix bugs and issues
- Implement new features
- Improve existing code
- Add tests and documentation

#### 📚 Documentation
- Improve existing documentation
- Add examples and tutorials
- Fix typos and clarify content

#### 🧪 Testing
- Add test cases
- Improve test coverage
- Create test components

#### 🎨 Design & UX
- Improve component design
- Enhance user experience
- Add accessibility features

### Getting Started

1. **Fork the repository**
2. **Clone your fork locally**
3. **Create a feature branch**
4. **Make your changes**
5. **Test your changes**
6. **Submit a pull request**

## 🔧 Development Setup

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher) or yarn
- Git

### Setup Instructions

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/react-width-control.git
cd react-width-control

# Install dependencies
npm install

# Verify setup
npm run verify

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run type-check      # Run TypeScript checks

# Testing
npm run test:components # Run test components
npm run test:all        # Run all tests

# Quality
npm run lint            # Run ESLint
npm run format          # Run Prettier
npm run quality         # Run all quality checks
```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your code follows our standards**
   - Run `npm run quality` to check code quality
   - Fix any linting or formatting issues
   - Ensure all tests pass

2. **Test your changes**
   - Test with different React versions
   - Test with different browsers
   - Test responsive behavior
   - Test edge cases

3. **Update documentation**
   - Update README if needed
   - Add examples for new features
   - Update API documentation

4. **Create test components**
   - Add test cases for new features
   - Update existing test components
   - Ensure good test coverage

### Pull Request Guidelines

#### Title Format
```
type(scope): brief description

Examples:
feat(MinWidth): add support for percentage values
fix(Truncate): resolve ellipsis positioning issue
docs(README): update installation instructions
test(Width): add edge case tests
```

#### Description Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Checklist
- [ ] Code follows the project's coding standards
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] All quality checks pass
- [ ] Changes are backward compatible (if applicable)
```

### Review Process

1. **Automated Checks**
   - CI/CD pipeline runs tests
   - Code quality checks
   - Build verification

2. **Code Review**
   - Maintainers review the code
   - Feedback and suggestions provided
   - Changes requested if needed

3. **Approval & Merge**
   - Approved by at least one maintainer
   - Merged into main branch
   - Released in next version

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

```markdown
## Bug Description
Clear and concise description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Firefox, Safari]
- React Version: [e.g. 17.0.2, 18.0.0]
- Package Version: [e.g. 1.2.0]

## Additional Context
Any other context, screenshots, or code examples
```

### Feature Requests

When requesting features, please include:

```markdown
## Feature Description
Clear and concise description of the feature

## Use Case
Why this feature is needed and how it would be used

## Proposed Implementation
Optional: How you think this could be implemented

## Alternatives Considered
Optional: Other approaches you've considered

## Additional Context
Any other context, examples, or references
```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Use strict TypeScript configuration
- Avoid `any` type when possible

### React Components

- Use functional components with hooks
- Use TypeScript interfaces for props
- Follow React best practices
- Use forwardRef for ref forwarding

### Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

### File Structure

```
src/
├── index.ts              # Main exports
├── ComponentName.tsx     # Component implementation
└── types.ts             # Shared types (if needed)

tests/
├── ComponentName.test.tsx # Component tests
└── TestRunner.tsx        # Test runner
```

## 🧪 Testing Guidelines

### Test Requirements

- All new features must have tests
- Bug fixes must include regression tests
- Maintain high test coverage
- Test edge cases and error conditions

### Test Structure

```tsx
// Component test example
const ComponentTest: React.FC = () => {
  return (
    <div>
      <h1>Component Tests</h1>
      
      <section>
        <h2>Basic Tests</h2>
        {/* Test cases */}
      </section>
      
      <section>
        <h2>Edge Cases</h2>
        {/* Edge case tests */}
      </section>
      
      <section>
        <h2>Responsive Tests</h2>
        {/* Responsive behavior tests */}
      </section>
    </div>
  );
};
```

### Test Categories

1. **Basic Functionality**
   - Component renders correctly
   - Props work as expected
   - Default values are applied

2. **Edge Cases**
   - Invalid props handling
   - Boundary conditions
   - Error scenarios

3. **Responsive Behavior**
   - Different screen sizes
   - Container width changes
   - Browser compatibility

4. **Integration Tests**
   - Component combinations
   - Real-world usage scenarios
   - Performance tests

## 📚 Documentation

### Documentation Standards

- Write clear, concise documentation
- Include code examples
- Provide use cases and scenarios
- Keep documentation up to date

### Documentation Types

1. **API Documentation**
   - Component props and types
   - Usage examples
   - Return values and behavior

2. **User Guides**
   - Installation instructions
   - Getting started guides
   - Best practices

3. **Examples**
   - Real-world use cases
   - Common patterns
   - Integration examples

4. **Changelog**
   - Version history
   - Breaking changes
   - Migration guides

## 🚀 Release Process

### Version Management

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Steps

1. **Prepare Release**
   ```bash
   npm run build
   npm run test:all
   npm run quality
   ```

2. **Update Version**
   ```bash
   npm run version:patch  # or minor/major
   ```

3. **Update Changelog**
   - Add release notes
   - Document breaking changes
   - List new features and fixes

4. **Publish**
   ```bash
   npm run publish
   ```

5. **Create Release**
   - Create GitHub release
   - Add release notes
   - Tag the release

## 🏆 Recognition

### Contributors

We recognize contributors in several ways:

1. **GitHub Contributors**
   - Listed in repository contributors
   - Commit history preserved

2. **Release Notes**
   - Contributors mentioned in changelog
   - Credit for significant contributions

3. **Documentation**
   - Contributors listed in README
   - Special thanks for major contributions

### Contribution Levels

- **Bronze**: 1-5 contributions
- **Silver**: 6-15 contributions
- **Gold**: 16+ contributions
- **Platinum**: Major features or long-term maintenance

## 📞 Getting Help

### Questions & Support

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and discussions
- **Documentation**: Check README and examples first

### Communication Channels

- **GitHub**: Primary communication platform
- **Email**: For sensitive issues or private discussions
- **Community**: Join our community discussions

## 🙏 Thank You

Thank you for contributing to React Width Components! Your contributions help make this project better for the entire React community.

---

**Happy Contributing! 🚀**

*This contributing guide is a living document. We welcome suggestions for improvements.* 