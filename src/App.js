import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-900">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>

      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
