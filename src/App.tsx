import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import Manicure from './pages/manicure/Manicure';
import Pedicure from './pages/pedicure/Pedicure';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';
import './App.scss';
import Podology from './pages/podology/Podology';
// const options: IOption[] = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const App = () => {
  // деструкторизация массива
  // useState возвращает массив
  // Нулевым элементом массива является value , первым - ф-ция для  изменения состояния
  // const [value, setValue] = useState<Readonly<IOption[]>>([]);

  // const TT = useState<Readonly<IOption[]>>([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/manicure" element={<Manicure />} />
          <Route path="/pedicure" element={<Pedicure />} />
          <Route path="/podology" element={<Podology />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
