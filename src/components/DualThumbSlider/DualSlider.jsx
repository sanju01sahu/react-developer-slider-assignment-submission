import { useState } from "react";
import "./DualSlider.css";
import Proptypes from "prop-types";

export default function DualSlider({ min, max, step, displayValue }) {
  const [low, setLow] = useState(Math.ceil(((max - min) / 2)-((max - min) / 4)));
  const [high, setHigh] = useState(Math.ceil(((max - min) / 2)+((max - min) / 4)));

  const handleLowChange = (event) => {
    setLow(event.target.value);
  };
  const handleHighChange = (event) => {
    setHigh(event.target.value);
  };

  // console.log(value)
  return (
    <div className="dual-slider-box">
      {displayValue && (
        <div className="dual-slider-value">
          <span style={{ left: "" }}>{low+"-"+high}</span>
        </div>
      )}
      <div className="dual-slider-input">
        <input
          type="range"
          style={{background: `linear-gradient(to right, #f2f3f5 ${(low/((min+max)/2)*100)}%, #47b647 ${(low/((min+max)/2)*100)}%)`}}
          min={min}
          max={((min+max)/2)}
          step={step}
          onChange={handleLowChange}
          id="low-range"
        />
        <input
          type="range"
          style={{background: `linear-gradient(to right, #47b647 ${((high-((min+max)/2))/((min+max)/2)*100)}%, #f2f3f5 ${((high-((min+max)/2))/((min+max)/2)*100)}%)`}}
          min={((min+max)/2)}
          max={max}
          step={step}
          onChange={handleHighChange}
          id="high-range"
        />
      </div>
    </div>
  );
}



DualSlider.prototype = {
    min:Proptypes.number.isRequired,
    max:Proptypes.number.isRequired,
    step:Proptypes.number,
    displayValues: Proptypes.bool,
}
