import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth bg-white text-gray-900">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;