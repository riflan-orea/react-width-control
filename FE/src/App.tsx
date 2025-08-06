import React from 'react';
import './App.css';
import { MinWidth, MaxWidth, Width, Truncate, MultilineTruncate, TextTruncate } from './index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React MinWidth Component Library</h1>
        <p>A collection of React components for width constraints and text truncation</p>
      </header>
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2>MinWidth Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <MinWidth size={200}>
              <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', border: '2px solid #2196f3', borderRadius: '4px' }}>
                MinWidth 200px
              </div>
            </MinWidth>
            
            <MinWidth size={300}>
              <div style={{ backgroundColor: '#e8f5e8', padding: '1rem', border: '2px solid #4caf50', borderRadius: '4px' }}>
                MinWidth 300px
              </div>
            </MinWidth>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>MaxWidth Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <MaxWidth size={250}>
              <div style={{ backgroundColor: '#fff3e0', padding: '1rem', border: '2px solid #ff9800', borderRadius: '4px' }}>
                MaxWidth 250px - This text will wrap when it exceeds the maximum width
              </div>
            </MaxWidth>
            
            <MaxWidth size={400}>
              <div style={{ backgroundColor: '#f3e5f5', padding: '1rem', border: '2px solid #9c27b0', borderRadius: '4px' }}>
                MaxWidth 400px - This text will wrap when it exceeds the maximum width
              </div>
            </MaxWidth>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Width Component (Combined)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Width minWidth={200} maxWidth={400}>
              <div style={{ backgroundColor: '#e1f5fe', padding: '1rem', border: '2px solid #03a9f4', borderRadius: '4px' }}>
                MinWidth 200px, MaxWidth 400px
              </div>
            </Width>
            
            <Width width={350} truncate>
              <div style={{ backgroundColor: '#fff8e1', padding: '1rem', border: '2px solid #ffc107', borderRadius: '4px' }}>
                Fixed width 350px with single-line truncation
              </div>
            </Width>
            
            <Width maxWidth={300} truncateLines={2}>
              <div style={{ backgroundColor: '#fce4ec', padding: '1rem', border: '2px solid #e91e63', borderRadius: '4px' }}>
                MaxWidth 300px with 2-line truncation. This text will be truncated after exactly 2 lines with ellipsis.
              </div>
            </Width>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Truncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Truncate>
              <div style={{ maxWidth: '250px', backgroundColor: '#e3f2fd', padding: '1rem', border: '2px solid #2196f3', borderRadius: '4px' }}>
                Single-line truncation with ellipsis
              </div>
            </Truncate>
            
            <Truncate>
              <div style={{ maxWidth: '200px', backgroundColor: '#e8f5e8', padding: '1rem', border: '2px solid #4caf50', borderRadius: '4px' }}>
                Very long text that should be truncated with ellipsis when it exceeds the container width
              </div>
            </Truncate>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>MultilineTruncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <MultilineTruncate lines={2}>
              <div style={{ maxWidth: '300px', backgroundColor: '#fff3e0', padding: '1rem', border: '2px solid #ff9800', borderRadius: '4px' }}>
                2-line truncation. This text will be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line.
              </div>
            </MultilineTruncate>
            
            <MultilineTruncate lines={3}>
              <div style={{ maxWidth: '350px', backgroundColor: '#f3e5f5', padding: '1rem', border: '2px solid #9c27b0', borderRadius: '4px' }}>
                3-line truncation. This text will be truncated after exactly 3 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the third line. This allows for more content to be displayed before truncation occurs.
              </div>
            </MultilineTruncate>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>TextTruncate Component</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <TextTruncate>
              <div style={{ maxWidth: '250px', backgroundColor: '#e1f5fe', padding: '1rem', border: '2px solid #03a9f4', borderRadius: '4px' }}>
                Default single-line truncation
              </div>
            </TextTruncate>
            
            <TextTruncate lines={2}>
              <div style={{ maxWidth: '300px', backgroundColor: '#fff8e1', padding: '1rem', border: '2px solid #ffc107', borderRadius: '4px' }}>
                2-line truncation. This text will be truncated after exactly 2 lines with ellipsis. The text will be cut off and replaced with "..." at the end of the second line.
              </div>
            </TextTruncate>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2>Component Comparison</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <h3>Key Differences:</h3>
            <ul>
              <li><strong>MinWidth:</strong> Sets minimum width constraint only</li>
              <li><strong>MaxWidth:</strong> Sets maximum width constraint only</li>
              <li><strong>Width:</strong> Combines min/max/fixed width with optional truncation</li>
              <li><strong>Truncate:</strong> Single-line text truncation only</li>
              <li><strong>MultilineTruncate:</strong> Multi-line text truncation with specified line count</li>
              <li><strong>TextTruncate:</strong> Flexible truncation (single or multi-line based on props)</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
