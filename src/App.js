import { useState } from 'react';
import './App.css';
import ColorPalette from './components/ColorPalette';
import Grid from './components/Grid';

function App() {

  const [currentColor, setCurrentColor] = useState('white');
  console.log("Current color: ", currentColor);

  return (
    <div>
      <ColorPalette setCurrentColor={setCurrentColor}/>
      <Grid currentColor={currentColor}/>
    </div>
  );
}

export default App;
