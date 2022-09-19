import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';

import './App.scss';
import Manicure from './pages/manicure/Manicure';
import Appointment from './pages/appointment/Appointment';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/manicure" element={<Manicure />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
