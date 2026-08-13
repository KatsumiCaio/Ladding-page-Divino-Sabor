import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F0E6D8] ${className}`}>
      {/* Skeleton Shimmer Overlay */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F0E6D8]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF7F2]/60 to-transparent animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} />
          <div className="w-8 h-8 rounded-full border-2 border-[#8C5E44]/30 border-t-[#8C5E44] animate-spin" />
        </div>
      )}

      {/* Actual Image with motion fade-in */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`w-full h-full object-cover ${className}`}
      />

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#F0E6D8] text-[#6B5E55] p-2 text-center text-xs">
          <span>☕ Divino Sabor</span>
        </div>
      )}
    </div>
  );
};
