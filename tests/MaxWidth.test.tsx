import React from 'react';
import { MaxWidth } from '../src';

const MaxWidthTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>MaxWidth Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic MaxWidth Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. Native HTML Element (div) - MaxWidth 300px</h3>
          <MaxWidth size={300}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1rem', 
              border: '2px solid #4caf50',
              borderRadius: '4px'
            }}>
              This div has a maximum width of 300px. It will not exceed this width even on larger screens.
            </div>
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. Native HTML Element (p) - MaxWidth 400px</h3>
          <MaxWidth size={400}>
            <p style={{ 
              backgroundColor: '#fff3e0', 
              padding: '1rem', 
              border: '2px solid #ff9800',
              borderRadius: '4px',
              margin: '0.5rem 0'
            }}>
              This paragraph has a maximum width of 400px. Long text content will wrap within this constraint.
            </p>
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. Native HTML Element (article) - MaxWidth 500px</h3>
          <MaxWidth size={500}>
            <article style={{ 
              backgroundColor: '#f3e5f5', 
              padding: '1.5rem', 
              border: '2px solid #9c27b0',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ margin: '0 0 1rem 0' }}>Article with MaxWidth</h4>
              <p style={{ margin: 0, lineHeight: '1.6' }}>
                This article element has a maximum width of 500px. It's perfect for content that should be 
                readable on large screens without becoming too wide.
              </p>
            </article>
          </MaxWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>4. Custom React Component - MaxWidth 350px</h3>
          <MaxWidth size={350}>
            <InfoCard 
              title="Information Card"
              description="This is a custom React component wrapped with MaxWidth. It should not exceed 350px width."
              icon="ℹ️"
            />
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Styled Component - MaxWidth 250px</h3>
          <MaxWidth size={250}>
            <AlertBox type="warning">
              This is a warning alert with max-width constraint
            </AlertBox>
          </MaxWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Content Behavior Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Long Text Content - MaxWidth 200px</h3>
          <MaxWidth size={200}>
            <div style={{ 
              backgroundColor: '#e1f5fe', 
              padding: '1rem', 
              border: '2px solid #03a9f4',
              borderRadius: '4px'
            }}>
              This is a very long text that should wrap within the 200px maximum width constraint. 
              The text will automatically wrap to new lines when it reaches the maximum width.
            </div>
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>7. Image with MaxWidth - MaxWidth 300px</h3>
          <MaxWidth size={300}>
            <img 
              src="https://via.placeholder.com/400x200/2196f3/ffffff?text=400x200+Image"
              alt="Test image"
              style={{ 
                width: '100%', 
                height: 'auto',
                borderRadius: '4px',
                border: '2px solid #2196f3'
              }}
            />
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Form Element - MaxWidth 400px</h3>
          <MaxWidth size={400}>
            <form style={{ 
              backgroundColor: '#f9f9f9', 
              padding: '1rem', 
              border: '2px solid #666',
              borderRadius: '4px'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="test-input">Test Input:</label>
                <input 
                  id="test-input"
                  type="text" 
                  placeholder="This input is constrained by max-width"
                  style={{ 
                    width: '100%', 
                    padding: '0.5rem', 
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginTop: '0.25rem'
                  }}
                />
              </div>
              <button 
                type="submit"
                style={{ 
                  backgroundColor: '#4caf50', 
                  color: 'white', 
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </form>
          </MaxWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>9. Very Small MaxWidth (100px)</h3>
          <MaxWidth size={100}>
            <div style={{ 
              backgroundColor: '#ffebee', 
              padding: '0.5rem', 
              border: '1px solid #f44336',
              borderRadius: '4px',
              fontSize: '0.8rem'
            }}>
              Very small max-width test
            </div>
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>10. Large MaxWidth (800px)</h3>
          <MaxWidth size={800}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1.5rem', 
              border: '2px solid #4caf50',
              borderRadius: '8px'
            }}>
              Large max-width test. This should be constrained to 800px maximum width.
            </div>
          </MaxWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. Element with Existing Styles</h3>
          <MaxWidth size={350}>
            <div style={{ 
              backgroundColor: '#fff8e1', 
              padding: '1rem', 
              border: '2px solid #ffc107',
              borderRadius: '8px',
              margin: '1rem 0',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontSize: '16px',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              This element has existing styles that should be preserved while adding max-width.
            </div>
          </MaxWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Behavior Test</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>12. Responsive Container</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <MaxWidth size={400}>
              <div style={{ 
                backgroundColor: '#fce4ec', 
                padding: '1rem', 
                border: '2px solid #e91e63',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                This element has max-width 400px. It will be constrained on larger screens but can be smaller on mobile.
              </div>
            </MaxWidth>
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
            <li>✅ All elements should not exceed their maximum width</li>
            <li>✅ Elements should be able to shrink below max-width on smaller screens</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with max-width</li>
            <li>✅ Native HTML elements should have max-width applied directly</li>
            <li>✅ Text content should wrap within the max-width constraint</li>
            <li>✅ Images should scale down to fit within max-width</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const InfoCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div style={{ 
    backgroundColor: '#e3f2fd', 
    padding: '1.5rem', 
    border: '2px solid #2196f3',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{icon}</span>
      <h4 style={{ margin: 0, color: '#1976d2' }}>{title}</h4>
    </div>
    <p style={{ margin: 0, lineHeight: '1.6', color: '#424242' }}>{description}</p>
  </div>
);

// Styled component for testing
const AlertBox: React.FC<{ type: 'warning' | 'error' | 'info'; children: React.ReactNode }> = ({ type, children }) => {
  const colors = {
    warning: { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
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
      fontWeight: 'bold'
    }}>
      {children}
    </div>
  );
};

export default MaxWidthTest; 