import { CSSProperties, useState } from "react";
import { ColorHSL } from "../../types";
import './Slider.css';

interface SliderProps {
    minValue?: number;
    maxValiue?: number;
    initialValue?: number;
    style?: CSSProperties;
    className?: string;
    onChange?: (value: number) => void;
}
export const Slider = ({
    style = {},
    className = '',
    onChange,
    minValue = 0,
    maxValiue = 100,
    initialValue = 50
}: SliderProps) => {
    const [value, setValue] = useState(initialValue);

    const HandleChange = (value: number) => {
        setValue(value);
        if (onChange) onChange(value);
    }

    return <div className='slider'>
        <input
            type='range'
            style={style}
            className={className}
            min={minValue}
            max={maxValiue}
            value={value}
            onChange={(e) => { HandleChange(parseInt(e.target.value)) }}
        />
    </div>
}


interface ColorSliderProps extends SliderProps {
    type: 'saturation' | 'lightness';
    color: ColorHSL;
}

const ColorSlider = ({
    type,
    color,
    style = {},
    className = '',
    onChange,
    minValue = 0,
    maxValiue = 100,
    initialValue = 50
}: ColorSliderProps) => {
    const [sliderStyle, setSliderStyle] = useState<CSSProperties>({
        '--hue': (color.hue),
        '--saturation': `${color.saturation}%`,
        '--lightness': `${color.lightness}%`
    } as CSSProperties);

    const HandleChange = (value: number) => {
        let newStyle = sliderStyle;
        if (type === 'saturation') {
            newStyle = {
                '--hue': color.hue,
                '--saturation': `${value}%`,
                '--lightness': `${color.lightness}%`
            } as CSSProperties;
        }
        if (type === 'lightness') {
            newStyle = {
                '--hue': color.hue,
                '--saturation': `${color.saturation}%`,
                '--lightness': `${value}%`
            } as CSSProperties;
        }
        setSliderStyle(newStyle);
        if (onChange) onChange(value);
    }

    return <Slider style={sliderStyle} className={type} initialValue={initialValue} onChange={HandleChange} />
}

export default ColorSlider;