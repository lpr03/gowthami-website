import Head from 'next/head';
import Navbar from '../components/navbar';

export default function About() {
  return (

    <div>
      <Navbar/>
      <Head>
        <title>About Us - Gowtami Engineering Enterprises</title>
      </Head>

      <main className="bg-gray-50 text-gray-800">
        <section className="bg-[#636262] text-white py-20 px-6 text-center">
          <h1 className="text-3xl mt-4 font-extrabold tracking-wide">About Us</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know more about our mission, vision, and engineering expertise.
          </p>
        </section>

        <section className="max-w-5xl mx-auto py-14 px-6 space-y-10">
          <div>
            <h2 className="text-2xl font-bold  mb-4">Overview</h2>
            <p>
              Gowtami Engineering Enterprises is a trusted name in precision manufacturing and engineering services. Established in <strong>2012</strong>, we are committed to delivering quality machining solutions and component fabrication for various industrial sectors. We cater to a wide client base across India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>CNC machining (milling, drilling)</li>
              <li>Custom fabrication and tooling</li>
              <li>Component manufacturing</li>
              <li>Quality assurance and inspection services</li>
              <li>Rapid prototyping and design support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Modern Equipment</strong> – Advanced CNC machines and inspection tools.</li>
              <li><strong>Certified Quality</strong> – ISO 9001:2015 certified and UDYAM registered.</li>
              <li><strong>Timely Delivery</strong> – Reliable lead times and efficient logistics.</li>
              <li><strong>Custom Solutions</strong> – Tailored services for unique project needs.</li>
            </ul>
          </div>


          <div>
            <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
            <blockquote className="italic border-l-4 border-gray-400 pl-4">
              “To be the preferred partner in engineering solutions by ensuring quality, innovation, and customer satisfaction.”
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 mt-2">
              “Our mission is to deliver precision components and services that power the future of Indian manufacturing.”
            </blockquote>
          </div>
        </section>
      </main>
    
    </div>
  );
}
