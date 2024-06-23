import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DepartmentPage from './pages/DepartmentPage';
import StudentDashboard from './pages/StudentDashboard';

import TrainerDashboard from './pages/TrainerDashboard';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  const [loginStatus, setLoginStatus] = useState({ isLoggedIn: false, userType: '' });

  const handleLogout = () => {
    setLoginStatus({ isLoggedIn: false, userType: '' });
  };

  return (
    <Router>
      <Header isLoggedIn={loginStatus.isLoggedIn} handleLogout={handleLogout} />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/login" element={<LoginForm setLoginStatus={setLoginStatus} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/student" element={loginStatus.userType === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="/trainer" element={loginStatus.userType === 'trainer' ? <TrainerDashboard /> : <Navigate to="/login" />} />
          <Route path="/admin" element={loginStatus.userType === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
