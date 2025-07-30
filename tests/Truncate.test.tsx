import React from 'react';
import { Truncate } from '../src';

const TruncateTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Truncate Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic Truncate Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. Native HTML Element (p) - Short Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This is a short text that should not be truncated.
              </p>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. Native HTML Element (p) - Long Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated with ellipsis when it exceeds the container width. The text will be cut off and replaced with "..." at the end.
              </p>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. Native HTML Element (span) - Long Text</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                This is a very long span text that should be truncated with ellipsis when it exceeds the container width.
              </span>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>4. Native HTML Element (h3) - Long Title</h3>
          <div style={{ maxWidth: '200px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <h3 style={{ margin: 0, color: '#1976d2' }}>
                This is a very long title that should be truncated with ellipsis
              </h3>
            </Truncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Custom React Component - Long Text</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <CustomTextComponent 
                title="Custom Component Test"
                content="This is a very long text content that should be truncated with ellipsis when it exceeds the container width. The text will be cut off and replaced with ellipsis at the end."
              />
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Styled Component - Long Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <StyledTextComponent>
                This is a styled component with very long text that should be truncated with ellipsis when it exceeds the container width.
              </StyledTextComponent>
            </Truncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Different Container Sizes</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>7. Small Container (150px)</h3>
          <div style={{ maxWidth: '150px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This text should be truncated in a very small container.
              </p>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Medium Container (400px)</h3>
          <div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This text might be truncated depending on the content length and container size.
              </p>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>9. Large Container (600px)</h3>
          <div style={{ maxWidth: '600px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This text should not be truncated in a large container unless the content is extremely long.
              </p>
            </Truncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Content Types</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>10. URL Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <a href="#" style={{ color: '#2196f3', textDecoration: 'none' }}>
                https://www.example.com/very/long/url/path/that/should/be/truncated/with/ellipsis
              </a>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. Email Address</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <span style={{ color: '#666' }}>
                very.long.email.address@example.com
              </span>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>12. File Path</h3>
          <div style={{ maxWidth: '280px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <code style={{ backgroundColor: '#f5f5f5', padding: '0.25rem', borderRadius: '3px' }}>
                /usr/local/bin/very/long/file/path/that/should/be/truncated
              </code>
            </Truncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>13. Very Short Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                Short
              </p>
            </Truncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>14. Text with Existing Styles</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: 'bold', 
                color: '#e91e63',
                lineHeight: '1.4'
              }}>
                This text has existing styles that should be preserved while adding truncation.
              </p>
            </Truncate>
          </div>
        </div>

                 <div style={{ marginBottom: '1rem' }}>
           <h3>15. Text with Special Characters</h3>
           <div style={{ maxWidth: '200px', border: '1px solid #ccc', padding: '1rem' }}>
             <Truncate>
               <p style={{ margin: 0 }}>
                 Text with special chars: !@#$%^&*()_+-=[]{}|;':",./&lt;&gt;?
               </p>
             </Truncate>
           </div>
         </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>16. Text with Emojis</h3>
          <div style={{ maxWidth: '180px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                Text with emojis 🎉🚀✨ that should be truncated properly
              </p>
            </Truncate>
          </div>
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
            <div style={{ maxWidth: '100%', border: '1px solid #ccc', padding: '1rem' }}>
              <Truncate>
                <p style={{ margin: 0 }}>
                  This text should be truncated when the container is narrow and show fully when the container is wide. 
                  Resize the browser window to test the responsive behavior.
                </p>
              </Truncate>
            </div>
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
            <li>✅ Text should be truncated with ellipsis when it exceeds container width</li>
            <li>✅ Text should not be truncated when it fits within container</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with truncation styles</li>
            <li>✅ Native HTML elements should have truncation styles applied directly</li>
            <li>✅ Only single line should be shown (no line wrapping)</li>
            <li>✅ Ellipsis should appear at the end of truncated text</li>
            <li>✅ Should work with different text content types (URLs, emails, etc.)</li>
            <li>✅ Should handle special characters and emojis properly</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const CustomTextComponent: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <div style={{ 
    backgroundColor: '#e3f2fd', 
    padding: '1rem', 
    border: '2px solid #2196f3',
    borderRadius: '4px'
  }}>
    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{title}</h4>
    <p style={{ margin: 0, lineHeight: '1.4' }}>{content}</p>
  </div>
);

// Styled component for testing
const StyledTextComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ 
    backgroundColor: '#fff3e0', 
    padding: '1rem', 
    border: '2px solid #ff9800',
    borderRadius: '4px',
    color: '#e65100',
    fontWeight: 'bold'
  }}>
    {children}
  </div>
);

export default TruncateTest; 