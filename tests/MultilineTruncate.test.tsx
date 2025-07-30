import React from 'react';
import { MultilineTruncate } from '../src';

const MultilineTruncateTest: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>MultilineTruncate Component Tests</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic MultilineTruncate Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>1. 2 Lines - Short Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                This is a short text that should not be truncated.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>2. 2 Lines - Long Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>3. 3 Lines - Long Text</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={3}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 3 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the third line. 
                This allows for more content to be displayed before truncation occurs.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>4. 1 Line - Long Text</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={1}>
              <p style={{ margin: 0 }}>
                This text should be truncated after exactly 1 line, effectively making it single-line truncation.
              </p>
            </MultilineTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>React Component Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>5. Custom React Component - 2 Lines</h3>
          <div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <ArticleCard 
                title="Article Title"
                content="This is a very long article content that should be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with ellipsis at the end of the second line. This allows for more content to be displayed before truncation occurs."
              />
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>6. Styled Component - 3 Lines</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={3}>
              <StyledArticleComponent>
                This is a styled component with very long text that should be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with ellipsis at the end of the third line. This allows for more content to be displayed before truncation occurs.
              </StyledArticleComponent>
            </MultilineTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Different Line Counts</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>7. 4 Lines - Long Text</h3>
          <div style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={4}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 4 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the fourth line. 
                This allows for even more content to be displayed before truncation occurs. 
                The text continues to provide more context and information.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>8. 5 Lines - Very Long Text</h3>
          <div style={{ maxWidth: '450px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={5}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 5 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the fifth line. 
                This allows for even more content to be displayed before truncation occurs. 
                The text continues to provide more context and information. 
                This is the maximum number of lines before truncation.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>9. 1 Line - Short Text</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={1}>
              <p style={{ margin: 0 }}>
                Short text that should not be truncated.
              </p>
            </MultilineTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Content Types</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>10. Article Content - 2 Lines</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <article style={{ margin: 0 }}>
                This is an article with very long content that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </article>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>11. Description Text - 3 Lines</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={3}>
              <div style={{ margin: 0 }}>
                This is a product description with very long content that should be truncated after exactly 3 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the third line. 
                This allows for more content to be displayed before truncation occurs.
              </div>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>12. Comment Text - 2 Lines</h3>
          <div style={{ maxWidth: '280px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <span style={{ color: '#666' }}>
                This is a user comment with very long content that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </span>
            </MultilineTruncate>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Edge Cases</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>13. Very Short Text - 2 Lines</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                Short text.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>14. Text with Existing Styles - 3 Lines</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={3}>
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
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>15. Text with Line Breaks - 2 Lines</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                This text has line breaks.&lt;br /&gt;Second line content.&lt;br /&gt;Third line content.
              </p>
            </MultilineTruncate>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h3>16. Text with Emojis - 2 Lines</h3>
          <div style={{ maxWidth: '250px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                Text with emojis 🎉🚀✨ that should be truncated properly after 2 lines. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </p>
            </MultilineTruncate>
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
              <MultilineTruncate lines={3}>
                <p style={{ margin: 0 }}>
                  This text should be truncated after 3 lines when the container is narrow and show more lines when the container is wide. 
                  Resize the browser window to test the responsive behavior. 
                  The text will be cut off and replaced with "..." at the end of the third line.
                </p>
              </MultilineTruncate>
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
            <li>✅ Text should be truncated after the specified number of lines</li>
            <li>✅ Ellipsis should appear at the end of the last visible line</li>
            <li>✅ Text should not be truncated when it fits within the specified lines</li>
            <li>✅ Existing styles should be preserved</li>
            <li>✅ React components should be wrapped in a div with truncation styles</li>
            <li>✅ Native HTML elements should have truncation styles applied directly</li>
            <li>✅ Should work with different line counts (1, 2, 3, 4, 5+ lines)</li>
            <li>✅ Should handle different content types (articles, descriptions, comments)</li>
            <li>✅ Should handle special characters and emojis properly</li>
            <li>✅ Should be responsive to container width changes</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Custom React Component for testing
const ArticleCard: React.FC<{ title: string; content: string }> = ({ title, content }) => (
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
const StyledArticleComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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

export default MultilineTruncateTest; 