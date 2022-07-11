import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Services from './components/Services';

function App() {
  return (
    <div className="scroll-smooth">
     
      
      <Hero />
      <Analytics />
      <Services/>
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
