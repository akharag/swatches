import { useEffect, useState } from "react";
import "./Picker.css";
import { NUM_SWATCHES, STEP } from "../../globalConstants";
import Swatches from "../Swatches/Swatches";
import { ColorHSL } from "../../types";

interface PickerProps {
    header?: string;
    SaveColor?: (color: ColorHSL) => void;
}

const Picker = ({ header, SaveColor }: PickerProps) => {
    const [hueArr, setHueArray] = useState<number[]>([]);

    const GenerateColor = (arr: number[]) => {
        const hue = Math.floor(Math.random() * 239);
        arr.push(hue);
    }

    const GenerateColors = () => {
        const arr: number[] = [];
        while (arr.length < NUM_SWATCHES) {
            GenerateColor(arr);
        }
        setHueArray([...arr]);
    };

    useEffect(() => {
        GenerateColors();
    }, [])

    return <div className="picker">
        {header && <h2>{header}</h2>}
        <div className="swatches-container">
            {hueArr.map((h, i) =>
                <Swatches
                    key={'color' + i}
                    hue={h}
                    saturation={100}
                    step={STEP}
                    SaveColor={SaveColor}
                />)}
        </div>
        <button onClick={GenerateColors}>ReGenerate</button>
    </div>
}

export default Picker;