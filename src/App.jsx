import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Donation from './pages/Donation';
import SuccessStories from './pages/SuccessStories';
import JobPortal from './pages/JobPortal';
import AlumniDirectory from './pages/AlumniDirectory';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </AuthProvider>
  );
};

const MainContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        <Route path="/alumni" element={<ProtectedRoute element={AlumniDirectory} />} />
      </Routes>
    </main>
  );
};

export default App;
