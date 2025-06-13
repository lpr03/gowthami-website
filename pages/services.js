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
      <Navbar/>
    <main className="bg-[#636262] text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-white mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 shadow-md rounded-xl p-6 bg-[#dddddd] hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-2 text-[#000000]">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    </div>
  );
}
