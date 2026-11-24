# 🐾 Paws & Care – Professional Pet Care Website

A modern, attractive, user-friendly, and fully responsive pet-care platform built for pet parents to explore pet-care services, get expert veterinary advice, connect with certified veterinarians and trainers, and book appointments for their beloved pets.

---

## 🎨 Design & Palette

- **Primary:** Soft Pastel Green (`#5F9572`, `#7EAF8F`)
- **Secondary:** Warm Cream (`#FAF6EE`, `#F5ECE0`)
- **Accent:** Energetic Coral (`#F97316`, `#FF876D`)
- **Background:** Crisp White & Light Warm Beige (`#FFFFFF`, `#FAF8F5`)
- **Typography:** `Outfit` (Headings) & `Plus Jakarta Sans` (Body)
- **Aesthetic:** Rounded modern cards, gentle shadows, micro-interactions, responsive grids, and compassionate pet imagery.

---

## 🚀 Technology Stack

- **Frontend:** React 18 (Vite)
- **Styling:** Tailwind CSS with custom color extensions
- **Icons:** Lucide React
- **Backend:** Node.js & Express.js
- **Database:** MongoDB (via Mongoose) with automatic persistent local JSON storage fallback (`data/*.json`) when MongoDB is not running locally.
- **Form Handling:** Controlled state with comprehensive validation, review modal, and confirmation receipts.

---

## 🌟 Key Features & Sections

1. **Sticky Navigation Bar:**
   - Responsive navbar with logo, links (`Home`, `About Us`, `Services`, `Pet Care Tips`, `Our Experts`, `Health Reminder`, `Contact Us`).
   - Quick 24/7 call button & prominent **Book Appointment** CTA.
   - Mobile responsive drawer with burger menu.

2. **24/7 Emergency Care Alert Banner:**
   - Urgent trauma and poisoning notice with click-to-call hotline (`(800) 729-2273`).

3. **Hero Section:**
   - Catchy headline: *"Because Every Pet Deserves Love & Care!"*
   - Supporting tagline: *"Your trusted partner for happier, healthier, and more playful pets."*
   - Two CTAs: *Explore Our Services* & *Book an Appointment*.
   - Attractive dog & cat imagery with floating trust badges (*Licensed & Insured*, *100% Compassion*).
   - Trust indicators: **500+ Happy Pet Parents**, **10+ Expert Professionals**, **5-Star Care Rating**.

4. **About Us Section:**
   - Company background, mission, vision, and core values.
   - Why pet parents choose Paws & Care (*Fear-Free certified*, *Digital records*, *Private suites*).
   - Accredited excellence badges.

5. **Pet Care Services Section:**
   - 6 core services:
     1. **Veterinary Consultation** (Annual exams, vaccinations, blood panels, senior care)
     2. **Pet Grooming & Spa** (Hydro-massage bath, breed styling, nail grinding, teeth cleaning)
     3. **Pet Training & Behavior** (Obedience, leash reactivity, puppy socialization, agility)
     4. **Pet Boarding & Daycare** (Climate suites, 24/7 webcams, play yards, vet supervision)
     5. **Pet Walking & Fitness** (GPS-tracked walks, solo/group matching, hydration & treats)
     6. **Pet Nutrition & Dietetics** (Custom calories, food allergy elimination, kidney/cardiac diets)
   - Interactive modal with full service inclusions and direct *"Book Now"* integration.

6. **Pet Care Tips & Knowledge Center:**
   - 7 in-depth educational articles covering feeding, vaccination, grooming, indoor enrichment, dental hygiene, seasonal safety, and puppy/kitten milestones.
   - **Real-time search bar** and **category filter chips** (`Feeding`, `Vaccination`, `Grooming`, etc.).
   - Full article modal reader with veterinary tips.

7. **Our Experts (Veterinarians & Trainers):**
   - Sample profiles: *Dr. Sarah Jenkins (Lead Surgeon)*, *Dr. Michael Patel (Dermatology)*, *Emily Davis (Canine Behaviorist)*, *Marcus Chen (Nutritionist & Stylist)*.
   - Displays photo, credentials, qualifications, experience, specialization, and direct consultation booking.

8. **Appointment Booking Section (Interactive & Validated):**
   - Fields: Pet Owner Name, Email, Phone, Pet Name, Pet Type (Dog, Cat, Bird, Rabbit, Other), Pet Age, Service, Assigned Expert, Preferred Date, Preferred Time Slot, and Notes.
   - Form validation with error feedback.
   - **Review Before Submission Modal:** Allows pet parents to review all details prior to confirming.
   - **Confirmed Receipt Screen:** Generates a real tracking code (e.g., `PAW-763195`) with full appointment summary.
   - Persists automatically to the backend database.

9. **Interactive Pet Health & Vaccine Calculator:**
   - Allows selecting pet species (Dog, Cat, Other), life stage (Puppy/Kitten, Adult, Senior), and months since last vet visit to generate tailored healthcare alerts.

10. **Customer Testimonials:**
    - Real customer reviews with owner photos, pet names & breeds, 5-star ratings, and carousel navigation.

11. **Expandable FAQ Accordion:**
    - Answers common questions regarding appointments, vaccinations, cancellation, and emergency care.

12. **Contact Us Section:**
    - Interactive validated contact form saving inquiries to the backend.
    - Clinic address, phone numbers, visiting hours, and Google Maps embed.

13. **Floating WhatsApp Chat Button:**
    - Fixed bottom-right chat widget with tooltip for fast messaging.

14. **Comprehensive Footer:**
    - Brand overview, quick navigation, service links, working newsletter subscription form, social icons, and legal links.

---

## 📦 How to Run the Project Locally

### Prerequisites
- Node.js (v18 or v20+)
- npm or pnpm
- Optional: MongoDB running on `mongodb://localhost:27017` (If MongoDB is not installed, the server automatically uses local persistent JSON storage).

### 1. Start the Backend API Server
```bash
cd paws-and-care/server
npm install
node server.js
```
The server will start on `http://localhost:5000`.

### 2. Start the Frontend Application
In a separate terminal:
```bash
cd paws-and-care/client
npm install
npm run dev
```
The client will start on `http://localhost:3000`.

### 3. Production Build
```bash
cd paws-and-care/client
npm run build
```
Creates an optimized production bundle inside `paws-and-care/client/dist`.
