import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', showSubtext = true }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 text-base',
    xl: 'w-28 h-28 text-lg',
  }[size];

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Circular Logo matching Natural Tones palette */}
      <div className={`relative ${sizeClasses} rounded-full bg-[#FDFBF7] border-2 border-[#8C5E44] shadow-xs flex flex-col items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105`}>
        {/* Outer subtle ring */}
        <div className="absolute inset-0.5 rounded-full border border-[#D9C5B2] pointer-events-none" />
        
        {/* Script Brand Name */}
        <span className="font-script text-[#8C5E44] font-bold tracking-wide text-center leading-none select-none drop-shadow-xs"
              style={{ fontSize: size === 'xl' ? '22px' : size === 'lg' ? '18px' : size === 'md' ? '14px' : '11px' }}>
          Divino Sabor
        </span>

        {/* Delicate floral illustration representation */}
        <div className="my-0.5 flex items-center justify-center gap-0.5 opacity-90">
          <span className="text-[10px] text-[#8C5E44]">🌸</span>
          <span className="w-2 h-[1px] bg-[#D9C5B2]" />
          <span className="text-[10px] text-[#8C5E44]">🌸</span>
        </div>

        {/* Curved Category Text */}
        <span className="text-[7px] uppercase tracking-widest text-[#4A3728] font-semibold text-center leading-none px-0.5 select-none"
              style={{ fontSize: size === 'xl' ? '9px' : size === 'lg' ? '8px' : '7px' }}>
          CAFETERIA & DOCERIA
        </span>
      </div>

      {showSubtext && (
        <div className="flex flex-col">
          <span className="font-serif text-[#4A3728] font-bold text-lg leading-tight tracking-tight">
            Divino Sabor
          </span>
          <span className="text-xs text-[#8C5E44] font-script font-medium tracking-wide">
            "Coisas doces acontecem por aqui"
          </span>
        </div>
      )}
    </div>
  );
};
