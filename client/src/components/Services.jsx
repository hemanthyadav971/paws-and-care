import React, { useState } from 'react';
import { servicesData } from '../data/petData';
import { Check, Calendar, Info, X, Sparkles } from 'lucide-react';

export default function Services({ onSelectServiceToBook }) {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  return (
    <section id="services" className="py-20 bg-beigeBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            Our Care Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            From routine checkups and soothing spa days to specialized nutrition and behavioral training, we ensure your pets feel loved, protected, and full of life.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-warmCream-200/90 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Image & Price Pill */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pastelGreen-800 border border-pastelGreen-200 shadow-sm">
                  {service.category}
                </div>
                <div className="absolute top-4 right-4 bg-coralAccent-500 text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md">
                  From {service.priceStarting}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-display group-hover:text-pastelGreen-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-pastelGreen-700 font-semibold mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-pastelGreen-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-warmCream-100 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedServiceForModal(service)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-pastelGreen-200 text-pastelGreen-800 hover:bg-pastelGreen-50 text-xs font-bold transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Learn More</span>
                  </button>

                  <button
                    onClick={() => onSelectServiceToBook(service.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-pastelGreen-600 hover:bg-pastelGreen-700 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-warmCream-200 relative animate-scaleUp">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedServiceForModal.image}
              alt={selectedServiceForModal.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase font-extrabold text-coralAccent-500">
                {selectedServiceForModal.category} • From {selectedServiceForModal.priceStarting}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1 font-display">
                {selectedServiceForModal.title}
              </h3>
              <p className="text-sm text-pastelGreen-700 font-semibold mb-4">
                {selectedServiceForModal.tagline}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {selectedServiceForModal.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                Full Service Inclusions:
              </h4>
              <ul className="space-y-2.5 mb-8">
                {selectedServiceForModal.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-pastelGreen-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedServiceForModal(null)}
                  className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 text-sm font-bold hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceForModal.title;
                    setSelectedServiceForModal(null);
                    onSelectServiceToBook(title);
                  }}
                  className="flex-1 py-3 rounded-xl bg-pastelGreen-600 hover:bg-pastelGreen-700 text-white text-sm font-bold shadow-md"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
