import React from "react";
import Slider from "../../components/slider/Slider";
import dataSlider from "./dataSlider";
import "./Main.scss";

const Main = () => {
  return (
    <div>
      <Slider autoChange={true} dataSlider={dataSlider} />
    </div>
  );
};

export default Main;
