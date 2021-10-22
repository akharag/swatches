import { createContext } from "react";
import { ColorHSL } from "../types";

export interface ColorTheme {
    primary?: ColorHSL;
    secondary?: ColorHSL;
    tertiary?: ColorHSL;
    accent?: ColorHSL;
    error?: ColorHSL;
    success?: ColorHSL;
}

interface MultiTheme {
    [key: string]: ColorTheme
}

const ThemeContext = createContext<ColorTheme>({
    primary: undefined,
    secondary: undefined,
    tertiary: undefined,
    accent: undefined,
    error: undefined,
    success: undefined
});

export const LightDarkMultiTheme = createContext<MultiTheme>({
    light: {} as ColorTheme,
    dark: {} as ColorTheme
});

export default ThemeContext;