import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//navigation imports
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

//pages imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#090A17] text-[#e1e1dd] flex flex-col">
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
