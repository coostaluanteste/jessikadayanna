
import React from 'react';

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl p-2"
        onClick={onClose}
      >
        &times;
      </button>
      <img 
        src={imageUrl} 
        alt="Resultado Ampliado" 
        className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
      />
    </div>
  );
};
