import React, { useState } from 'react';
import MinWidthTest from './MinWidth.test';
import MaxWidthTest from './MaxWidth.test';
import WidthTest from './Width.test';
import TruncateTest from './Truncate.test';
import MultilineTruncateTest from './MultilineTruncate.test';
import TextTruncateTest from './TextTruncate.test';

const TestRunner: React.FC = () => {
  const [activeTest, setActiveTest] = useState<string>('minwidth');

  const tests = [
    { id: 'minwidth', name: 'MinWidth Tests', component: MinWidthTest },
    { id: 'maxwidth', name: 'MaxWidth Tests', component: MaxWidthTest },
    { id: 'width', name: 'Width Tests', component: WidthTest },
    { id: 'truncate', name: 'Truncate Tests', component: TruncateTest },
    { id: 'multilinetruncate', name: 'MultilineTruncate Tests', component: MultilineTruncateTest },
    { id: 'texttruncate', name: 'TextTruncate Tests', component: TextTruncateTest },
  ];

  const ActiveComponent = tests.find(test => test.id === activeTest)?.component;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation Header */}
      <header style={{ 
        backgroundColor: '#1976d2', 
        color: 'white', 
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>🎯 React Width Components - Test Suite</h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
          Comprehensive test cases for all 6 components
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav style={{ 
        backgroundColor: '#f5f5f5', 
        borderBottom: '1px solid #ddd',
        padding: '0 2rem'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          overflowX: 'auto',
          padding: '1rem 0'
        }}>
          {tests.map(test => (
            <button
              key={test.id}
              onClick={() => setActiveTest(test.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: activeTest === test.id ? '#1976d2' : '#fff',
                color: activeTest === test.id ? 'white' : '#333',
                border: `2px solid ${activeTest === test.id ? '#1976d2' : '#ddd'}`,
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {test.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Test Content */}
      <main style={{ padding: '0' }}>
        {ActiveComponent && <ActiveComponent />}
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '2rem',
        borderTop: '1px solid #ddd',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>Test Summary</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {tests.map(test => (
              <div key={test.id} style={{ 
                backgroundColor: 'white', 
                padding: '1rem', 
                borderRadius: '6px',
                border: '1px solid #ddd'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1976d2' }}>{test.name}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                  Comprehensive test cases for {test.name.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #ddd'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#333' }}>Test Instructions</h4>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '1.5rem', 
              textAlign: 'left',
              lineHeight: '1.6'
            }}>
              <li>Click on different test tabs to view specific component tests</li>
              <li>Resize your browser window to test responsive behavior</li>
              <li>Check that elements maintain their width constraints</li>
              <li>Verify that text truncation works correctly with ellipsis</li>
              <li>Ensure existing styles are preserved when constraints are applied</li>
              <li>Test with both native HTML elements and React components</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestRunner; 