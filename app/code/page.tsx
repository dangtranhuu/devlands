'use client';

import { useState } from 'react';
import { CodeEditor } from '../../components/CodeEditor';

type Language = 'javascript' | 'python' | 'cpp';

export default function Code() {
  const [code, setCode] = useState<string>("console.log('Hello World');");
  const [language, setLanguage] = useState<Language>('javascript');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState(false);

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
      setOutput('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold">Live Code Runner</h1>

      <div className="flex space-x-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="p-2 bg-gray-700 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>

        <button
          onClick={handleRunCode}
          disabled={loading}
          className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>

      <CodeEditor value={code} onChange={setCode} language={language} />

      <div className="bg-black p-4 rounded min-h-[100px]">
        <h2 className="text-lg font-semibold mb-2">Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
