import { useState } from "react";
import Hero from "./Componets/Pages/HeroPage";
import Skills from "./Componets/Pages/Skills";
import Navbar from "./Componets/Navbar";
import Projects from "./Componets/Pages/Projects";
import Contact from "./Componets/Pages/Contact";
import Footer from "./Componets/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
