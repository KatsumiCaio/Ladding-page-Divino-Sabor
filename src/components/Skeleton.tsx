import React from 'react';

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#D9C5B2] shadow-xs space-y-4 animate-pulse">
      <div className="w-full h-48 bg-[#F0E6D8] rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF7F2]/60 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      </div>
      <div className="space-y-2 pt-2">
        <div className="h-5 bg-[#F0E6D8] rounded-md w-3/4" />
        <div className="h-3 bg-[#F0E6D8] rounded-md w-full" />
        <div className="h-3 bg-[#F0E6D8] rounded-md w-5/6" />
      </div>
      <div className="pt-4 border-t border-[#F0E6D8] flex items-center justify-between">
        <div className="h-4 bg-[#F0E6D8] rounded-md w-1/4" />
        <div className="h-8 bg-[#F0E6D8] rounded-xl w-1/3" />
      </div>
    </div>
  );
};

export const ReviewSkeleton: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#D9C5B2] shadow-xs space-y-4 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-20 h-4 bg-[#F0E6D8] rounded-md" />
      </div>
      <div className="h-5 bg-[#F0E6D8] rounded-md w-2/3" />
      <div className="space-y-2">
        <div className="h-3 bg-[#F0E6D8] rounded-md w-full" />
        <div className="h-3 bg-[#F0E6D8] rounded-md w-4/5" />
      </div>
      <div className="pt-4 border-t border-[#D9C5B2] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F0E6D8]" />
        <div className="space-y-1">
          <div className="h-3 bg-[#F0E6D8] rounded-md w-24" />
          <div className="h-2 bg-[#F0E6D8] rounded-md w-16" />
        </div>
      </div>
    </div>
  );
};
