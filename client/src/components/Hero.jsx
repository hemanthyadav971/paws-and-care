import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Star, Users, Award, HeartHandshake } from 'lucide-react';

export default function Hero({ onBookClick, onExploreServices }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-warmCream-100/60 via-beigeBg to-white">
      {/* Soft background decorative circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pastelGreen-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-coralAccent-100/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-pastelGreen-100 border border-pastelGreen-300/60 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-pastelGreen-800 shadow-sm">
              <span className="text-base">🐕</span>
              <span>Your Certified Gentle-Care Companion Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] font-display">
              Because Every Pet <br className="hidden sm:inline" />
              <span className="relative inline-block text-pastelGreen-700">
                Deserves Love & Care!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-coralAccent-400 opacity-60" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 7C50 1 150 1 200 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Your trusted partner for happier, healthier, and more playful pets. We combine cutting-edge veterinary medicine, fear-free grooming, and nurturing boarding in one comforting sanctuary.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-pastelGreen-300 hover:border-pastelGreen-500 hover:bg-pastelGreen-50 font-bold px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all text-base"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-pastelGreen-600" />
              </button>

              <button
                onClick={onBookClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-coralAccent-500 to-coralAccent-600 hover:from-coralAccent-600 hover:to-coralAccent-500 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-8 border-t border-warmCream-300/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-2xl font-black text-gray-900 font-display">
                  <span>500+</span>
                </div>
                <p className="text-xs font-semibold text-gray-600 mt-0.5">Happy Pet Parents</p>
              </div>

              <div className="text-center lg:text-left border-x border-warmCream-300/80 px-2">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-2xl font-black text-gray-900 font-display">
                  <span>10+</span>
                </div>
                <p className="text-xs font-semibold text-gray-600 mt-0.5">Expert Professionals</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-2xl font-black text-amber-500 font-display">
                  <span>5.0</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <p className="text-xs font-semibold text-gray-600 mt-0.5">5-Star Care Rating</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Rounded Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-warmCream-100 aspect-[4/3] sm:aspect-[1/1] object-cover">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80"
                  alt="Happy Dog and Cat cuddling together at Paws & Care clinic"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-pastelGreen-300">Fear-Free Certified</p>
                      <p className="text-sm font-extrabold">Gentle Handling Guarantee</p>
                    </div>
                    <span className="text-2xl">🩺</span>
                  </div>
                </div>
              </div>

              {/* Floating Floating Trust Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-warmCream-200 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-pastelGreen-100 text-pastelGreen-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Licensed & Insured</p>
                  <p className="text-[11px] text-gray-500 font-medium">Certified Veterinary Team</p>
                </div>
              </div>

              {/* Floating Floating Trust Badge 2 */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-warmCream-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coralAccent-100 text-coralAccent-600 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">100% Compassion</p>
                  <p className="text-[11px] text-gray-500 font-medium">Warm, Stress-Free Spaces</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
