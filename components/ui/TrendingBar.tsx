import React from 'react';

interface TrendingBarProps {
  title?: string;
  className?: string;
}

const TrendingBar: React.FC<TrendingBarProps> = ({ 
  title = "Trending news", 
  className = "" 
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Title */}
      <h3 className="text-xl font-bold text-black whitespace-nowrap">
        {title}
      </h3>
      
      {/* Blue line with circle */}
      <div className="flex-1 relative">
        {/* Blue line */}
        <div className="h-1 bg-[#007bff] rounded-full"></div>
        
        {/* Blue circle at the end */}
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#007bff] rounded-full"></div>
      </div>
    </div>
  );
};

export default TrendingBar; 