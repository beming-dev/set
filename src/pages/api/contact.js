//contact.js
import { ContactModel } from '../../services/models/contact.schema';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const contactData = req.body;
      const contact = new ContactModel(contactData);
      await contact.save();

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
