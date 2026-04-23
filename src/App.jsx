import { useEffect } from 'react';
import './styles/globals.css';

import Loader         from './components/Loader';
import Cursor         from './components/Cursor';
import ParticleCanvas from './components/ParticleCanvas';
import Nav            from './components/Nav';
import Hero           from './components/Hero';
import Marquee        from './components/Marquee';
import About          from './components/About';
import Experience     from './components/Experience';
import Skills         from './components/Skills';
import Projects       from './components/Projects';
import Achievements   from './components/Achievements';
import Education      from './components/Education';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const delay = e.target.dataset.delay || 0;
            setTimeout(() => e.target.classList.add('visible'), +delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
