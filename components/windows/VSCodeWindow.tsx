'use client';
import DraggableWindowShell from '@/components/DraggableWindowShell';
import { useWindowStore } from '@/store/windowStore';
import { useState } from 'react';
import { CodeEditor } from '@/components/CodeEditor';

export default function VSCodeWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const { closeWindow, minimizeWindow } = useWindowStore.getState();
  const [isMaximized, setIsMaximized] = useState(false);
  const [code, setCode] = useState(`console.log("Hello from VS Code");`);
  const [output, setOutput] = useState('Run your code to see the output...');
  const [loading, setLoading] = useState(false);

  const icons = [
    '/icons/vscode/file-explorer.svg',
    '/icons/vscode/search.svg',
    '/icons/vscode/git.svg',
    '/icons/vscode/debug.svg',
    '/icons/vscode/extensions.svg',
  ];

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source_code: code,
          language_id: 63, // JS
        }),
      });

      const data = await res.json();
      setOutput(data.output || 'No output');
    } catch {
      setOutput('Error running code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DraggableWindowShell
      id={id}
      zIndex={zIndex}
      title="Visual Studio Code"
      onClose={() => closeWindow(id)}
      onMinimize={() => minimizeWindow(id)}
      onMaximize={() => setIsMaximized((v) => !v)}
      className={isMaximized ? 'top-0 left-0 w-full h-full' : 'w-[960px] h-[600px]'}
    >
      <div className="flex flex-col h-full bg-[#1e1e1e] text-white">
        <div className="flex flex-1">
          <div className="w-12 bg-[#252526] flex flex-col items-center py-2 space-y-3">
            {icons.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="icon"
                className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer"
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col">
            <div className="bg-[#2d2d2d] px-4 py-1 text-sm border-b border-black">
              📄 index.js
            </div>
            <div className="flex-1 grid grid-cols-3 bg-[#1e1e1e] overflow-hidden">
              <div className="col-span-2">
                <CodeEditor
                  language="javascript"
                  value={code}
                  onChange={setCode}
                  isDarkMode={true}
                />
              </div>
              <div className="col-span-1 bg-black text-green-400 p-3 text-sm">
                <div className="mb-2 text-neutral-400">Output:</div>
                <div className="whitespace-pre-wrap">{output}</div>
              </div>
            </div>
            <div className="bg-[#2d2d2d] p-2 flex justify-between">
              <button
                onClick={runCode}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm"
              >
                {loading ? 'Running...' : 'Run'}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#007acc] text-white text-xs px-3 py-1 flex justify-between">
          <div>Status: Ready</div>
          <div>Ln 1, Col 1 | UTF-8 | JavaScript</div>
        </div>
      </div>
    </DraggableWindowShell>
  );
}
