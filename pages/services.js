"use client";

import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const services = [
  {
    title: "CNC Milling Services",
    description:
      "High-precision milling using advanced 3-axis CNC machines like COSMOS CVM series for custom components.",
  },
  {
    title: "Drilling & Tapping",
    description:
      "Multiple high-speed drilling and tapping stations (WINDSON, SOHIT, ITCO, KM PANCHAL, JYOTI, TAPAX) to handle small to medium batch operations.",
  },
  {
    title: "Milling (Conventional)",
    description:
      "Conventional milling operations powered by BFW and HMT machines, ideal for robust, cost-effective prototyping and production.",
  },
  {
    title: "Grinding & Finishing",
    description:
      "Surface and edge grinding with RAYMOND equipment to ensure tight tolerances and high surface finish.",
  },
  {
    title: "Cutting & Material Prep",
    description:
      "High-efficiency cutting machine (SIGMA) to process raw materials as per custom job specifications.",
  },
  {
    title: "Compressed Air Solutions",
    description:
      "On-site compressor (ANEST IWATA) for air-powered tool handling, cleaning, and dry machining processes.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />

      <main className="bg-gray-50 text-gray-800 min-h-screen">
        <section className="bg-[#636262] text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">Our Services</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Explore the engineering services we offer to support your manufacturing needs.
          </p>
        </section>

        <section className="max-w-6xl mx-auto py-8 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg border border-gray-200 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
