import React from 'react';
import Slider from '../../components/slider/Slider';
import dataSlider from './dataSlider';
import './Main.scss';

const Main = () => {
  return (
    <main>
      <Slider autoChange={true} dataSlider={dataSlider} />
    </main>
  );
};

export default Main;
