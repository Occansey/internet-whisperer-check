
import React from 'react';
import { renderWordPressContent } from '@/hooks/useWordPress';

interface WordPressContentProps {
  content: string;
  className?: string;
}

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const WordPressContent: React.FC<WordPressContentProps> = ({ content, className = '' }) => {
  const decodedContent = decodeHtmlEntities(content);
  
  return (
    <div 
      className={`wordpress-content ${className}`}
      dangerouslySetInnerHTML={renderWordPressContent(decodedContent)}
    />
  );
};

export default WordPressContent;
