import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/main/Main';

import './App.scss';
import Manicure from './pages/manicure/Manicure';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';

import SelectBox, { IOption } from './components/selectBox/SelectBox';

// import Datepicker from './components/datepicker/Datepicker';
// import Timepicker from './components/timepicker/Timepicker';
import Inputs from './components/inputs/Inputs';

// const options: IOption[] = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const App = () => {
  // const [value, setValue] = useState<Readonly<IOption[]>>([]);

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
      {/* <Datepicker></Datepicker>
      <Timepicker /> */}
      <Inputs />
      {/* <SelectBox
        options={options}
        onChange={(data) => {
          setValue(data);
          console.log(data);
        }}
        value={value}
      /> */}
    </>
  );
};

export default App;
