
import React from 'react';

interface VideoEmbedProps {
  url: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url, className = '' }) => {
  const getEmbedUrl = (url: string): string | null => {
    // YouTube URL patterns
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    
    // LinkedIn video URL patterns
    if (url.includes('linkedin.com') && url.includes('video')) {
      // LinkedIn videos need special handling - for now just return the original URL
      return url;
    }
    
    return null;
  };

  const embedUrl = getEmbedUrl(url);
  
  if (!embedUrl) {
    return (
      <div className={`bg-gray-100 border rounded-lg p-4 ${className}`}>
        <p className="text-gray-600">
          Lien vidéo: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{url}</a>
        </p>
      </div>
    );
  }

  // Handle LinkedIn videos differently
  if (url.includes('linkedin.com')) {
    return (
      <div className={`bg-gray-100 border rounded-lg p-4 ${className}`}>
        <p className="text-gray-600 mb-2">Vidéo LinkedIn:</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline block"
        >
          Voir la vidéo sur LinkedIn
        </a>
      </div>
    );
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        title="Vidéo intégrée"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
