import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';
import Manicure from './pages/manicure/Manicure';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';
import './App.scss';

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
