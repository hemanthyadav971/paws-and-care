import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {tooltipVisible && (
        <div className="bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-warmCream-200 flex items-center gap-2 animate-bounce">
          <span className="font-semibold">Need fast help? Chat on WhatsApp! 🐾</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/18007292273?text=Hi%20Paws%20%26%20Care!%20I%20have%20a%20question%20about%20pet%20care%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none"
        aria-label="Contact us on WhatsApp"
        title="Chat with our veterinary team"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
