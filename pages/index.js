"use client";

import Head from 'next/head';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
  ["Drilling Machine", "SOHIT", 2],
  ["Drilling Machine", "ITCO", 1],
  ["Drilling Machine", "SIGMA", 2],
  ["Drilling Machine", "KM PANCHAL", 1],
  ["Grinding Machine", "RAYMOND", 2],
  ["Cutting Machine", "SIGMA", 1],
];

const Images = ['/image1.jpg', '/image2.jpg', '/image4.jpg'];

export default function Home() {
  const [showAllMachinery, setShowAllMachinery] = useState(false);

  return (
    <div>
      <Head>
        <title>Gowthami Engineering Enterprises | CNC Machining & Milling in Telangana</title>
        <meta name="description" content="Gowthami Engineering Enterprises offers precision CNC machining, milling, tapping, and fabrication services in Telangana. Serving industries with excellence since 2012." />

        <meta name="description" content="Gowthami Engineering Enterprises offers CNC machining, milling, and precision engineering in Hyderabad. Trusted industrial partner." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Gowthami Engineering, Gowthami Engineering Enterprises, CNC, Milling, precision machining, Gowtami Engineering Enterprises" />
        <meta name="author" content="Gowthami Engineering Enterprises" />
        <meta property="og:title" content="Gowthami Engineering Enterprises" />
        <meta property="og:description" content="CNC machining and precision engineering company in Hyderabad." />
        <meta property="og:url" content="https://gowthami.dedyn.io" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/logo.png" type="image/png" />

        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gowthami Engineering Enterprises",
  "url": "https://gowthami.dedyn.io",
  "logo": "https://gowthami.dedyn.io/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 9912670669",
    "contactType": "customer service"
  },
  "sameAs": []
}
`}
</script>

      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Gowthami Engineering Enterprises</h1>
          <p className="text-xl text-gray-200">Precision Manufacturing with Excellence</p>
          <p className="text-lg text-gray-200">Since 2012</p>
          <Link href="/contact#quote-form">
            <button className="bg-[#242424] text-white px-6 py-3 mt-4 rounded-md hover:bg-[#002f49] transition">
              Get a Quote
            </button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white text-gray-800 text-center">
  <div>
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      About Us
    </motion.h2>

    <motion.h3
      className="text-2xl font-semibold mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      CNC Machining & Precision Engineering Company in Telangana
    </motion.h3>
  </div>

  <p className="max-w-3xl mx-auto">
    Gowthami Engineering Enterprises is a trusted name in manufacturing, delivering high-quality engineering solutions across industries.
    With years of experience and a skilled team, we pride ourselves on precision, quality, and timely delivery.
  </p>
</section>


      {/* Services Section */}
      <section className="px-6 py-16 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                title: "Drilling, Tapping & Assembling",
                desc: "Expert drilling, precision tapping, and assembling services tailored for industrial engineering needs."
              }

            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 shadow rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="px-6 py-16 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Machinery Details</h2>
          <p className="mb-5 text-justify">
            Our facility is equipped for a wide range of fabrication, precision machining, and component assembly tasks.
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

      {/* Credentials Section */}
      <section className="px-6 py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            Our Credentials
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🧾",
                title: "GST Registered",
                desc: "Compliant with Goods and Services Tax laws in India.",
                reg: "GSTIN: 36AALFG5399R1Z9",
              },
              {
                icon: "🏢",
                title: "Udyam Registered",
                desc: "Recognized under MSME (Udyam) by Govt. of India.",
                reg: "Udyam Reg. No: UDYAM-TS-20-0052284",
              },
              {
                icon: "✅",
                title: "ISO 9001:2015 Certified",
                desc: "Certified for quality management standards.",
                reg: "Cert. No: Q-200711R",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
                <p className="mt-2 text-xs text-gray-500 italic">{cert.reg}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {Images.map((src, i) => (
              <div key={i} className="relative h-60 rounded-xl overflow-hidden shadow hover:shadow-xl transition">
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <Link href="/gallery">
            <button className="bg-[#636262] text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-white text-gray-800 text-center">
        <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Contact Us
        </motion.h2>
        <p className="mb-2">Email: gowtamieng@gmail.com</p>
        <p className="mb-2">Phone: +91 9912670669</p>
        <p>Address: Plot Number 51, TSIIC Industrial Park, Rayarao Peta, Bibinagar Mandal, Yadadri District, Telangana 508126</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#242424] text-gray-300 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Contact"].map((linkText) => (
                <li key={linkText}>
                  <Link href={`#${linkText.toLowerCase()}`} className="hover:text-white">
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
