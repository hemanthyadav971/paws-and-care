import React, { useState } from 'react';
import { testimonialsData } from '../data/petData';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-warmCream-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            Testimonials & Love
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            Loved by Over 500+ Pet Parents
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Real stories and heartfelt gratitude from pet owners who trust us with their canine, feline, and exotic family members.
          </p>
        </div>

        {/* Carousel / Focus Card */}
        <div className="max-w-3xl mx-auto relative mb-12">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-warmCream-200 relative">
            <Quote className="w-12 h-12 text-warmCream-300 absolute top-6 right-8 opacity-40 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed mb-8">
              "{testimonialsData[activeIndex].comment}"
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 border-t border-warmCream-100 pt-6">
              <img
                src={testimonialsData[activeIndex].avatar}
                alt={testimonialsData[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-pastelGreen-300 shadow-sm"
              />
              <div>
                <h4 className="text-base font-bold text-gray-900 font-display">
                  {testimonialsData[activeIndex].name}
                </h4>
                <p className="text-xs font-semibold text-pastelGreen-700 flex items-center gap-1">
                  <span>Pet Parent of</span>
                  <span className="font-extrabold text-coralAccent-500">
                    {testimonialsData[activeIndex].petName}
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-between items-center mt-6 px-2">
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === i ? 'w-8 bg-pastelGreen-600' : 'w-2.5 bg-warmCream-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-warmCream-300 text-gray-700 flex items-center justify-center hover:bg-pastelGreen-50 hover:text-pastelGreen-700 shadow-sm transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-warmCream-300 text-gray-700 flex items-center justify-center hover:bg-pastelGreen-50 hover:text-pastelGreen-700 shadow-sm transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
