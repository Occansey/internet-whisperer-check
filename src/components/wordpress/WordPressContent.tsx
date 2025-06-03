
import React from 'react';
import { renderWordPressContent } from '@/hooks/useWordPress';

interface WordPressContentProps {
  content: string;
  className?: string;
}

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  let decoded = textarea.value;
  
  // Handle additional numeric HTML entities that might not be caught by textarea
  const entityMap: { [key: string]: string } = {
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8211;': '–',
    '&#8212;': '—',
    '&#8230;': '…',
    '&#8249;': '‹',
    '&#8250;': '›',
    '&#171;': '«',
    '&#187;': '»',
    '&#8364;': '€',
    '&#8482;': '™',
    '&#169;': '©',
    '&#174;': '®',
    '&#8594;': '→',
    '&#8592;': '←',
    '&#8593;': '↑',
    '&#8595;': '↓'
  };
  
  // Replace numeric entities
  Object.keys(entityMap).forEach(entity => {
    decoded = decoded.replace(new RegExp(entity, 'g'), entityMap[entity]);
  });
  
  // Handle any remaining numeric entities with a general regex
  decoded = decoded.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });
  
  // Handle hex entities
  decoded = decoded.replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  return decoded;
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
