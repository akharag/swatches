import { CSSProperties, useState } from 'react';
import './App.css';
import './util.css';
import ThemeContext, { ColorTheme } from './hooks/ColorsProvider';
import Picker from './components/Picker/Picker';
import ColorSlider from './components/Slider/Slider';
import { ColorHSL } from './types';


function App() {
  const [theme, setTheme] = useState<ColorTheme>({} as ColorTheme);
  const { primary, secondary, tertiary } = theme;

  return (
    <ThemeContext.Provider value={{}}>
      <div className="App">
        <h1>Palate Generator</h1>
        <div className="pickers-container">
          <div>
            <Picker header="Primary" SaveColor={(color) => setTheme({ ...theme, primary: color })} />
            {primary && <PreviewColor onChange={(color) => setTheme({ ...theme, primary: color })} color={primary} />}
          </div>
          <div>
            <Picker header="Secondary" SaveColor={(color) => setTheme({ ...theme, secondary: color })} />
            {secondary && <PreviewColor onChange={(color) => setTheme({ ...theme, secondary: color })} color={secondary} />}
          </div>
          <div>
            <Picker header="Tertiary" SaveColor={(color) => setTheme({ ...theme, tertiary: color })} />
            {tertiary && <PreviewColor onChange={(color) => setTheme({ ...theme, tertiary: color })} color={tertiary} />}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const PreviewColor = (props: { color: ColorHSL, onChange: (color: ColorHSL) => void }) => {
  const { hue, saturation, lightness } = props.color;
  const style = {
    '--clr': `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    color: lightness < 51 ? 'white' : 'black'
  } as CSSProperties;

  const UpdateSaturation = (value: number) => {
    const newColor: ColorHSL = { hue: hue, saturation: value, lightness: lightness };
    props.onChange(newColor);
  }

  const UpdateLightness = (value: number) => {
    const newColor: ColorHSL = { hue: hue, saturation: saturation, lightness: value };
    props.onChange(newColor);
  }

  return <div style={style} className="preview-color">
    <div><p>Hue: {hue}  </p></div>
    <div><p>Saturation: {saturation}</p> <ColorSlider type='saturation' onChange={UpdateSaturation} color={props.color} /></div>
    <div><p>Lightness: {lightness.toFixed(0)}</p><ColorSlider type='lightness' onChange={UpdateLightness} color={props.color} /></div>
  </div>
}


export default App;
