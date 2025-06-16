
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
      className={`wordpress-content dark:text-gray-200 ${className}`}
      dangerouslySetInnerHTML={renderWordPressContent(decodedContent)}
    />
  );
};

export default WordPressContent;
