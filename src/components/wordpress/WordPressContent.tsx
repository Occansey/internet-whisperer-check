
import React from 'react';
import { renderWordPressContent } from '@/hooks/useWordPress';
import { decodeHtmlEntities } from '@/utils/htmlUtils';

interface WordPressContentProps {
  content: string;
  className?: string;
}

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
