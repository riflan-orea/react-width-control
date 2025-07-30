import React from 'react';
import { TextTruncate } from '../src';

const TextTruncateTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>TextTruncate Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic TextTruncate Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. Single-line (Default) - Short Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ margin: 0 }}>
                This is a short text that should not be truncated.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. Single-line (Default) - Long Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated with ellipsis when it exceeds the container width.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. Multi-line (2 lines) - Long Text</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>4. Multi-line (3 lines) - Long Text</h3>
          <div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={3}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 3 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the third line. 
                This allows for more content to be displayed before truncation occurs.
              </p>
            </TextTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Custom React Component - Single-line</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <ProductCard 
                title="Product Title"
                description="This is a very long product description that should be truncated with ellipsis when it exceeds the container width."
                price="$29.99"
              />
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Custom React Component - Multi-line (2 lines)</h3>
          <div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <ProductCard 
                title="Product Title"
                description="This is a very long product description that should be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with ellipsis at the end of the second line."
                price="$29.99"
              />
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>7. Styled Component - Single-line</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <StyledTextComponent>
                This is a styled component with very long text that should be truncated with ellipsis when it exceeds the container width.
              </StyledTextComponent>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. Styled Component - Multi-line (3 lines)</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={3}>
              <StyledTextComponent>
                This is a styled component with very long text that should be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with ellipsis at the end of the third line.
              </StyledTextComponent>
            </TextTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Different Line Counts</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>9. 1 Line - Long Text</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={1}>
              <p style={{ margin: 0 }}>
                This text should be truncated after exactly 1 line, effectively making it single-line truncation.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>10. 4 Lines - Long Text</h3>
          <div style={{ maxWidth: '450px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={4}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 4 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the fourth line. 
                This allows for even more content to be displayed before truncation occurs. 
                The text continues to provide more context and information.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. 5 Lines - Very Long Text</h3>
          <div style={{ maxWidth: '500px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={5}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 5 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the fifth line. 
                This allows for even more content to be displayed before truncation occurs. 
                The text continues to provide more context and information. 
                This is the maximum number of lines before truncation.
              </p>
            </TextTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Content Types</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>12. Article Content - Single-line</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <article style={{ margin: 0 }}>
                This is an article with very long content that should be truncated with ellipsis when it exceeds the container width.
              </article>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>13. Article Content - Multi-line (2 lines)</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <article style={{ margin: 0 }}>
                This is an article with very long content that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </article>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>14. Description Text - Multi-line (3 lines)</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={3}>
              <div style={{ margin: 0 }}>
                This is a product description with very long content that should be truncated after exactly 3 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the third line. 
                This allows for more content to be displayed before truncation occurs.
              </div>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>15. Comment Text - Single-line</h3>
          <div style={{ maxWidth: '280px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <span style={{ color: '#666' }}>
                This is a user comment with very long content that should be truncated with ellipsis when it exceeds the container width.
              </span>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>16. Comment Text - Multi-line (2 lines)</h3>
          <div style={{ maxWidth: '280px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <span style={{ color: '#666' }}>
                This is a user comment with very long content that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </span>
            </TextTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>17. Very Short Text - Single-line</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ margin: 0 }}>
                Short text.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>18. Very Short Text - Multi-line (2 lines)</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <p style={{ margin: 0 }}>
                Short text.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>19. Text with Existing Styles - Single-line</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ 
                margin: 0, 
                fontSize: '18px', 
                fontWeight: 'bold', 
                color: '#e91e63',
                lineHeight: '1.4'
              }}>
                This text has existing styles that should be preserved while adding truncation.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>20. Text with Existing Styles - Multi-line (3 lines)</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={3}>
              <p style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#e91e63',
                lineHeight: '1.6'
              }}>
                This text has existing styles that should be preserved while adding multi-line truncation. 
                The text will be cut off and replaced with "..." at the end of the third line. 
                This allows for more content to be displayed before truncation occurs.
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>21. Text with Special Characters - Single-line</h3>
          <div style={{ maxWidth: '200px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ margin: 0 }}>
                Text with special chars: !@#$%^&*()_+-=[]{}|;':",./&lt;&gt;?
              </p>
            </TextTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>22. Text with Emojis - Multi-line (2 lines)</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate lines={2}>
              <p style={{ margin: 0 }}>
                Text with emojis 🎉🚀✨ that should be truncated properly after 2 lines. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </p>
            </TextTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Behavior Test</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>23. Responsive Container - Single-line</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <div style={{ maxWidth: '100%', border: '1px solid #ccc', padding: '1rem' }}>
              <TextTruncate>
                <p style={{ margin: 0 }}>
                  This text should be truncated when the container is narrow and show fully when the container is wide. 
                  Resize the browser window to test the responsive behavior.
                </p>
              </TextTruncate>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>24. Responsive Container - Multi-line (3 lines)</h3>
          <div style={{ 
            border: '2px dashed #666', 
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p>Container width: <span id="container-width">Calculating...</span></p>
            <div style={{ maxWidth: '100%', border: '1px solid #ccc', padding: '1rem' }}>
              <TextTruncate lines={3}>
                <p style={{ margin: 0 }}>
                  This text should be truncated after 3 lines when the container is narrow and show more lines when the container is wide. 
                  Resize the browser window to test the responsive behavior. 
                  The text will be cut off and replaced with "..." at the end of the third line.
                </p>
              </TextTruncate>
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
            <li>✅ Default behavior should be single-line truncation</li>
            <li>✅ When lines prop is provided, should truncate after specified number of lines</li>
            <li>✅ Text should be truncated with ellipsis when it exceeds container width</li>
            <li>✅ Text should not be truncated when it fits within container</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with truncation styles</li>
            <li>✅ Native HTML elements should have truncation styles applied directly</li>
            <li>✅ Should work with different line counts (1, 2, 3, 4, 5+ lines)</li>
            <li>✅ Should handle different content types (articles, descriptions, comments)</li>
            <li>✅ Should handle special characters and emojis properly</li>
            <li>✅ Should be responsive to container width changes</li>
            <li>✅ Should be flexible between single-line and multi-line truncation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const ProductCard: React.FC<{ title: string; description: string; price: string }> = ({ 
  title, description, price 
}) => (
  <div style={{ 
    backgroundColor: '#e3f2fd', 
    padding: '1rem', 
    border: '2px solid #2196f3',
    borderRadius: '4px'
  }}>
    <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{title}</h4>
    <p style={{ margin: '0 0 1rem 0', lineHeight: '1.4' }}>{description}</p>
    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4caf50' }}>{price}</span>
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

export default TextTruncateTest; 