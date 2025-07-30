# 🚀 React Width Components - Examples

Quick copy-paste examples for `react-width-control` components including width controls and text truncation.

## 📱 Responsive Layout Examples

### Navigation Header
```tsx
import { MinWidth, MaxWidth } from 'react-width-control';

function AppHeader() {
  return (
    <MinWidth size={320}>
      <MaxWidth size={1200}>
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: '#f8f9fa'
        }}>
          <div>Brand Logo</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </MaxWidth>
    </MinWidth>
  );
}
```

### Card Grid Layout
```tsx
import { Width } from 'react-width-control';

function ProductCard({ title, price, image }) {
  return (
    <Width minWidth={280} maxWidth={350}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: 'white'
      }}>
        <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <h3>{title}</h3>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>${price}</p>
        <button style={{ 
          width: '100%', 
          padding: '0.5rem', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px' 
        }}>
          Add to Cart
        </button>
      </div>
    </Width>
  );
}

function ProductGrid({ products }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '1rem',
      padding: '1rem'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
```

## 📝 Form Examples

### Contact Form
```tsx
import { MinWidth, MaxWidth, Width } from 'react-width-control';

function ContactForm() {
  return (
    <MaxWidth size={600}>
      <form style={{ padding: '2rem', maxWidth: '100%' }}>
        <h2>Contact Us</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label>
          <MinWidth size={250}>
            <input 
              id="name"
              type="text" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <MinWidth size={300}>
            <input 
              id="email"
              type="email" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label>
          <MaxWidth size={500}>
            <textarea 
              id="message"
              rows={5}
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical'
              }} 
            />
          </MaxWidth>
        </div>

        <MinWidth size={120}>
          <button 
            type="submit"
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </MinWidth>
      </form>
    </MaxWidth>
  );
}
```

### Search Bar
```tsx
import { Width } from 'react-width-control';

function SearchBar() {
  return (
    <Width minWidth={200} maxWidth={500}>
      <div style={{ 
        display: 'flex', 
        border: '2px solid #007bff',
        borderRadius: '25px',
        overflow: 'hidden'
      }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          style={{ 
            flex: 1,
            padding: '0.75rem 1rem', 
            border: 'none',
            outline: 'none'
          }} 
        />
        <button style={{ 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none',
          cursor: 'pointer'
        }}>
          🔍
        </button>
      </div>
    </Width>
  );
}
```

## 🎨 CSS Framework Integration

### With Tailwind CSS
```tsx
import { MaxWidth, Width } from 'react-width-control';

function TailwindExample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MaxWidth size={1200}>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Width minWidth={250} maxWidth={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                <p className="text-gray-600">Description of feature 1</p>
              </div>
            </Width>
            
            <Width minWidth={250} maxWidth={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                <p className="text-gray-600">Description of feature 2</p>
              </div>
            </Width>
            
            <Width minWidth={250} maxWidth={400}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                <p className="text-gray-600">Description of feature 3</p>
              </div>
            </Width>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
```

### With Material-UI
```tsx
import { Width } from 'react-width-control';
import { Card, CardContent, Typography, Button } from '@mui/material';

function MaterialUIExample() {
  return (
    <div style={{ padding: '2rem' }}>
      <Width minWidth={300} maxWidth={600}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Responsive Card
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This card maintains its width constraints while using Material-UI components.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Width>
    </div>
  );
}
```

## 📊 Dashboard Layout

### Analytics Dashboard
```tsx
import { MinWidth, MaxWidth, Width } from 'react-width-control';

function AnalyticsDashboard() {
  return (
    <MaxWidth size={1400}>
      <div style={{ padding: '2rem' }}>
        <h1>Analytics Dashboard</h1>
        
        {/* Top Stats Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {['Users', 'Revenue', 'Orders', 'Conversion'].map(stat => (
            <MinWidth key={stat} size={180}>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#666' }}>{stat}</h3>
                <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
                  {Math.floor(Math.random() * 10000)}
                </p>
              </div>
            </MinWidth>
          ))}
        </div>

        {/* Charts Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
          <Width minWidth={400}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>Revenue Chart</h3>
              <div style={{ height: '300px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {/* Chart placeholder */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '100%',
                  color: '#666'
                }}>
                  📈 Chart goes here
                </div>
              </div>
            </div>
          </Width>

          <Width minWidth={250}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'white', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>Recent Activity</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['New order #1234', 'User registered', 'Payment received'].map((activity, i) => (
                  <li key={i} style={{ 
                    padding: '0.75rem 0', 
                    borderBottom: '1px solid #eee',
                    fontSize: '0.9rem'
                  }}>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </Width>
        </div>
      </div>
    </MaxWidth>
  );
}
```

## ✂️ Text Truncation Examples

### Single-line Text Truncation
```tsx
import { Truncate, Width } from 'react-width-control';

function TitleCard({ title, subtitle }) {
  return (
    <Width maxWidth={300}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #ddd', 
        borderRadius: '8px' 
      }}>
        <Truncate>
          <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
            {title}
          </h2>
        </Truncate>
        <Truncate>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            {subtitle}
          </p>
        </Truncate>
      </div>
    </Width>
  );
}

// Usage
<TitleCard 
  title="This is a very long title that will be truncated nicely"
  subtitle="And this is a subtitle that might also be too long for the container"
/>
```

### Multi-line Content Cards
```tsx
import { MultilineTruncate, Width } from 'react-width-control';

function ArticleCard({ title, excerpt, author }) {
  return (
    <Width minWidth={280} maxWidth={400}>
      <article style={{ 
        padding: '1.5rem', 
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <MultilineTruncate lines={2}>
          <h3 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.4rem',
            lineHeight: '1.4'
          }}>
            {title}
          </h3>
        </MultilineTruncate>
        
        <MultilineTruncate lines={3}>
          <p style={{ 
            margin: '0 0 1rem 0', 
            color: '#555',
            lineHeight: '1.6'
          }}>
            {excerpt}
          </p>
        </MultilineTruncate>
        
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#888',
          borderTop: '1px solid #eee',
          paddingTop: '0.5rem'
        }}>
          By {author}
        </div>
      </article>
    </Width>
  );
}
```

### Product Listing with Truncation
```tsx
import { TextTruncate, Width } from 'react-width-control';

function ProductList({ products }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
      gap: '1rem' 
    }}>
      {products.map(product => (
        <Width key={product.id} minWidth={250} maxWidth={350}>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white'
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <TextTruncate lines={1}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
                  {product.name}
                </h3>
              </TextTruncate>
              
              <TextTruncate lines={2}>
                <p style={{ 
                  margin: '0 0 1rem 0', 
                  color: '#666', 
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {product.description}
                </p>
              </TextTruncate>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  color: '#007bff' 
                }}>
                  ${product.price}
                </span>
                <button style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Width>
      ))}
    </div>
  );
}
```

### Comment System with Truncation
```tsx
import { TextTruncate, Width } from 'react-width-control';

function CommentThread({ comments }) {
  return (
    <Width maxWidth={600}>
      <div style={{ space: '1rem' }}>
        {comments.map(comment => (
          <div key={comment.id} style={{
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <strong>{comment.author}</strong>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>
                {comment.date}
              </span>
            </div>
            
            <TextTruncate lines={4}>
              <p style={{ margin: 0, lineHeight: '1.5' }}>
                {comment.text}
              </p>
            </TextTruncate>
            
            {comment.text.length > 200 && (
              <button style={{
                marginTop: '0.5rem',
                background: 'none',
                border: 'none',
                color: '#007bff',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}>
                Read more...
              </button>
            )}
          </div>
        ))}
      </div>
    </Width>
  );
}
```

### Navigation Breadcrumbs
```tsx
import { Truncate, Width } from 'react-width-control';

function Breadcrumbs({ path }) {
  return (
    <Width maxWidth={500}>
      <nav style={{ 
        padding: '0.5rem 0',
        borderBottom: '1px solid #eee'
      }}>
        {path.map((item, index) => (
          <span key={index} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Truncate>
              <a 
                href={item.url}
                style={{ 
                  color: index === path.length - 1 ? '#333' : '#007bff',
                  textDecoration: 'none',
                  maxWidth: '120px',
                  display: 'inline-block'
                }}
              >
                {item.name}
              </a>
            </Truncate>
            {index < path.length - 1 && (
              <span style={{ margin: '0 0.5rem', color: '#666' }}>
                →
              </span>
            )}
          </span>
        ))}
      </nav>
    </Width>
  );
}
```

## 🎯 Common Patterns

### Centered Content Container
```tsx
import { Width } from 'react-width-control';

function CenteredContainer({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <Width minWidth={320} maxWidth={800}>
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </Width>
    </div>
  );
}

// Usage
function App() {
  return (
    <CenteredContainer>
      <h1>Centered Content</h1>
      <p>This content will be centered and have width constraints.</p>
    </CenteredContainer>
  );
}
```

### Responsive Sidebar
```tsx
import { MinWidth, MaxWidth } from 'react-width-control';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <MinWidth size={200}>
        <MaxWidth size={300}>
          <aside style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '1rem',
            borderRight: '1px solid #dee2e6'
          }}>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#settings">Settings</a></li>
              </ul>
            </nav>
          </aside>
        </MaxWidth>
      </MinWidth>
      
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}
```

---

## 🚀 Getting Started

1. **Install the package:**
   ```bash
   npm install react-width-control
   ```

2. **Import components:**
   ```tsx
   import { MinWidth, MaxWidth, Width, TextTruncate } from 'react-width-control';
   ```

3. **Start using:**
   ```tsx
   <Width minWidth={200} maxWidth={600}>
     <TextTruncate lines={2}>
       <YourComponent />
     </TextTruncate>
   </Width>
   ```

For more examples and documentation, visit the [main README](README.md).

---

*💡 Pro tip: Combine these components with CSS Grid and Flexbox for powerful responsive layouts!*