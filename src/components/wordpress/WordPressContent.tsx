
import React from 'react';
import { renderWordPressContent } from '@/hooks/useWordPress';

interface WordPressContentProps {
  content: string;
  className?: string;
}

const WordPressContent: React.FC<WordPressContentProps> = ({ content, className = '' }) => {
  return (
    <div 
      className={`wordpress-content ${className}`}
      dangerouslySetInnerHTML={renderWordPressContent(content)}
    />
  );
};

export default WordPressContent;
