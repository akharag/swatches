import { CSSProperties, useState } from "react";
import { ColorHSL } from "../../types";

interface SwatchProp {
    color: ColorHSL
    alpha?: number;
    style?: CSSProperties;
    className?: string;
    onClick?: (param: any) => any;
}

const Swatch = ({ color, alpha = 100, style = {}, className = "", onClick }: SwatchProp) => {

    const { hue, saturation, lightness } = color;
    const [hover, setHover] = useState(false);

    const clrStyle = { "--clr": `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})` } as CSSProperties;

    return <button
        style={{ ...style, ...clrStyle }}
        className={`swatch ${className}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => { if (onClick) onClick(color) }}
    >
        {hover && <h3 style={{ color: lightness < 40 ? 'white' : 'black' }}>Click to Save Me</h3>}
    </button>
};

export default Swatch;