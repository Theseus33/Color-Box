import React, { Component } from "react";
import Palette from './Palette.js';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";


function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
