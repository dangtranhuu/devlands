'use client';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { githubLight } from '@uiw/codemirror-theme-github';

type Language = 'javascript' | 'python' | 'cpp';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
}

export function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  const extensions = {
    javascript: javascript(),
    python: python(),
    cpp: cpp(),
  };

  return (
    <CodeMirror
      value={value}
      extensions={[extensions[language]]}
      theme={githubLight}
      onChange={(val) => onChange(val)}
      basicSetup={{ lineNumbers: true }}
      style={{
        fontFamily: 'Fira Code, monospace',
        fontSize: '15px',
        height: '100%',
      }}
    />
  );
}
