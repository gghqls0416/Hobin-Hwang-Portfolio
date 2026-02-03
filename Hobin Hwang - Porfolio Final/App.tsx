
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS } from './constants';

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Handle browser back button or state changes to scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeProjectId]);

  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  if (activeProjectId && activeProject) {
    return (
      <div className="bg-white min-h-screen text-brand-black selection:bg-brand-black selection:text-white">
        <ProjectDetail 
          project={activeProject} 
          onBack={() => setActiveProjectId(null)} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-brand-black selection:bg-brand-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects onSelectProject={setActiveProjectId} />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
