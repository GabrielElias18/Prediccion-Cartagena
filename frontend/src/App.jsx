import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Attractions from './components/Attractions';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import PredictionForm from './components/PredictionForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Attractions />
      <Stats />
      <Testimonials />
      <PredictionForm />
      <Footer />
    </div>
  );
}

export default App;