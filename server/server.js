const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/paws_and_care';

// Middleware
app.use(cors());
app.use(express.json());

// Local file storage fallback directories
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const appointmentsFile = path.join(dataDir, 'appointments.json');
const contactsFile = path.join(dataDir, 'contacts.json');
const newsletterFile = path.join(dataDir, 'newsletter.json');

const readJson = (file) => {
  try {
    if (fs.existsSync(file)) {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
  return [];
};

const writeJson = (file, data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
    return false;
  }
};

// Database Connection with graceful local-file fallback
let isMongoConnected = false;

// Mongoose Schemas
const appointmentSchema = new mongoose.Schema({
  referenceId: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  petAge: { type: String, required: true },
  service: { type: String, required: true },
  professional: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  message: { type: String, default: '' },
  status: { type: String, default: 'Confirmed' },
  createdAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

let AppointmentModel;
let ContactModel;
let NewsletterModel;

try {
  AppointmentModel = mongoose.model('Appointment', appointmentSchema);
  ContactModel = mongoose.model('Contact', contactSchema);
  NewsletterModel = mongoose.model('Newsletter', newsletterSchema);
} catch (e) {
  // If already compiled
}

mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
  .then(() => {
    isMongoConnected = true;
    console.log('Connected to MongoDB database');
  })
  .catch((err) => {
    isMongoConnected = false;
    console.log('MongoDB not running locally; using persistent JSON file storage engine.');
  });

// Generate reference ID e.g. PAW-89342
function generateReferenceId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `PAW-${randomNum}`;
}

// -------------------------------------------------------------
// API Routes
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'Paws & Care API',
    storageEngine: isMongoConnected ? 'MongoDB' : 'Local Persistent JSON Storage',
    timestamp: new Date().toISOString()
  });
});

// Create Appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const {
      ownerName,
      email,
      phone,
      petName,
      petType,
      petAge,
      service,
      professional,
      preferredDate,
      preferredTime,
      message
    } = req.body;

    // Validation
    if (!ownerName || !email || !phone || !petName || !petType || !petAge || !service || !professional || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required appointment fields.'
      });
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const referenceId = generateReferenceId();
    const appointmentData = {
      referenceId,
      ownerName: ownerName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      petName: petName.trim(),
      petType,
      petAge: petAge.trim(),
      service,
      professional,
      preferredDate,
      preferredTime,
      message: (message || '').trim(),
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      const newDoc = new AppointmentModel(appointmentData);
      await newDoc.save();
    } else {
      const existing = readJson(appointmentsFile);
      existing.unshift(appointmentData);
      writeJson(appointmentsFile, existing);
    }

    return res.status(201).json({
      success: true,
      message: 'Appointment successfully scheduled and confirmed!',
      referenceId,
      appointment: appointmentData
    });

  } catch (error) {
    console.error('Error saving appointment:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to save appointment. Please try again.'
    });
  }
});

// Get Appointments (for review / administration)
app.get('/api/appointments', async (req, res) => {
  try {
    if (isMongoConnected) {
      const list = await AppointmentModel.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: list.length, appointments: list });
    } else {
      const list = readJson(appointmentsFile);
      return res.json({ success: true, count: list.length, appointments: list });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Submit Contact Message
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    const contactEntry = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      const doc = new ContactModel(contactEntry);
      await doc.save();
    } else {
      const existing = readJson(contactsFile);
      existing.unshift(contactEntry);
      writeJson(contactsFile, existing);
    }

    return res.status(200).json({
      success: true,
      message: `Thank you, ${fullName}! Your message has been received. Our pet care team will respond within 24 hours.`
    });

  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again.'
    });
  }
});

// Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Valid email address is required.'
      });
    }

    const entry = {
      email: email.toLowerCase().trim(),
      subscribedAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      await NewsletterModel.findOneAndUpdate(
        { email: entry.email },
        entry,
        { upsert: true, new: true }
      );
    } else {
      const existing = readJson(newsletterFile);
      if (!existing.some(item => item.email === entry.email)) {
        existing.unshift(entry);
        writeJson(newsletterFile, existing);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to Paws & Care tips and wellness alerts!'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Newsletter subscription failed.'
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🐾 Paws & Care Backend running on http://localhost:${PORT}`);
});
