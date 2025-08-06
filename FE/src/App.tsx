import './App.css';
import './truncate.css';
import MinWidth from '../../src/MinWidth';
import MaxWidth from '../../src/MaxWidth';
import Width from '../../src/Width';
import Truncate from '../../src/Truncate';
import MultilineTruncate from '../../src/MultilineTruncate';
import TextTruncate from './TextTruncate';
import TruncateCSS from './TruncateCSS';

function App() {
  return (
    <div className="App">
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1>React MinWidth Component Library</h1>
        <p>A comprehensive collection of React components for width constraints and text truncation</p>
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* TruncateCSS Component Tests */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>TruncateCSS Component (CSS-based)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div>
              <h3>2-Line CSS Truncation</h3>
              <div style={{
                maxWidth: '300px',
                backgroundColor: '#e1f5fe',
                padding: '1rem',
                border: '2px solid #03a9f4',
                borderRadius: '4px'
              }}>
                <TruncateCSS lines={2}>
                  2-line CSS truncation. This text will be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line using pure CSS classes.
                </TruncateCSS>
              </div>
            </div>

            <div>
              <h3>3-Line CSS Truncation</h3>
              <div style={{
                maxWidth: '300px',
                backgroundColor: '#e1f5fe',
                padding: '1rem',
                border: '2px solid #03a9f4',
                borderRadius: '4px'
              }}>
                <TruncateCSS lines={3}>
                  3-line CSS truncation. This text will be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the third line using pure CSS classes. This allows for more content to be displayed before truncation occurs.
                </TruncateCSS>
              </div>
            </div>

            <div>
              <h3>Multi-Line CSS Truncation</h3>
              <div style={{
                maxWidth: '300px',
                backgroundColor: '#e1f5fe',
                padding: '1rem',
                border: '2px solid #03a9f4',
                borderRadius: '4px'
              }}>
                <TruncateCSS lines="multi">
                  Multi-line CSS truncation. This text will be truncated using the generic multi-line CSS class. The text will be cut off and replaced with "..." at the end using pure CSS classes with fallback support for non-webkit browsers.
                </TruncateCSS>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginTop: '1rem' }}>
            <h4>CSS Class Benefits:</h4>
            <ul>
              <li>✅ Pure CSS solution - no JavaScript calculations</li>
              <li>✅ Cross-browser compatibility with fallback support</li>
              <li>✅ Better performance with CSS-only approach</li>
              <li>✅ Consistent behavior across different browsers</li>
              <li>✅ Easy to customize with CSS classes</li>
              <li>✅ Works with any HTML element</li>
            </ul>
          </div>
        </section>

        {/* Comparison Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2>CSS vs JavaScript Truncation Comparison</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div>
              <h3>CSS Approach (TruncateCSS)</h3>
              <div style={{
                maxWidth: '300px',
                backgroundColor: '#e1f5fe',
                padding: '1rem',
                border: '2px solid #03a9f4',
                borderRadius: '4px'
              }}>
                <TruncateCSS lines={2}>
                  This uses pure CSS classes for truncation. The text will be truncated after exactly 2 lines with ellipsis using CSS-only approach.
                </TruncateCSS>
              </div>
            </div>

            <div>
              <h3>JavaScript Approach (MultilineTruncate)</h3>
              <div style={{
                maxWidth: '300px',
                backgroundColor: '#fce4ec',
                padding: '1rem',
                border: '2px solid #e91e63',
                borderRadius: '4px'
              }}>
                <MultilineTruncate lines={2}>
                  This uses JavaScript to apply inline styles for truncation. The text will be truncated after exactly 2 lines with ellipsis using React component approach.
                </MultilineTruncate>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#e8f5e8', padding: '1rem', borderRadius: '4px', marginTop: '1rem', border: '2px solid #4caf50' }}>
            <h4>Key Differences:</h4>
            <ul>
              <li><strong>Performance:</strong> CSS approach is faster (no JavaScript calculations)</li>
              <li><strong>Browser Support:</strong> CSS has better fallback support for older browsers</li>
              <li><strong>Flexibility:</strong> JavaScript approach allows dynamic line calculations</li>
              <li><strong>Maintenance:</strong> CSS approach is easier to maintain and customize</li>
            </ul>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>MinWidth Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', border: '2px solid #2196f3', borderRadius: '4px' }}>
              <MinWidth size={200}>
                MinWidth 200px
              </MinWidth>
            </div>

            <div style={{ backgroundColor: '#e8f5e8', padding: '1rem', border: '2px solid #4caf50', borderRadius: '4px' }}>
              <MinWidth size={300}>
                MinWidth 300px
              </MinWidth>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>MaxWidth Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ backgroundColor: '#fff3e0', padding: '1rem', border: '2px solid #ff9800', borderRadius: '4px' }}>
              <MaxWidth size={250}>
                MaxWidth 250px - This text will wrap when it exceeds the maximum width
              </MaxWidth>
            </div>

            <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', border: '2px solid #9c27b0', borderRadius: '4px' }}>
              <MaxWidth size={400}>
                MaxWidth 400px - This text will wrap when it exceeds the maximum width
              </MaxWidth>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Width Component (Combined)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ backgroundColor: '#e1f5fe', padding: '1rem', border: '2px solid #03a9f4', borderRadius: '4px' }}>
              <Width minWidth={200} maxWidth={400}>
                MinWidth 200px, MaxWidth 400px
              </Width>
            </div>

            <div style={{ backgroundColor: '#fff8e1', padding: '1rem', border: '2px solid #ffc107', borderRadius: '4px' }}>
              <Width width={350} truncate>
                Fixed width 350px with single-line truncation
              </Width>
            </div>
            <div style={{ backgroundColor: '#fce4ec', padding: '1rem', border: '2px solid #e91e63', borderRadius: '4px' }}>
              <Width maxWidth={300} truncateLines={2}>
                MaxWidth 300px with 2-line truncation. This text will be truncated after exactly 2 lines with ellipsis.
              </Width>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Truncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ maxWidth: '250px', backgroundColor: '#e3f2fd', padding: '1rem', border: '2px solid #2196f3', borderRadius: '4px' }}>
              <Truncate>
                Single-line truncation with ellipsis
              </Truncate>
            </div>

            <div style={{ maxWidth: '200px', backgroundColor: '#e8f5e8', padding: '1rem', border: '2px solid #4caf50', borderRadius: '4px' }}>
              <Truncate>
                Very long text that should be truncated with ellipsis when it exceeds the container width
              </Truncate>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>MultilineTruncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ maxWidth: '300px', backgroundColor: '#fff3e0', padding: '1rem', border: '2px solid #ff9800', borderRadius: '4px' }}>
              <MultilineTruncate lines={2}>
                2-line truncation. This text will be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line.
              </MultilineTruncate>
            </div>

            <div style={{ maxWidth: '350px', backgroundColor: '#f3e5f5', padding: '1rem', border: '2px solid #9c27b0', borderRadius: '4px' }}>
              <MultilineTruncate lines={3}>
                3-line truncation. This text will be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the third line. This allows for more content to be displayed before truncation occurs.
              </MultilineTruncate>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>TextTruncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ maxWidth: '250px', backgroundColor: '#e1f5fe', padding: '1rem', border: '2px solid #03a9f4', borderRadius: '4px' }}>
              <TextTruncate>
                Default single-line truncation
              </TextTruncate>
            </div>

            <div style={{ maxWidth: '300px', backgroundColor: '#fff8e1', padding: '1rem', border: '2px solid #ffc107', borderRadius: '4px' }}>
              <TextTruncate lines={2}>
                2-line truncation. This text will be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line.
              </TextTruncate>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Component Comparison</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <h3>Component Features:</h3>
            <ul>
              <li><strong>MinWidth:</strong> Sets minimum width constraints</li>
              <li><strong>MaxWidth:</strong> Sets maximum width constraints</li>
              <li><strong>Width:</strong> Combined width constraints with truncation</li>
              <li><strong>Truncate:</strong> Single-line text truncation</li>
              <li><strong>MultilineTruncate:</strong> Multi-line text truncation</li>
              <li><strong>TextTruncate:</strong> Flexible truncation (single or multi-line)</li>
              <li><strong>TruncateCSS:</strong> CSS-based truncation with fallback support</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
