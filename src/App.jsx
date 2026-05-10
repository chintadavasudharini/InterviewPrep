import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';
import TopicDetailPage from './pages/TopicDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PreparationPathsPage from './pages/PreparationPathsPage';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app-wrapper">
        <ScrollToTop />
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AnimatePresence mode="wait">
          <main style={{ minHeight: '90vh' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/prep-paths" element={<PreparationPathsPage />} />
              <Route path="/:techId" element={<TopicsPage searchTerm={searchTerm} />} />
              <Route path="/:techId/:topicId" element={<TopicDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
