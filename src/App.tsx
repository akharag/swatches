import { CSSProperties, useContext, useState } from 'react';
import './App.css';
import './util.css';
import ThemeProvider, { ThemeContext, ColorTheme } from './hooks/contexts/ThemeContext';
import Picker from './components/Picker/Picker';
import ColorSlider from './components/Slider/Slider';
import { ColorHSL } from './types';
import Preview from './components/Preview/Preview';


function App() {

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {themeContext => {
          const { primary, secondary, tertiary, updateTheme } = themeContext;
          const appStyle = {
            '--hue': primary?.hue,
            '--saturation': `${primary?.saturation}%`,
            '--lightness': `${primary?.lightness}%`
          } as CSSProperties;
          return (
            <div style={appStyle} className="App">
              <h1>Palate Generator</h1>
              <div className="pickers-container">
                <div>
                  <Picker header="Primary" SaveColor={(color) => updateTheme!('primary', color!)} />
                  {primary && <PreviewColor onChange={(color) => updateTheme!('primary', color!)} color={primary} />}
                </div>
                <div>
                  <Picker header="Secondary" SaveColor={(color) => updateTheme!('secondary', color!)} />
                  {secondary && <PreviewColor onChange={(color) => updateTheme!('secondary', color!)} color={secondary} />}
                </div>
                <div>
                  <Picker header="Tertiary" SaveColor={(color) => updateTheme!('tertiary', color!)} />
                  {tertiary && <PreviewColor onChange={(color) => updateTheme!('tertiary', color!)} color={tertiary} />}
                </div>
              </div>
              <Preview />
            </div>
          )
        }

        }
      </ThemeContext.Consumer>
    </ThemeProvider>
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
