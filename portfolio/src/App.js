import React from "react";
import "./App.css"
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      
    <div className="w-64 fixed inset-y-0 left-0 p-8">
      <h1 className="text-4xl font-bold">Abdikaliik Dini</h1>
      <p className="mt-4">Full Stack Developer</p>
      
      <nav className="mt-8">
        <a href="#about" className="block mt-2">About</a>
        <a href="#projects" className="block mt-2">Projects</a>
        <a href="#contact" className="block mt-2">Contact</a>

      </nav>
    </div>
    
    <div className="flex-1 p-8 ml-64 overflow-y-auto">
      <section id="about" className="pt-8">
        <About/>
      </section>
      <section id="projects" className="pt-8">
        <Projects/>
      </section>
      <section id="contact" className="pt-8">
        <Contact/>
      </section>
    </div>
  </div>
);
}

export default App;
