import { CSSProperties } from "react";
import { ColorHSL } from "../../types";

interface SavedColorsProps {
    color: ColorHSL;
    onClick: () => void;
}

const SavedColors = ({ color, onClick }: SavedColorsProps) => {

    const style = { "--clr": `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)` } as CSSProperties;

    return <button style={style} onClick={onClick}></button>
}

export default SavedColors;