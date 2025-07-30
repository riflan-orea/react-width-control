import React from 'react';
import { MinWidth } from '../src';

const MinWidthTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>MinWidth Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic MinWidth Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. Native HTML Element (div) - MinWidth 200px</h3>
          <MinWidth size={200}>
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '1rem', 
              border: '2px solid #2196f3',
              borderRadius: '4px'
            }}>
              This div has a minimum width of 200px. Try resizing the browser window to see the effect.
            </div>
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. Native HTML Element (button) - MinWidth 150px</h3>
          <MinWidth size={150}>
            <button style={{ 
              backgroundColor: '#4caf50', 
              color: 'white', 
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Button with min-width 150px
            </button>
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. Native HTML Element (input) - MinWidth 250px</h3>
          <MinWidth size={250}>
            <input 
              type="text" 
              placeholder="Input with min-width 250px"
              style={{ 
                padding: '0.5rem', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%'
              }}
            />
          </MinWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>4. Custom React Component - MinWidth 300px</h3>
          <MinWidth size={300}>
            <CustomCard 
              title="Custom Component Test"
              content="This is a custom React component wrapped with MinWidth. It should maintain a minimum width of 300px."
            />
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Styled Component - MinWidth 180px</h3>
          <MinWidth size={180}>
            <StyledButton>
              Styled Button
            </StyledButton>
          </MinWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Very Small MinWidth (50px)</h3>
          <MinWidth size={50}>
            <div style={{ 
              backgroundColor: '#fff3e0', 
              padding: '0.5rem', 
              border: '1px solid #ff9800',
              borderRadius: '4px',
              fontSize: '0.8rem'
            }}>
              Tiny min-width test
            </div>
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>7. Large MinWidth (500px)</h3>
          <MinWidth size={500}>
            <div style={{ 
              backgroundColor: '#f3e5f5', 
              padding: '1rem', 
              border: '2px solid #9c27b0',
              borderRadius: '4px'
            }}>
              Large min-width test. This should be at least 500px wide.
            </div>
          </MinWidth>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Element with Existing Styles</h3>
          <MinWidth size={200}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1rem', 
              border: '2px solid #4caf50',
              borderRadius: '8px',
              margin: '1rem 0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              This element has existing styles that should be preserved while adding min-width.
            </div>
          </MinWidth>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Behavior Test</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>9. Responsive Container</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <MinWidth size={250}>
              <div style={{ 
                backgroundColor: '#fce4ec', 
                padding: '1rem', 
                border: '2px solid #e91e63',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                This element has min-width 250px. Resize the browser window to test responsive behavior.
              </div>
            </MinWidth>
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
            <li>✅ All elements should maintain their minimum width regardless of container size</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with min-width</li>
            <li>✅ Native HTML elements should have min-width applied directly</li>
            <li>✅ Elements should expand beyond min-width when content requires it</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const CustomCard: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div style={{ 
    backgroundColor: '#e1f5fe', 
    padding: '1.5rem', 
    border: '2px solid #03a9f4',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <h4 style={{ margin: '0 0 1rem 0', color: '#0277bd' }}>{title}</h4>
    <p style={{ margin: 0, lineHeight: '1.6' }}>{content}</p>
  </div>
);

// Styled component for testing
const StyledButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button style={{ 
    backgroundColor: '#ff5722', 
    color: 'white', 
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  }}>
    {children}
  </button>
);

export default MinWidthTest; 