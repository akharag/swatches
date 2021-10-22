import { CSSProperties } from "react";
import { ColorHSL } from "../../types";
import Swatch from "./Swatch";
import "./Swatches.css";

export interface SwatchesProps {
    hue: number;
    saturation?: number;
    lightness?: number;
    step?: number;
    SaveColor?: (color: ColorHSL) => void;
}

const Swatches = ({ hue, saturation, lightness, step = 10, SaveColor }: SwatchesProps) => {

    const HandleClick = (color: ColorHSL) => {
        if (SaveColor) SaveColor(color);
    }

    const _renderSwatches = () => {
        const colors: ColorHSL[] = [];
        const swatches_arr: JSX.Element[] = [];

        if (!saturation && !lightness) {
            for (let s = (100 / step); s < 100; s += (100 / step)) {
                for (let l = 0; l < 100; l += (100 / step)) {
                    colors.push({ hue: hue, saturation: s, lightness: l });
                }
            }
        } else if (saturation) {
            for (let l = (100 / step); l < 100; l += (100 / step)) {
                colors.push({ hue: hue, saturation: saturation, lightness: l });
            }
        } else if (lightness) {
            for (let s = (100 / step); s < 100; s += (100 / step)) {
                colors.push({ hue: hue, saturation: s, lightness: lightness });
            }
        }
        colors.forEach(c => {
            swatches_arr.push(
                <Swatch
                    key={"swatch_" + c.hue + "_" + c.saturation + "_" + c.lightness}
                    style={{ "--step": step * step } as CSSProperties}
                    color={{ hue: c.hue, saturation: c.saturation, lightness: c.lightness }}
                    onClick={HandleClick}
                >Test</Swatch>)
        })
        return swatches_arr;
    };

    return <div className="swatches">
        <h2>Hue:<br />{hue}</h2>
        {_renderSwatches().map((s, i) => { return s; })}
    </div>
};

export default Swatches;