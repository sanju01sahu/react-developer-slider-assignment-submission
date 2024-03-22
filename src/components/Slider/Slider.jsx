import { useState } from "react";
import "./Slider.css";
import Proptypes from "prop-types";

export default function Slider({ min, max, step, displayValue, ...args }) {
  const [value, setValue] = useState(Math.ceil((max - min) / 2));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // console.log(value)
  return (
    <div className="slider-box">
      {displayValue && (
        <div className="slider-value">
          <span style={{ left: "" }}>{value}</span>
        </div>
      )}
      <div className="slider-input">
        <input
          type="range"
          style={{background: `linear-gradient(to right, #47b647 ${value}%, #f2f3f5 ${value}%)`}}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}


Slider.prototype = {
    min:Proptypes.number.isRequired,
    max:Proptypes.number.isRequired,
    step:Proptypes.number,
    displayValues: Proptypes.bool,
}