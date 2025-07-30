import React from 'react';
import { Width } from '../src';

const WidthTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Width Component Tests (Enhanced with Truncation)</h1>
      
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
        <h2>Truncation Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Single-line Truncation - MaxWidth 300px</h3>
          <Width maxWidth={300} truncate>
            <p style={{ margin: 0 }}>
              This is a very long text that should be truncated with ellipsis when it exceeds the container width. The text will be cut off and replaced with "..." at the end.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Multi-line Truncation (2 lines) - MaxWidth 350px</h3>
          <Width maxWidth={350} truncateLines={2}>
            <p style={{ margin: 0 }}>
              This is a very long text that should be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line. This allows for more content to be displayed before truncation occurs.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>7. Multi-line Truncation (3 lines) - MaxWidth 400px</h3>
          <Width maxWidth={400} truncateLines={3}>
            <p style={{ margin: 0 }}>
              This is a very long text that should be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the third line. This allows for more content to be displayed before truncation occurs. The text continues to provide more context and information.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Custom Ellipsis - MaxWidth 250px</h3>
          <Width maxWidth={250} truncate truncateEllipsis=" [more]">
            <p style={{ margin: 0 }}>
              This text uses a custom ellipsis that says "[more]" instead of the default "..." when truncated.
            </p>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Combined Width and Truncation Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>9. MinWidth + MaxWidth + Single-line Truncation</h3>
          <Width minWidth={200} maxWidth={400} truncate>
            <div style={{ 
              backgroundColor: '#e1f5fe', 
              padding: '1rem', 
              border: '2px solid #03a9f4',
              borderRadius: '4px'
            }}>
              This div has min-width 200px, max-width 400px, and single-line truncation. The text will be truncated with ellipsis when it exceeds the container width.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>10. Fixed Width + Multi-line Truncation (2 lines)</h3>
          <Width width={350} truncateLines={2}>
            <div style={{ 
              backgroundColor: '#fff8e1', 
              padding: '1rem', 
              border: '2px solid #ffc107',
              borderRadius: '4px'
            }}>
              This div has a fixed width of 350px and multi-line truncation after 2 lines. The text will be cut off and replaced with "..." at the end of the second line.
            </div>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. MinWidth + MaxWidth + Multi-line Truncation (3 lines)</h3>
          <Width minWidth={250} maxWidth={500} truncateLines={3}>
            <div style={{ 
              backgroundColor: '#fce4ec', 
              padding: '1rem', 
              border: '2px solid #e91e63',
              borderRadius: '4px'
            }}>
              This div has min-width 250px, max-width 500px, and multi-line truncation after 3 lines. The text will be cut off and replaced with "..." at the end of the third line. This allows for more content to be displayed before truncation occurs.
            </div>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests with Truncation</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>12. Custom React Component - MaxWidth + Single-line Truncation</h3>
          <Width maxWidth={350} truncate>
            <ProductCard 
              name="Product with Very Long Name That Should Be Truncated"
              description="This is a very long product description that should be truncated with ellipsis when it exceeds the container width."
              price="$29.99"
            />
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>13. Custom React Component - MaxWidth + Multi-line Truncation</h3>
          <Width maxWidth={400} truncateLines={2}>
            <ProductCard 
              name="Product with Long Name"
              description="This is a very long product description that should be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with ellipsis at the end of the second line."
              price="$29.99"
            />
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>14. Very Small Container with Truncation</h3>
          <Width maxWidth={150} truncate>
            <p style={{ margin: 0 }}>
              This text should be truncated in a very small container with single-line truncation.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>15. Truncation with Existing Styles</h3>
          <Width maxWidth={300} truncateLines={2}>
            <p style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: 'bold', 
              color: '#e91e63',
              lineHeight: '1.6'
            }}>
              This text has existing styles that should be preserved while adding multi-line truncation. The text will be cut off and replaced with "..." at the end of the second line.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>16. Truncation with Emojis</h3>
          <Width maxWidth={250} truncate>
            <p style={{ margin: 0 }}>
              Text with emojis 🎉🚀✨ that should be truncated properly with ellipsis.
            </p>
          </Width>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>17. No Truncation (Short Text)</h3>
          <Width maxWidth={300} truncate>
            <p style={{ margin: 0 }}>
              Short text that should not be truncated.
            </p>
          </Width>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Behavior Test</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>18. Responsive Container with Truncation</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <Width minWidth={200} maxWidth={500} truncateLines={2}>
              <div style={{ 
                backgroundColor: '#e1f5fe', 
                padding: '1rem', 
                border: '2px solid #03a9f4',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                This element has min-width 200px, max-width 500px, and 2-line truncation. It should be responsive and truncate text when needed. Resize the browser window to test the responsive behavior.
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
            <li>✅ Width constraints should work as before (minWidth, maxWidth, width)</li>
            <li>✅ Single-line truncation should work with <code>truncate</code> prop</li>
            <li>✅ Multi-line truncation should work with <code>truncateLines</code> prop</li>
            <li>✅ Custom ellipsis should work with <code>truncateEllipsis</code> prop</li>
            <li>✅ Width constraints and truncation should work together</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with constraints and truncation</li>
            <li>✅ Native HTML elements should have constraints and truncation applied directly</li>
            <li>✅ Elements should be responsive within their constraints</li>
            <li>✅ Truncation should only apply when text exceeds container</li>
            <li>✅ Should handle special characters and emojis properly</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const ProductCard: React.FC<{ name: string; description: string; price: string }> = ({ 
  name, description, price 
}) => (
  <div style={{ 
    backgroundColor: 'white', 
    padding: '1rem', 
    border: '2px solid #2196f3',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{name}</h4>
    <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#666' }}>{description}</p>
    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4caf50' }}>{price}</span>
  </div>
);

export default WidthTest; 