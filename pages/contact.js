import Navbar from '@/components/navbar';
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <Navbar />
      <Head>
        <title>Contact Us - Gowthami Engineering Enterprises</title>
      </Head>

      <main className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <section className="bg-[#636262] text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide mt-5">Contact Us</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            We&apos;re here to help. Reach out to us for any inquiries, collaborations, or support.
          </p>

        </section>

        {/* Content */}
        <section id="quote-form" className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Unit</h2>
            <p className="mb-2">📍 Gowthami Engineering Enterprises</p>
            <p className="mb-2">Plot Number: 51, TSIIC Industrial Park, Rayarao Peta, Bibinagar Mandal, Yadadri District, Telangana, 508126.</p>
            <p className="mb-2">📞 +91 99126 70669, 98480 39243</p>
            <p className="mb-2">✉️ gowtamieng@gmail.com</p>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 mt-5">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#302b2b] text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Submit
              </button>
              <p className="mt-2 text-sm">{status}</p>
            </form>
          </div>
        </section>

        {/* Google Map */}
        <section className="px-6 pb-16">
          <iframe
            title="Gowthami Engineering Enterprises Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.14798137549!2d78.7114467!3d17.500448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9d4acd034119%3A0x8d0e10fe7d64d78f!2sGOWTHAMI%20ENGINEERING%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1748846890711!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </section>
      </main>
    </div>
  );
}
