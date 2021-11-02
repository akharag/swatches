import { createContext, useState } from "react";
import { ColorHSL } from "../../types";

export interface ColorTheme {
    primary?: ColorHSL;
    secondary?: ColorHSL;
    tertiary?: ColorHSL;
    accent?: ColorHSL;
    error?: ColorHSL;
    success?: ColorHSL;
    updateTheme?: (
        type: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'error' | 'success',
        color: ColorHSL) => void;
}

interface MultiTheme {
    [key: string]: ColorTheme
}

export const ThemeContext = createContext<ColorTheme>({});

export const LightDarkMultiTheme = createContext<MultiTheme>({
    light: {} as ColorTheme,
    dark: {} as ColorTheme
});

const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState({});

    const updateTheme = (type: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'error' | 'success', color: ColorHSL) => {
        setTheme({ ...theme, [type]: color })
    }

    return (
        <ThemeContext.Provider value={{ ...theme, updateTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;