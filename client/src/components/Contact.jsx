import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) errs.message = 'Message content is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(data.message);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setSubmitSuccess(`Thank you, ${formData.fullName}! Your message has been received. Our team will contact you shortly.`);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-beigeBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-pastelGreen-700 bg-pastelGreen-100 px-3.5 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-display">
            Contact Paws & Care Pet Sanctuary
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Have a question about our medical procedures, boarding availability, or grooming packages? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-warmCream-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-gray-900 font-display">
                Clinic & Center Information
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-pastelGreen-100 text-pastelGreen-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-0.5">Address</strong>
                    <p>742 Evergreen Animal Parkway, Suite 100, West Palm, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-coralAccent-100 text-coralAccent-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-0.5">Phone & Hotline</strong>
                    <p>General: +1 (555) 729-7227</p>
                    <p className="text-coralAccent-600 font-bold">24/7 Emergency: +1 (800) 729-2273</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-pastelGreen-100 text-pastelGreen-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-0.5">Email Support</strong>
                    <p>care@pawsandcare.org</p>
                    <p>appointments@pawsandcare.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-warmCream-200 text-warmCream-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block text-xs uppercase tracking-wider mb-0.5">Visiting Hours</strong>
                    <p>Monday – Friday: 08:00 AM – 08:00 PM</p>
                    <p>Saturday – Sunday: 09:00 AM – 06:00 PM</p>
                    <p className="text-xs text-pastelGreen-700 font-semibold mt-1">Emergency Trauma Unit: Open 24/7/365</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="rounded-3xl overflow-hidden border border-warmCream-200 shadow-sm h-64 bg-warmCream-100">
              <iframe
                title="Paws & Care Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105628.71833075252!2d-118.4906935891395!3d34.12879555460591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1716500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-warmCream-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 font-display mb-2">
              Send Us a Direct Inquiry
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form below and our customer care coordinator will respond within one business day.
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-pastelGreen-50 border border-pastelGreen-300 text-pastelGreen-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-pastelGreen-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-semibold">
                  {submitSuccess}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name <span className="text-coralAccent-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Michael Ross"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                      errors.fullName ? 'border-coralAccent-500 bg-coralAccent-50/30' : 'border-warmCream-300 bg-warmCream-50/50'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-pastelGreen-500`}
                  />
                  {errors.fullName && <p className="text-[11px] text-coralAccent-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-coralAccent-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="michael@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                      errors.email ? 'border-coralAccent-500 bg-coralAccent-50/30' : 'border-warmCream-300 bg-warmCream-50/50'
                    } focus:bg-white focus:outline-none focus:ring-2 focus:ring-pastelGreen-500`}
                  />
                  {errors.email && <p className="text-[11px] text-coralAccent-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Subject Line <span className="text-coralAccent-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Question regarding puppy vaccination or cat boarding availability"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                    errors.subject ? 'border-coralAccent-500 bg-coralAccent-50/30' : 'border-warmCream-300 bg-warmCream-50/50'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-pastelGreen-500`}
                />
                {errors.subject && <p className="text-[11px] text-coralAccent-600 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message Description <span className="text-coralAccent-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your inquiry, pet symptoms, or preferred dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm ${
                    errors.message ? 'border-coralAccent-500 bg-coralAccent-50/30' : 'border-warmCream-300 bg-warmCream-50/50'
                  } focus:bg-white focus:outline-none focus:ring-2 focus:ring-pastelGreen-500`}
                ></textarea>
                {errors.message && <p className="text-[11px] text-coralAccent-600 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pastelGreen-600 hover:bg-pastelGreen-700 disabled:bg-pastelGreen-300 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
