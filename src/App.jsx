import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//navigation imports
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

//pages imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";



function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[#090A17] text-[#e1e1dd] flex flex-col">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 blur-3xl opacity-60"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<div className="min-h-screen flex items-center justify-center text-[#e1e1dd]">Gallery Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center text-[#e1e1dd]">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
