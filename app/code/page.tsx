'use client';

import { useState, useEffect } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import "@/styles/code.css"

type Language = 'javascript' | 'python' | 'cpp';



export default function CodePage() {
  const [code, setCode] = useState<string>('console.log("Hello World");');
  const [output, setOutput] = useState<string>('Run your code to see the output here...');
  const [language, setLanguage] = useState<Language>('javascript');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const handleModeChange = () => {
      const mode = localStorage.getItem('modeByThean');
      setIsDarkMode(mode === 'dark');
    };

    window.addEventListener('mode-changed', handleModeChange);

    // Đọc lần đầu khi vào trang
    handleModeChange();

    return () => {
      window.removeEventListener('mode-changed', handleModeChange);
    };
  }, []);

  const languageIds: Record<Language, number> = {
    javascript: 63,
    python: 71,
    cpp: 54,
  };



  async function handleRunCode() {
    setLoading(true);
    try {
      const res = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: code,
          language_id: languageIds[language],
        }),
      });

      const data = await res.json();
      setOutput(data.output || 'No output');
    } catch (error) {
      console.error(error);
      setOutput('Error executing code.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="main-container">
      {/* Editor Area */}
      <div className="editor-container">
        {/* Toolbar */}
        <div className="toolbar">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="language-select"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>

          <button
            onClick={handleRunCode}
            disabled={loading}
            className="run-button"
          >
            {loading ? 'Running...' : 'Run'}
          </button>
        </div>

        {/* Code Editor */}
        <div className="code-editor">
          <CodeEditor value={code} onChange={setCode} language={language} isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Right - Output */}
      <div className="output-container">
        <div className="output-title">
          <span>Output</span>
        </div>
        <div className="output-console">
          {output}
        </div>
      </div>
    </div>
  );
}
