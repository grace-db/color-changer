import React, { useState } from 'react';

const colors = [
  {key: 1, color: "#04773b"},
  {key: 2, color: "#389767"},
  {key: 3, color: "#955975"},
  {key: 4, color: "#b94b41"},
  {key: 5, color: "#95974d"},
  {key: 6, color: "#ee813d"},
  {key: 7, color: "#d192b2"},
  {key: 8, color: "#dac09b"},
  {key: 9, color: "#64472d"},
  {key: 10, color: "#2d301d"}
];

function App() {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  function ColorSwitch() {
    return colors.map((color) => {
      return (
        <button id={`color${color.key}`}
                className="color-divs"
                style={{backgroundColor: `${color.color}`}}
                onClick={() => setBgColor(color.color)}></button>
      );
    })
  }

  return (
    <div id="container" style={{backgroundColor: `${bgColor}`}}>
      <ColorSwitch />
    </div>
  );
}

export default App;