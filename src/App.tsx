import { useEffect, useState } from 'react';
import './App.css';
import './util.css';
import { ColorHSL } from './types'
import Swatches from './components/Swatches/Swatches';
import SavedColors from './components/SavedColors/SavedColors';
import { ColorTheme } from './hooks/ColorsProvider';
import { NUM_SWATCHES, STEP } from './globalConstants';
import Picker from './components/Picker/Picker';


function App() {
  const [hueArr, setHueArray] = useState<number[]>([]);
  const [theme, setTheme] = useState<ColorTheme>({} as ColorTheme);

  const GenerateColor = (arr: number[]) => {
    const hue = Math.floor(Math.random() * 239);
    arr.push(hue);
  }

  const GenerateColors = () => {
    const arr: number[] = [];
    while (arr.length < NUM_SWATCHES) {
      console.log(arr);
      GenerateColor(arr);
    }
    console.log(arr);
    setHueArray([...arr]);
  };

  useEffect(() => {
    GenerateColors();
  }, [])


  return (
    <div className="App">
      <h1>Palate Generator</h1>
      <div className="picker-container">
        <Picker header="Primary" SaveColor={(color) => setTheme({ ...theme, primary: color })} />
        <Picker header="Secondary" SaveColor={(color) => setTheme({ ...theme, secondary: color })} />
        <Picker header="Tertiary" SaveColor={(color) => setTheme({ ...theme, tertiary: color })} />
      </div>
    </div>
  );
}


export default App;
