import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import Slider, { DataSliderItem } from './components/slider/Slider';

const dataSlider: DataSliderItem[] = [
  {
    id: 'img1',
    name: 'main-img-1',
  },
  {
    id: 'img2',
    name: 'main-img-2',
  },
  {
    id: 'img3',
    name: 'main-img-3',
  },
  {
    id: 'img4',
    name: 'main-img-4',
  },
  {
    id: 'img5',
    name: 'main-img-5',
  },
];

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ paddingTop: '0px' }}>
          <Routes>
            {/* <Route exact path="/" element={<Main />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/manicure" element={<Manicure />} /> */}
          </Routes>
        </div>
      </Router>
      <Slider autoChange={true} dataSlider={dataSlider} />
    </>
  );
};

export default App;
