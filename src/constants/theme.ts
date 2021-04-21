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

export const FONTS = {
    navTitle: { fontFamily: "CarmenSans-Thin", fontSize: SIZES.navTitle },
    largeTitleBold: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h2 },
    h1: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "CarmenSans-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "CarmenSans-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "CarmenSans-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "CarmenSans-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "CarmenSans-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "CarmenSans-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;