import React from 'react';
import TestRunner from './TestRunner';

// Example 1: Using the main TestRunner (Recommended)
function App() {
  return (
    <div>
      <TestRunner />
    </div>
  );
}

// Example 2: Using individual test components
import MinWidthTest from './MinWidth.test';
import MaxWidthTest from './MaxWidth.test';
import WidthTest from './Width.test';
import TruncateTest from './Truncate.test';
import MultilineTruncateTest from './MultilineTruncate.test';
import TextTruncateTest from './TextTruncate.test';

function IndividualTests() {
  return (
    <div>
      <h1>Individual Component Tests</h1>
      
      <section>
        <h2>MinWidth Tests</h2>
        <MinWidthTest />
      </section>
      
      <section>
        <h2>MaxWidth Tests</h2>
        <MaxWidthTest />
      </section>
      
      <section>
        <h2>Width Tests</h2>
        <WidthTest />
      </section>
      
      <section>
        <h2>Truncate Tests</h2>
        <TruncateTest />
      </section>
      
      <section>
        <h2>MultilineTruncate Tests</h2>
        <MultilineTruncateTest />
      </section>
      
      <section>
        <h2>TextTruncate Tests</h2>
        <TextTruncateTest />
      </section>
    </div>
  );
}

// Example 3: Custom test component
import { MinWidth, MaxWidth, Width, Truncate, MultilineTruncate, TextTruncate } from '../src';

function CustomTest() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Custom Test Component</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Width Control Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>MinWidth Test</h3>
          <MinWidth size={200}>
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '1rem', 
              border: '2px solid #2196f3',
              borderRadius: '4px'
            }}>
              This div has a minimum width of 200px
            </div>
          </MinWidth>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>MaxWidth Test</h3>
          <MaxWidth size={400}>
            <div style={{ 
              backgroundColor: '#e8f5e8', 
              padding: '1rem', 
              border: '2px solid #4caf50',
              borderRadius: '4px'
            }}>
              This div has a maximum width of 400px
            </div>
          </MaxWidth>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>Width Test</h3>
          <Width minWidth={250} maxWidth={500}>
            <div style={{ 
              backgroundColor: '#fff3e0', 
              padding: '1rem', 
              border: '2px solid #ff9800',
              borderRadius: '4px'
            }}>
              This div has both minimum (250px) and maximum (500px) width constraints
            </div>
          </Width>
        </div>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Text Truncation Tests</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>Truncate Test</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <Truncate>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated with ellipsis when it exceeds the container width.
              </p>
            </Truncate>
          </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>MultilineTruncate Test</h3>
          <div style={{ maxWidth: '350px', border: '1px solid #ccc', padding: '1rem' }}>
            <MultilineTruncate lines={2}>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated after exactly 2 lines with ellipsis. 
                The text will be cut off and replaced with "..." at the end of the second line.
              </p>
            </MultilineTruncate>
          </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>TextTruncate Test (Single-line)</h3>
          <div style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '1rem' }}>
            <TextTruncate>
              <p style={{ margin: 0 }}>
                This is a very long text that should be truncated with ellipsis when it exceeds the container width.
              </p>
            </TextTruncate>
          </div>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h3>TextTruncate Test (Multi-line)</h3>
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
    </div>
  );
}

export { App, IndividualTests, CustomTest }; 