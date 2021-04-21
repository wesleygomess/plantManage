import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    green: '#32B768',
    green_dark: '#2B7A4B',
    green_light: '#DAF2E4',
  
    heading: '#52665A',
    body_dark: '#738078',
    body_light: '#AAB2AD',
  
    background: '#FFFFFF',
    shape: '#F0F0F0',
    white: '#FFFFFF',
    gray: '#CFCFCF',
  
    blue: '#3D7199',
    blue_light: '#EBF6FF',
  
    red: '#E83F5B',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    navTitle: 25,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};



const appTheme = { COLORS, SIZES};

export default appTheme;