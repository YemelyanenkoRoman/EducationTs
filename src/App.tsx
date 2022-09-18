import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';

import './App.scss';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ paddingTop: '0px' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/appointment" element={<Appointment />} />
            <Route path="/manicure" element={<Manicure />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
