import React, { Component } from "react";
import Palette from './Palette.js';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers.js";


function App() {
  return (
    <div className="App">
      console.log(generatePalette(seedColors[4]))
      <Palette palette={generatePalette(seedColors[3])} />
    </div>
  );
}

export default App;
