import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import LawyerHome from './pages/Lawyer/LawyerHome';
import ActorHome from './pages/Actor/ActorHome';
import PoetHome from './pages/Poet/PoetHome';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <AboutPage />
              <ProjectsPage />
              <ContactPage />
            </>
          } />
          <Route path="/lawyer" element={<LawyerHome />} />
          <Route path="/actor" element={<ActorHome />} />
          <Route path="/poet" element={<PoetHome />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
