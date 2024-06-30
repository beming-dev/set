//ContactForm.js
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Message sent successfully');
      } else {
        // Handle error
        console.log('An error occurred');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <form className="grid gap-6 border rounded-xl p-6 py-8">
      <div>
        <p className="text-3xl text-whale font-bold">Send us a Message</p>
      </div>
      <div className="grid">
        <label className="font-semibold mb-1" for="name">
          Name
        </label>
        <input
          className="border rounded bg-gray-50 p-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="grid">
        <label className="font-semibold mb-1" for="email">
          Email
        </label>
        <input
          className="border rounded bg-gray-50 p-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="grid">
        <label className="font-semibold mb-1" for="message">
          Message
        </label>
        <textarea
          className="border rounded bg-gray-50 p-2"
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="grid justify-end">
        <button
          className="bg-grizzlybear rounded-full p-2 px-6 w-fit text-white"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
