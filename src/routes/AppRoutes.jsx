import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import ProfileSetup from '../pages/ProfileSetup';
import Home from '../pages/Home';
import BookMentor from '../pages/BookMentor';
import MindfulnessExercises from '../pages/MindfulnessExercises';
import Journal from '../pages/Journal';
import GrowthReports from '../pages/GrowthReports';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/book-mentor" element={<BookMentor />} />
      <Route path="/exercises" element={<MindfulnessExercises />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/growth-reports" element={<GrowthReports />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);

export default AppRoutes;
