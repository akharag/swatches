import { CSSProperties, useEffect, useState } from 'react';
import './App.css';
import { ColorHSL } from './types'
import Swatches from './components/Swatches/Swatches';
import SavedColors from './components/SavedColors/SavedColors';

const STEP = 8;
const MAX_SAVE = 35;


function App() {
  const [hueArr, setHueArray] = useState<number[]>([]);
  const [savedColors, setSavedColors] = useState<ColorHSL[]>([]);

  const SaveColor = (color: ColorHSL) => {
    if (savedColors.length < MAX_SAVE) setSavedColors([...savedColors, color]);
    // else {
    //   DeleteColor(0);
    //   setSavedColors([...savedColors, color]);
    // }
  }

  const DeleteColor = (index: number) => {
    console.log('delete');
    const arr = [...savedColors];
    arr.splice(index, 1);
    setSavedColors([...arr]);
  }

  const GenerateColors = () => {
    let arr: number[] = [];
    let hue;
    for (let i = 0; i < 5; i++) {
      hue = Math.floor(Math.random() * 240);
      arr.push(hue);
    }

    setHueArray(arr);
  };

  useEffect(() => {
    GenerateColors();
  }, [])

  return (
    <div className="App">
      <h2>Palate Generator</h2>
      <div className="swatches-container">
        {hueArr.map(h =>
          <Swatches
            hue={h}
            saturation={100}
            step={STEP}
            SaveColor={SaveColor}
          />)}
      </div>
      <button onClick={GenerateColors}>ReGenerate</button>
      <div className="saved-colors">
        <h3>Saved Colors</h3>
        <h4>Click one to delete it</h4>
        <button onClick={() => setSavedColors([])}>Clear All Colors</button>
        <div>
          {savedColors.map((c, i) => <SavedColors key={"save_color_" + i} color={c} onClick={() => DeleteColor(i)} />)}
        </div>
      </div>
    </div>
  );
}


export default App;
