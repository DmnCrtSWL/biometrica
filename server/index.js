import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const CONTACTS_FILE = path.join(__dirname, 'contacts.json');

// Ensure contacts.json exists
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
}

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
}));
app.use(express.json());

// POST /api/contact
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nombre, email y mensaje son requeridos.' });
    }

    const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8'));
    const entry = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(entry);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));

    res.status(201).json({ success: true, message: '¡Mensaje recibido! Nos pondremos en contacto pronto.' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ BME Contact Server running on http://localhost:${PORT}`);
});
