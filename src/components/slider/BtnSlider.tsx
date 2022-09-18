import React, { FC } from 'react';
import './Slider.scss';
import leftArrow from './icons/prev.png';
import rightArrow from './icons/next.png';

interface BtnSliderProps {
  direction: 'next' | 'prev';
  moveSlide: () => void;
}

const BtnSlider: FC<BtnSliderProps> = ({ direction, moveSlide }) => {
  return (
    <div onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </div>
  );
};

export default BtnSlider;
