import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import Manicure from './pages/manicure/Manicure';
import Pedicure from './pages/pedicure/Pedicure';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';

import './App.scss';
import Podology from './pages/podology/Podology';
import { api } from './api/api';
import ManicureCreate from './pages/manicure/ManicureCreate';
import PedicureCreate from './pages/pedicure/PedicureCreate';
import PodologyCreate from './pages/podology/PodologyCreate';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/manicure" element={<Manicure />} />
            <Route path="/pedicure" element={<Pedicure />} />
            <Route path="/podology" element={<Podology />} />
            <Route path="/manicureCreate" element={<ManicureCreate />} />
            <Route path="/pedicureCreate" element={<PedicureCreate />} />
            <Route path="/podologyCreate" element={<PodologyCreate />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
