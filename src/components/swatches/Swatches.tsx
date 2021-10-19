import { CSSProperties } from "react";
import Swatch from "./Swatch";
import "./Swatches.css";

interface SwatchesProps {
    hue: number;
    saturation?: number;
    lightness?: number;
    step?: number;
}

const Swatches = ({ hue, saturation, lightness, step = 10 }: SwatchesProps) => {

    const _renderSwatches = () => {
        const swatches_arr = [];
        const style = { "--step": step } as CSSProperties;

        if (!saturation && !lightness) {
            for (let s = 0; s < 100; s += (100 / step)) {
                for (let l = 0; l < 100; l += (100 / step)) {
                    swatches_arr.push(<Swatch key={"swatch_" + hue + "_" + s + "_" + l} style={{ "--step": step * step } as CSSProperties} hue={hue} saturation={s} lightness={l} />)
                }
            }
        } else if (saturation) {
            for (let l = 0; l < 100; l += (100 / step)) {
                swatches_arr.push(<Swatch key={"swatch_" + hue + "_" + saturation + "_" + l} style={style} hue={hue} saturation={saturation} lightness={l} />)
            }
        } else if (lightness) {
            for (let s = 0; s < 100; s += (100 / step)) {
                swatches_arr.push(<Swatch key={"swatch_" + hue + "_" + s + "_" + lightness} style={style} hue={hue} saturation={s} lightness={lightness} />)
            }
        }
        return swatches_arr;
    };

    return <div className="swatches">
        {_renderSwatches().map((s, i) => { return s; })}
    </div>
};

export default Swatches;