import Navbar from '../components/navbar';
import Head from 'next/head';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg'
  ];

  return (
    <div>
      <Navbar />
      <Head>
        <title>Gallery - Gowthami Engineering Enterprises</title>
      </Head>

      <main className="bg-gray-50 text-gray-800 min-h-screen">
        <section className="bg-[#636262] text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide">Gallery</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            A glimpse into our machines, tools, workspace, and projects.
          </p>
        </section>

        <section className="max-w-6xl mx-auto py-16 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-60 rounded-xl shadow hover:shadow-xl overflow-hidden transition">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
