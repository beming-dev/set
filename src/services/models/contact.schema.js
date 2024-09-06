// contact.schema.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

export const ContactModel = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
