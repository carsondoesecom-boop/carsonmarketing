import React from 'react';

interface PlaceholderImageProps {
  number: number;
  className?: string;
  aspectRatio?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ number, className = '', aspectRatio = 'aspect-video' }) => {
  return (
    <div 
      className={`bg-red-500 flex items-center justify-center border-4 border-red-700 shadow-lg ${aspectRatio} ${className}`}
    >
      <span className="text-white font-bold text-xl md:text-2xl uppercase tracking-widest">
        Picture {number}
      </span>
    </div>
  );
};
