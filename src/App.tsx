import './App.css';
import Swatches from './components/swatches/Swatches';

const STEP = 10;

function App() {
  return (
    <div className="App">
      <div className="swatches-container">
        {/* Lightness Variants */}
        <Swatches hue={50} saturation={100} step={STEP} />
        <Swatches hue={90} saturation={100} step={STEP} />
        <Swatches hue={212} saturation={100} step={STEP} />
        <Swatches hue={250} saturation={100} step={STEP} />
        <Swatches hue={290} saturation={100} step={STEP} />
        <Swatches hue={330} saturation={100} step={STEP} />
        <Swatches hue={350} saturation={100} step={STEP} />
        {/* Saturation Variants */}
        <Swatches hue={50} lightness={50} step={STEP} />
        <Swatches hue={90} lightness={50} step={STEP} />
        <Swatches hue={212} lightness={50} step={STEP} />
        <Swatches hue={250} lightness={50} step={STEP} />
        <Swatches hue={290} lightness={50} step={STEP} />
        <Swatches hue={330} lightness={50} step={STEP} />
        <Swatches hue={350} lightness={50} step={STEP} />
      </div>
    </div>
  );
}

export default App;
