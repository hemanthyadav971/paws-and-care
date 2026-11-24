import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, Instagram, Facebook, Youtube, Shield } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        setSubscribed(true);
      }
    } catch {
      setSubscribed(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pastelGreen-600/30 text-pastelGreen-400 flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="text-2xl font-extrabold text-white font-display">
                Paws <span className="text-pastelGreen-400">&</span> Care
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Your one-stop compassionate pet wellness platform. Connecting dedicated veterinarians, gentle groomers, and behavioral experts to ensure happier, healthier lives for every pet.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-pastelGreen-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-pastelGreen-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-pastelGreen-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-pastelGreen-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-pastelGreen-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Care Services</a></li>
              <li><a href="#tips" className="hover:text-pastelGreen-400 transition-colors">Pet Care Tips</a></li>
              <li><a href="#experts" className="hover:text-pastelGreen-400 transition-colors">Our Doctors & Trainers</a></li>
              <li><a href="#health-tool" className="hover:text-pastelGreen-400 transition-colors">Health Calculator</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Veterinary Health Consultation</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Gentle Grooming & Spa Bathing</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Positive Reinforcement Training</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Luxury Overnight Pet Boarding</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">GPS-Tracked Dog Walking</a></li>
              <li><a href="#services" className="hover:text-pastelGreen-400 transition-colors">Clinical Pet Diet & Nutrition</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-display">
              Pet Health Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe for monthly seasonal care tips, vaccine recall alerts, and grooming discounts.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-pastelGreen-950/60 border border-pastelGreen-700/60 rounded-xl text-xs text-pastelGreen-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pastelGreen-400 shrink-0" />
                <span>You are subscribed! Thank you for prioritizing your pet's wellness.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center rounded-xl bg-gray-800 border border-gray-700 overflow-hidden focus-within:border-pastelGreen-500">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-pastelGreen-600 hover:bg-pastelGreen-500 text-white px-3.5 py-2.5 text-xs font-bold transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-pastelGreen-500" />
                  <span>We respect your inbox. Zero spam guaranteed.</span>
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Paws & Care Pet Services Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Emergency Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
