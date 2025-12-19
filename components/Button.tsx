
import React from 'react';
import { EXPERT_INFO } from '../constants';

interface ButtonProps {
  text: string;
  className?: string;
  showMicrotext?: boolean;
}

export const WhatsAppButton: React.FC<ButtonProps> = ({ 
  text, 
  className = "", 
  showMicrotext = false 
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={EXPERT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-md bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-center text-lg md:text-xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.437 2.503 1.166 3.459l-.736 2.68 2.766-.724c.91.564 1.977.887 3.12.887 3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.586-5.702-5.315-5.302zm4.423 8.018c-.243.682-1.202 1.237-1.664 1.282-.461.045-.91.243-2.911-.545-2.002-.789-3.268-2.822-3.368-2.958-.099-.136-.831-.1.831-.1-.831-1.104-.831-1.104 1.104-1.104-.615-.658-.16-.985-.16-.985-.455-.992-.416-2.427-.183-2.736.233-.31.464-.383.696-.383.232 0 .463.023.65.232.187.21.65 1.583.712 1.713.061.13.102.282.016.455-.085.172-.128.282-.255.431-.128.149-.27.332-.385.446-.128.128-.262.268-.113.522.149.255.66 1.082 1.417 1.754.974.868 1.795 1.136 2.05 1.265.255.128.404.108.556-.065.152-.172.651-.758.825-1.018.174-.26.347-.217.585-.13.238.087 1.517.714 1.777.844.261.13.434.195.498.303.064.11.064.636-.18 1.318z"/>
        </svg>
        {text}
      </a>
      {showMicrotext && (
        <span className="text-gray-500 text-xs md:text-sm italic">
          Resposta rápida • Sem compromisso
        </span>
      )}
    </div>
  );
};
