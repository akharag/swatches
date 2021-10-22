import { CSSProperties, useEffect, useState } from 'react';
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
  const { primary, secondary, tertiary } = theme;

  const primaryStyle = {
    '--clr': `hsl(${primary?.hue}, ${primary?.saturation}%, ${primary?.lightness}%)`,
    color: primary && primary?.lightness < 51 ? 'white' : 'black'
  } as CSSProperties;
  const secondaryStyle = {
    '--clr': `hsl(${secondary?.hue}, ${secondary?.saturation}%, ${secondary?.lightness}%)`,
    color: secondary && secondary?.lightness < 51 ? 'white' : 'black'
  } as CSSProperties;
  const tertiaryStyle = {
    '--clr': `hsl(${tertiary?.hue}, ${tertiary?.saturation}%, ${tertiary?.lightness}%)`,
    color: tertiary && tertiary?.lightness < 51 ? 'white' : 'black'
  } as CSSProperties;

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
      <div className="pickers-container">
        <div>
          <Picker header="Primary" SaveColor={(color) => setTheme({ ...theme, primary: color })} />
          {primary && <div style={primaryStyle} className="preview-color">
            <p>Hue: {primary?.hue}  </p>
            <p>Saturation: {primary?.saturation}</p>
            <p>Lightness: {primary?.lightness.toFixed(0)}</p>
          </div>}
        </div>
        <div>
          <Picker header="Secondary" SaveColor={(color) => setTheme({ ...theme, secondary: color })} />
          {secondary && <div style={secondaryStyle} className="preview-color">
            <p>Hue: {secondary?.hue}  </p>
            <p>Saturation: {secondary?.saturation}</p>
            <p>Lightness: {secondary?.lightness.toFixed(0)}</p>
          </div>}
        </div>
        <div>
          <Picker header="Tertiary" SaveColor={(color) => setTheme({ ...theme, tertiary: color })} />
          {tertiary && <div style={tertiaryStyle} className="preview-color">
            <p>Hue: {tertiary?.hue}  </p>
            <p>Saturation: {tertiary?.saturation}</p>
            <p>Lightness: {tertiary?.lightness.toFixed(0)}</p>
          </div>}
        </div>
      </div>
    </div>
  );
}


export default App;
