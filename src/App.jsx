import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Footer from "./component/Footer";

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <About/>
     <Projects/>
     <Footer/>
     </>
  );
}

export default App;
