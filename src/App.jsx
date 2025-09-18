import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import PublicNavigation from './components/PublicNavigation';
import Footer from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Settings from './pages/Settings';
import Journal from './pages/Journal';
import Analytics from './pages/Analytics';
import BookMentor from './pages/BookMentor';
import GrowthReports from './pages/GrowthReports';
import MainMenu from './pages/MainMenu';
import MindfulnessExercises from './pages/MindfulnessExercises';
import ProfileSetup from './pages/ProfileSetup';
import Notifications from './pages/Notifications';

// Footer Pages
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Accessibility from './pages/Accessibility';

// B2B Pages
import Schools from './pages/Schools';
import Enterprise from './pages/Enterprise';

function App() {
  const { isAuthenticated } = useAuth();

  // Ensure consistent scroll position on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    
    // Reset scroll on component mount
    handleRouteChange();
  }, []);

  return (
    <Router>
      <div className="app">
          <header className="app-header">
            {isAuthenticated ? <Navigation /> : <PublicNavigation />}
          </header>
          <main className="app-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Welcome />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* B2B Pages - Public */}
              <Route path="/schools" element={<Schools />} />
              <Route path="/enterprise" element={<Enterprise />} />
              
              {/* Footer Pages - Public */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
              {/* Protected Routes */}
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
              <Route path="/book-mentor" element={<ProtectedRoute><BookMentor /></ProtectedRoute>} />
              <Route path="/growth-reports" element={<ProtectedRoute><GrowthReports /></ProtectedRoute>} />
              <Route path="/menu" element={<ProtectedRoute><MainMenu /></ProtectedRoute>} />
              <Route path="/mindfulness-exercises" element={<ProtectedRoute><MindfulnessExercises /></ProtectedRoute>} />
              <Route path="/exercises" element={<ProtectedRoute><MindfulnessExercises /></ProtectedRoute>} />
              <Route path="/profile-setup" element={<ProtectedRoute><ProfileSetup /></ProtectedRoute>} />
              <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
