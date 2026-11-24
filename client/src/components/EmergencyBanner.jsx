import React from 'react';
import { AlertCircle, PhoneCall, Clock } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-coralAccent-500 text-white py-2.5 px-4 text-xs sm:text-sm font-medium shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-bold flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> 24/7 Critical Emergency Care Available:
          </span>
          <span className="hidden md:inline text-white/90">
            Immediate surgical triage & urgent poisoning or trauma stabilization.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-1 text-white/90 text-xs">
            <Clock className="w-3.5 h-3.5" /> No Appointment Needed For Trauma
          </span>
          <a
            href="tel:+18007292273"
            className="inline-flex items-center gap-1.5 bg-white text-coralAccent-600 font-extrabold px-3 py-1 rounded-full text-xs shadow hover:bg-warmCream-50 transition-all hover:scale-105"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Hotline: (800) 729-2273</span>
          </a>
        </div>
      </div>
    </div>
  );
}
