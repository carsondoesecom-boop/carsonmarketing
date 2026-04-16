import React from 'react';

interface CurvedDividerProps {
  type: 'top' | 'bottom';
  color: string;
  backgroundColor?: string;
  className?: string;
}

export const CurvedDivider: React.FC<CurvedDividerProps> = ({ 
  type, 
  color, 
  backgroundColor = 'transparent',
  className = '' 
}) => {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-[0] ${className}`} 
      style={{ backgroundColor }}
    >
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {type === 'bottom' ? (
          <path 
            d="M0 0L1440 0V20C1440 20 1080 120 720 120C360 120 0 20 0 20V0Z" 
            fill={color} 
          />
        ) : (
          <path 
            d="M0 120L1440 120V100C1440 100 1080 0 720 0C360 0 0 100 0 100V120Z" 
            fill={color} 
          />
        )}
      </svg>
    </div>
  );
};
