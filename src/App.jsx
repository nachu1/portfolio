import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import NutriScanGallery from "./components/NutriScanGallery";
import AttentionMonitoring from "./components/AttentionMonitoring";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <NutriScanGallery />
        
         <AttentionMonitoring />
          <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;