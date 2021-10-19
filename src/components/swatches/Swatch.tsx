import { CSSProperties } from "react";

interface SwatchProp {
    hue: number;
    saturation: number;
    lightness: number;
    alpha?: number;
    style?: CSSProperties;
}

const Swatch = ({ hue, saturation, lightness, alpha = 100, style }: SwatchProp) => {

    const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    const clrStyle = { "--clr": color } as CSSProperties;

    return <div style={{ ...style, ...clrStyle }} className="swatch">
    </div>
};

export default Swatch;