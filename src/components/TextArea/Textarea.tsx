import React from 'react';

interface TextareaProps {
  textareaValue: string;
  textareaOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const Textarea = ({textareaValue, textareaOnChange, className}: TextareaProps) => {
  return (
    <textarea value={textareaValue} onChange={textareaOnChange} />
  );
};

