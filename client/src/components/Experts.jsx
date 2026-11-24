import React from 'react';
import { expertsData } from '../data/petData';
import { Award, Calendar, CheckCircle, GraduationCap, Stethoscope } from 'lucide-react';

export default function Experts({ onSelectExpertToBook }) {
  return (
    <section id="experts" className="py-20 bg-beigeBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            Our Care Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            Meet Our Certified Veterinarians & Trainers
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Our multidisciplinary team combines decades of medical surgical proficiency, behavioral science, and gentle fear-free handling.
          </p>
          <p className="text-xs text-pastelGreen-800 mt-2 font-medium bg-pastelGreen-50 inline-block px-3 py-1 rounded-full border border-pastelGreen-200">
            * Sample expert profiles provided as verifiable role templates
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertsData.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-3xl overflow-hidden border border-warmCream-200 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-64 overflow-hidden bg-warmCream-100">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-pastelGreen-700 text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md">
                    {expert.experience}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="inline-block text-[11px] uppercase font-extrabold tracking-wider text-coralAccent-500 mb-1">
                    {expert.badge}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-display group-hover:text-pastelGreen-700 transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-xs font-semibold text-pastelGreen-700 mb-3">
                    {expert.title}
                  </p>

                  <div className="space-y-2 text-xs text-gray-600 border-t border-warmCream-100 pt-3">
                    <p className="flex items-start gap-1.5 font-medium">
                      <GraduationCap className="w-4 h-4 text-pastelGreen-600 shrink-0" />
                      <span>{expert.qualifications}</span>
                    </p>
                    <p className="flex items-start gap-1.5 font-medium">
                      <Stethoscope className="w-4 h-4 text-coralAccent-500 shrink-0" />
                      <span>{expert.specialization}</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-4 leading-relaxed line-clamp-3">
                    {expert.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectExpertToBook(expert.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-pastelGreen-600 hover:bg-pastelGreen-700 text-white text-xs font-bold shadow-sm transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
