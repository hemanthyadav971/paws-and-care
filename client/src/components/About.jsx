import React from 'react';
import { Heart, Target, Eye, CheckCircle2, Award, Clock, ShieldCheck, Stethoscope } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-pastelGreen-600" />,
      title: 'Our Mission',
      desc: 'To deliver compassionate, comprehensive, and accessible pet wellness that enriches the human-animal bond and ensures our companions thrive at every age.'
    },
    {
      icon: <Eye className="w-6 h-6 text-coralAccent-500" />,
      title: 'Our Vision',
      desc: 'To establish the most trusted, progressive, and stress-free pet care sanctuary where advanced medicine harmonizes with heartfelt kindness.'
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: 'Core Values',
      desc: 'Uncompromising safety, ethical stewardship, continuous education, transparent communication, and genuine affection for every four-legged visitor.'
    }
  ];

  const reasons = [
    'Fear-Free Certified staff trained to eliminate veterinary anxiety',
    'Integrated electronic pet health records accessible 24/7',
    'Separate dog and cat waiting suites to minimize sensory stress',
    'Full in-house digital radiology, ultrasound, and rapid blood laboratory',
    'Customized nutrition & wellness regimens adapted to your pet’s lifestyle'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            About Paws & Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            A Compassionate Sanctuary Built for Pet Happiness & Health
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Founded by passionate animal health professionals, Paws & Care has evolved into a premier full-service wellness institute. We treat your pets like our own family.
          </p>
        </div>

        {/* Mission, Vision, Values 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-warmCream-50 border border-warmCream-200/80 rounded-2xl p-7 hover:shadow-soft-hover transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Two-Column Showcase: Caregivers & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-warmCream-50 via-pastelGreen-50/40 to-white rounded-3xl p-8 sm:p-12 border border-warmCream-200">
          
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80"
                alt="Veterinarian examining puppy"
                className="rounded-2xl shadow-md object-cover h-52 sm:h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=600&q=80"
                alt="Caregiver petting a happy kitten"
                className="rounded-2xl shadow-md object-cover h-52 sm:h-64 w-full mt-6"
              />
            </div>
            <div className="absolute -bottom-4 left-6 bg-white py-3 px-5 rounded-xl shadow-lg border border-warmCream-200 flex items-center gap-3">
              <Award className="w-8 h-8 text-pastelGreen-600" />
              <div>
                <p className="text-xs font-bold text-gray-900">Accredited Excellence</p>
                <p className="text-[11px] text-gray-500">Gold Standard Veterinary Practice</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-coralAccent-600">
                Why Pet Parents Trust Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 font-display">
                Modern Medical Capability With Old-Fashioned Warmth
              </h3>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We know veterinary visits can be stressful for pets and parents alike. That is why our facility was architected from the ground up with low-sound ventilation, non-slip surfaces, and calming pheromone diffusers.
            </p>

            <ul className="space-y-3">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pastelGreen-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="text-3xl font-extrabold text-pastelGreen-700 font-display">100%</span>
                <p className="text-xs text-gray-500 font-medium">Safety Commitment</p>
              </div>
              <div className="h-10 w-px bg-warmCream-300"></div>
              <div>
                <span className="text-3xl font-extrabold text-coralAccent-500 font-display">24/7</span>
                <p className="text-xs text-gray-500 font-medium">On-Duty Support</p>
              </div>
              <div className="h-10 w-px bg-warmCream-300"></div>
              <div>
                <span className="text-3xl font-extrabold text-pastelGreen-700 font-display">12,000+</span>
                <p className="text-xs text-gray-500 font-medium">Pets Treated</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
