import React, { useState } from 'react';
import { BellRing, ShieldAlert, Sparkles, Check, Calendar, ArrowRight } from 'lucide-react';

export default function PetHealthReminder({ onBookClick }) {
  const [petType, setPetType] = useState('Dog');
  const [lifeStage, setLifeStage] = useState('Adult');
  const [lastCheckupMonths, setLastCheckupMonths] = useState(6);

  const getReminders = () => {
    const list = [];
    if (lastCheckupMonths >= 12) {
      list.push({
        status: 'Urgent',
        badgeColor: 'bg-rose-100 text-rose-700 border-rose-300',
        title: 'Annual Physical & Blood Panel Overdue',
        desc: 'Over 12 months since last checkup. Routine early-detection screening is strongly advised.'
      });
    } else if (lastCheckupMonths >= 6) {
      list.push({
        status: 'Upcoming',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
        title: 'Semi-Annual Wellness & Parasite Screen',
        desc: 'Recommended checkup window approaching within the next 30 to 60 days.'
      });
    } else {
      list.push({
        status: 'On Track',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        title: 'General Wellness Status Current',
        desc: 'Physical evaluation is current. Keep up regular parasite preventive doses monthly.'
      });
    }

    if (lifeStage === 'Puppy/Kitten') {
      list.push({
        status: 'Key Milestone',
        badgeColor: 'bg-pastelGreen-100 text-pastelGreen-800 border-pastelGreen-300',
        title: 'Core Vaccine Booster Sequence & Microchipping',
        desc: 'Critical 3-4 week booster intervals until 16 weeks of age, followed by spay/neuter consult.'
      });
    } else if (lifeStage === 'Senior') {
      list.push({
        status: 'Senior Focus',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
        title: 'Bi-Annual Senior Arthritis & Renal Chemistry',
        desc: 'Senior companions benefit from twice-yearly joint mobility and metabolic enzyme checks.'
      });
    } else {
      list.push({
        status: 'Preventive',
        badgeColor: 'bg-pastelGreen-100 text-pastelGreen-800 border-pastelGreen-300',
        title: 'Professional Dental Scaling & Polishing',
        desc: 'Annual periodontal cleaning prevents plaque biofilm from causing cardiac bacteremia.'
      });
    }

    return list;
  };

  const reminders = getReminders();

  return (
    <section id="health-tool" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-warmCream-100/70 via-pastelGreen-50/40 to-white rounded-3xl p-8 sm:p-12 border border-warmCream-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Tool Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
                  Interactive Wellness Helper
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2 font-display">
                  Pet Health Check & Vaccine Reminder
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Not sure if your furry friend is due for their shots or dental cleaning? Select their life stage below for customized recommendations.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-2xl border border-warmCream-200 shadow-sm">
                
                {/* Pet Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    1. Species:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Dog', 'Cat', 'Other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPetType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                          petType === type
                            ? 'bg-pastelGreen-600 text-white shadow-sm'
                            : 'bg-warmCream-50 text-gray-700 hover:bg-pastelGreen-50'
                        }`}
                      >
                        {type === 'Dog' && '🐕 '}
                        {type === 'Cat' && '🐈 '}
                        {type === 'Other' && '🐾 '}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Life Stage Selector */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    2. Life Stage:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Puppy/Kitten', 'Adult', 'Senior'].map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => setLifeStage(stage)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                          lifeStage === stage
                            ? 'bg-pastelGreen-600 text-white shadow-sm'
                            : 'bg-warmCream-50 text-gray-700 hover:bg-pastelGreen-50'
                        }`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Months Since Last Checkup Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      3. Time Since Last Vet Exam:
                    </label>
                    <span className="text-xs font-extrabold text-pastelGreen-700 bg-pastelGreen-50 px-2 py-0.5 rounded-md">
                      {lastCheckupMonths} Months Ago
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={lastCheckupMonths}
                    onChange={(e) => setLastCheckupMonths(Number(e.target.value))}
                    className="w-full accent-pastelGreen-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                    <span>1 mo</span>
                    <span>6 mos</span>
                    <span>12 mos (Annual)</span>
                    <span>24 mos</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Calculated Action Plan */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <BellRing className="w-5 h-5 text-coralAccent-500" />
                <span>Custom Care Schedule for {lifeStage} {petType}</span>
              </h3>

              <div className="space-y-3">
                {reminders.map((rem, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl border border-warmCream-200 shadow-sm space-y-2 hover:border-pastelGreen-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${rem.badgeColor}`}>
                        {rem.status}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">Priority Guidance</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{rem.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{rem.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-coralAccent-500 to-coralAccent-600 hover:from-coralAccent-600 hover:to-coralAccent-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Recommended Checkup Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
