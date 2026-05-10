import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';

const CodeBlock = ({ code, language = 'python' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-container shadow-lg">
      <div className="code-header">
        <div className="d-flex gap-2">
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></span>
        </div>
        <span className="text-uppercase tracking-widest" style={{ opacity: 0.6 }}>{language}</span>
      </div>
      <pre className="m-0" style={{ fontSize: '0.9rem' }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
