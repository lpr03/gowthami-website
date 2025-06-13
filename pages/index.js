"use client";

import Head from 'next/head';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const machineryData = [
  ["CVM 1050/CNC Machine", "COSMOS", 1],
  ["CVM800/CNC Machine", "COSMOS", 1],
  ["CVM640/CNC Machine", "COSMOS", 1],
  ["Milling Machine", "BFW", 3],
  ["Milling Machine", "HMT", 1],
  ["Tapping Machine", "JYOTI", 1],
  ["Tapping Machine", "TAPAX", 1],
  ["Drilling Machine", "WINDSON", 2],
  ["Dring Machine", "SOHIT", 2],
  ["Drilling Machine", "ITCO", 1],
  ["Drilling Machine", "KM PANCHAL", 1],
  ["Grinding Machine", "RAYMOND", 2],
  ["Cutting Machine", "SIGMA", 1],
];

const Images = [
    '/image1.jpg',
    'image2.jpg',
    '/image4.jpg',
  ];


export default function Home() {
  const [showAllMachinery, setShowAllMachinery] = useState(false);

  return (
    <div>
      <Head>
        <title>Gowthami Engineering Enterprises</title>
      </Head>

      <Navbar />

    <section className="relative h-[101vh] text-white flex items-center justify-center overflow-hidden">
    <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay */}
  <div className="absolute w-full h-full bg-black/60 top-0 left-0" />

  {/* Hero content */}
  <motion.div
    className="relative z-10 text-center px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-5xl md:text-7xl font-bold mb-4">
      Gowthami Engineering Enterprises
    </h1>
    <p className="text-xl md:text-2xl text-gray-200">
      Precision Manufacturing with Excellence
    </p>
    <p className="text-xl md:text-xl text-gray-200">Since 2012</p>
    <Link href="/contact#quote-form">
  <button className="bg-[#242424] text-white px-6 py-3 mt-4 rounded-md hover:bg-[#002f49] transition">
    Get a Quote
  </button>
</Link>
  </motion.div>
</section>

      {/* About Section */}
      <section className="px-6 py-14 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <p>
            Gowthami Engineering Enterprises is a trusted name in manufacturing, delivering high-quality engineering solutions across industries. With years of experience and a skilled team, we pride ourselves on precision, quality, and timely delivery.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-14 bg-lightGray/10 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
            }}
          >
            {[
              {
                title: "CNC Milling",
                desc: "High-precision CNC milling services for a variety of industrial components.",
              },
              {
                title: "Custom Fabrication",
                desc: "Tailor-made fabrication services to meet client specifications with accuracy.",
              },
              {
                title: "Maintenance & Repair",
                desc: "Reliable maintenance solutions to extend the life and performance of machinery.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 shadow rounded-xl"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<section>
  <div className="px-6 sm:px-20 lg:px-35 py-8">
    <h2 className="text-3xl font-semibold mb-7 text-center">Machinery Details</h2>

    <p className="mb-5 text-justify">
      Our facility is equipped for a wide range of fabrication, precision machining, and component assembly tasks.
      With high-end CNC milling, and welding equipment, we efficiently handle both custom and batch production. 
      From structural fabrication to fine tolerancing, our machinery supports reliable industrial-grade output.
    </p>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-[#636262] text-white">
          <tr>
            <th className="py-3 px-4 border">Machine Type</th>
            <th className="py-3 px-4 border">Manufacturer</th>
            <th className="py-3 px-4 border">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {(showAllMachinery ? machineryData : machineryData.slice(0, 3)).map(
            ([type, maker, qty], i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="py-3 px-4 border">{type}</td>
                <td className="py-3 px-4 border">{maker}</td>
                <td className="py-3 px-4 border">{qty}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>

    <div className="flex justify-center mt-8">
      <button
        onClick={() => setShowAllMachinery(!showAllMachinery)}
        className={`px-6 py-3 rounded-md transition ${
          showAllMachinery
            ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
            : "bg-[#636262] text-white hover:bg-gray-700"
        }`}
      >
        {showAllMachinery ? "Close" : "View All Machinery"}
      </button>
    </div>
  </div>
</section>


    {/* Certifications Section */}
<section className="px-6 py-14 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Our Credentials
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {[
        {
          icon: "🧾",
          title: "GST Registered",
          desc: "Compliant with Goods and Services Tax laws in India.",
          reg: "GSTIN: 29ABCDE1234F1Z5",
        },
        {
          icon: "🏢",
          title: "Udyam Registered",
          desc: "Recognized under MSME (Udyam) by Govt. of India.",
          reg: "Udyam Reg. No: UDYAM-KR-12-3456789",
        },
        {
          icon: "✅",
          title: "ISO 9001:2015 Certified",
          desc: "Certified for quality management standards.",
          reg: "Cert. No: Q-2007",
        },
      ].map((cert, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-5xl mb-4">{cert.icon}</div>
          <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
          <p className="text-sm text-gray-600">{cert.desc}</p>
          <p className="mt-2 text-xs text-gray-500 italic">{cert.reg}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>



      <section className="px-6 py-14 bg-lightGray/10 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.h2>
         <section className="max-w-6xl  mb-0 mx-auto py-16 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow hover:shadow-xl transition">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </section>
        <Link
      href="/gallery"
      className="bg-[#636262] text-white px-6 py-3 mt-4 rounded-md hover:bg-gray-700 transition"
    >
      View More
    </Link>

        </div>
      </section>

      <section className="px-6 py-14 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <p className="mb-2">Email: gowtamieng@gmail.com</p>
          <p className="mb-2">Phone: +91 9912670669</p>
          <p>Address: Plot Number 51, TSIIC Industrial Park, Rayarao Peta, Bibinagar Mandal, Yadadri District, Telangana 508126</p>
        </div>
      </section>

      <footer className="bg-primary text-lightGray py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About","Services","Gallery","Contact"].map((linkText) => (
                <li key={linkText}>
                  <a href={`/${linkText.toLowerCase()}`} className="hover:text-white">
                    {linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}