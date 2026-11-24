import React, { useState } from 'react';
import EmergencyBanner from './components/EmergencyBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PetCareTips from './components/PetCareTips';
import Experts from './components/Experts';
import BookingForm from './components/BookingForm';
import PetHealthReminder from './components/PetHealthReminder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedExpert, setPreselectedExpert] = useState('');

  const scrollToBooking = (service = '', expert = '') => {
    if (service) setPreselectedService(service);
    if (expert) setPreselectedExpert(expert);
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const sElem = document.getElementById('services');
    if (sElem) {
      sElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-beigeBg text-gray-800 font-sans selection:bg-pastelGreen-200 selection:text-pastelGreen-900">
      {/* 24/7 Emergency Alert Banner */}
      <EmergencyBanner />

      {/* Main Responsive Header */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* About Us Section */}
        <About />

        {/* Core Services Section */}
        <Services onSelectServiceToBook={(srv) => scrollToBooking(srv, '')} />

        {/* Pet Care Tips & Knowledge Base */}
        <PetCareTips />

        {/* Certified Experts (Vets & Trainers) */}
        <Experts onSelectExpertToBook={(exp) => scrollToBooking('', exp)} />

        {/* Interactive Appointment Booking Form */}
        <BookingForm
          preselectedService={preselectedService}
          preselectedExpert={preselectedExpert}
        />

        {/* Interactive Health & Vaccine Checkup Tool */}
        <PetHealthReminder onBookClick={() => scrollToBooking()} />

        {/* Customer Testimonials Carousel */}
        <Testimonials />

        {/* Expandable FAQs */}
        <FAQ />

        {/* Contact Us Section with Location Map */}
        <Contact />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Full Footer with Newsletter */}
      <Footer />
    </div>
  );
}
