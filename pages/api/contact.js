// /pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // example for Gmail SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password or app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // sender info
    to: process.env.EMAIL_USER,    // your receiving email address
    subject: `New contact form message from ${name}`,
    text: `
      You have a new message from the contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
