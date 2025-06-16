'use client';

import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import { MONACO_THEMES } from "@/components/theme";

type Language = 'javascript' | 'python' | 'cpp';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
  isDarkMode: boolean;
}

export function CodeEditor({ value, onChange, language, isDarkMode }: CodeEditorProps) {

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      Object.entries(MONACO_THEMES).forEach(([name, theme]) => {
        monaco.editor.defineTheme(name, theme as any); // register tất cả themes
      });
    }
  }, [monaco]);

  return (
    <Editor
      height="100%"
      theme={isDarkMode ? "dracula" : "light"} // Đổi ở đây theo dark/light
      language={language}
      value={value}
      onChange={(val: any) => onChange(val || "")}
      options={{
        fontSize: 14,
        fontFamily: 'Fira Code, monospace',
        minimap: { enabled: false },
        wordWrap: "on",
        scrollBeyondLastLine: false,
      }}
    />
  );
}