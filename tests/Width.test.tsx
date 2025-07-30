import React from 'react';
import { Width } from '../src';

const WidthTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Width Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic Width Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. MinWidth Only - MinWidth 200px</h3>
          <Width minWidth={200}>
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '1rem', 
              border: '2px solid #2196f3',
              borderRadius: '4px'
            }}>
              This div has a minimum width of 200px but no maximum constraint.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. MaxWidth Only - MaxWidth 400px</h3>
          <Width maxWidth={400}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1rem', 
              border: '2px solid #4caf50',
              borderRadius: '4px'
            }}>
              This div has a maximum width of 400px but no minimum constraint.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. Both MinWidth and MaxWidth - MinWidth 250px, MaxWidth 500px</h3>
          <Width minWidth={250} maxWidth={500}>
            <div style={{ 
              backgroundColor: '#fff3e0', 
              padding: '1rem', 
              border: '2px solid #ff9800',
              borderRadius: '4px'
            }}>
              This div has both minimum (250px) and maximum (500px) width constraints.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>4. Fixed Width - Width 300px</h3>
          <Width width={300}>
            <div style={{ 
              backgroundColor: '#f3e5f5', 
              padding: '1rem', 
              border: '2px solid #9c27b0',
              borderRadius: '4px'
            }}>
              This div has a fixed width of 300px.
            </div>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Combined Width Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>5. MinWidth + MaxWidth + Fixed Width - MinWidth 200px, MaxWidth 600px, Width 400px</h3>
          <Width minWidth={200} maxWidth={600} width={400}>
            <div style={{ 
              backgroundColor: '#fce4ec', 
              padding: '1rem', 
              border: '2px solid #e91e63',
              borderRadius: '4px'
            }}>
              This div has min-width 200px, max-width 600px, and fixed width 400px.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>6. MinWidth + Fixed Width - MinWidth 150px, Width 250px</h3>
          <Width minWidth={150} width={250}>
            <div style={{ 
              backgroundColor: '#e0f2f1', 
              padding: '1rem', 
              border: '2px solid #009688',
              borderRadius: '4px'
            }}>
              This div has min-width 150px and fixed width 250px.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>7. MaxWidth + Fixed Width - MaxWidth 350px, Width 300px</h3>
          <Width maxWidth={350} width={300}>
            <div style={{ 
              backgroundColor: '#fff8e1', 
              padding: '1rem', 
              border: '2px solid #ffc107',
              borderRadius: '4px'
            }}>
              This div has max-width 350px and fixed width 300px.
            </div>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Custom React Component - MinWidth 200px, MaxWidth 400px</h3>
          <Width minWidth={200} maxWidth={400}>
            <ProductCard 
              name="Test Product"
              price="$29.99"
              description="This is a test product with width constraints applied."
              image="https://via.placeholder.com/150x100/2196f3/ffffff?text=Product"
            />
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>9. Styled Component - Fixed Width 280px</h3>
          <Width width={280}>
            <NotificationCard type="success">
              This is a success notification with fixed width
            </NotificationCard>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Form Element Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>10. Input with MinWidth and MaxWidth - MinWidth 200px, MaxWidth 400px</h3>
          <Width minWidth={200} maxWidth={400}>
            <input 
              type="text" 
              placeholder="Input with min/max width constraints"
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #2196f3',
                borderRadius: '4px',
                fontSize: '16px'
              }}
            />
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. Textarea with Fixed Width - Width 300px</h3>
          <Width width={300}>
            <textarea 
              placeholder="Textarea with fixed width"
              rows={4}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #4caf50',
                borderRadius: '4px',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>12. Button with MinWidth - MinWidth 120px</h3>
          <Width minWidth={120}>
            <button style={{ 
              backgroundColor: '#ff5722', 
              color: 'white', 
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Submit Form
            </button>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>13. Very Small Constraints - MinWidth 50px, MaxWidth 100px</h3>
          <Width minWidth={50} maxWidth={100}>
            <div style={{ 
              backgroundColor: '#ffebee', 
              padding: '0.5rem', 
              border: '1px solid #f44336',
              borderRadius: '4px',
              fontSize: '0.8rem'
            }}>
              Very small constraints test
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>14. Large Constraints - MinWidth 400px, MaxWidth 800px</h3>
          <Width minWidth={400} maxWidth={800}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1.5rem', 
              border: '2px solid #4caf50',
              borderRadius: '8px'
            }}>
              Large constraints test. This should be between 400px and 800px wide.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>15. Conflicting Constraints - MinWidth 300px, MaxWidth 200px</h3>
          <Width minWidth={300} maxWidth={200}>
            <div style={{ 
              backgroundColor: '#fff3e0', 
              padding: '1rem', 
              border: '2px solid #ff9800',
              borderRadius: '4px'
            }}>
              This has conflicting constraints (min &gt; max). Should respect min-width.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>16. Element with Existing Styles</h3>
          <Width minWidth={250} maxWidth={450}>
            <div style={{ 
              backgroundColor: '#f3e5f5', 
              padding: '1rem', 
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              margin: '1rem 0',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontSize: '16px',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              This element has existing styles that should be preserved while adding width constraints.
            </div>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Behavior Test</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>17. Responsive Container</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <Width minWidth={200} maxWidth={500}>
              <div style={{ 
                backgroundColor: '#e1f5fe', 
                padding: '1rem', 
                border: '2px solid #03a9f4',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                This element has min-width 200px and max-width 500px. It should be responsive.
              </div>
            </Width>
          </div>
        </div>
      </section>

      <section>
        <h2>Test Results</h2>
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '1rem', 
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}>
          <h3>Expected Behaviors:</h3>
          <ul>
            <li>✅ MinWidth should prevent elements from becoming too narrow</li>
            <li>✅ MaxWidth should prevent elements from becoming too wide</li>
            <li>✅ Fixed width should set exact width when provided</li>
            <li>✅ Multiple constraints should work together properly</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with constraints</li>
            <li>✅ Native HTML elements should have constraints applied directly</li>
            <li>✅ Elements should be responsive within their constraints</li>
            <li>✅ Conflicting constraints should prioritize min-width</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const ProductCard: React.FC<{ name: string; price: string; description: string; image: string }> = ({ 
  name, price, description, image 
}) => (
  <div style={{ 
    backgroundColor: 'white', 
    padding: '1rem', 
    border: '2px solid #2196f3',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <img 
      src={image} 
      alt={name}
      style={{ 
        width: '100%', 
        height: 'auto',
        borderRadius: '4px',
        marginBottom: '1rem'
      }}
    />
    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{name}</h4>
    <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#666' }}>{description}</p>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4caf50' }}>{price}</span>
      <button style={{ 
        backgroundColor: '#2196f3', 
        color: 'white', 
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  </div>
);

// Styled component for testing
const NotificationCard: React.FC<{ type: 'success' | 'error' | 'info'; children: React.ReactNode }> = ({ type, children }) => {
  const colors = {
    success: { bg: '#e8f5e8', border: '#4caf50', text: '#2e7d32' },
    error: { bg: '#ffebee', border: '#f44336', text: '#c62828' },
    info: { bg: '#e3f2fd', border: '#2196f3', text: '#1976d2' }
  };
  
  const color = colors[type];
  
  return (
    <div style={{ 
      backgroundColor: color.bg, 
      padding: '1rem', 
      border: `2px solid ${color.border}`,
      borderRadius: '6px',
      color: color.text,
      fontWeight: 'bold',
      textAlign: 'center'
    }}>
      {children}
    </div>
  );
};

export default WidthTest; 