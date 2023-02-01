/**
 * Helper class for font
 */
import _ from 'lodash';
import { Platform } from 'react-native';

// use post script names for font families
// const Roboto: any = {
//   '100': { fontFamily: 'Roboto-Thin' },
//   '100italic': { fontFamily: 'Roboto-ThinItalic' },
//   '200': { fontFamily: 'Roboto-Light' },
//   '200italic': { fontFamily: 'Roboto-LightItalic' },
//   '300': { fontFamily: 'Roboto-Regular' },
//   '300italic': { fontFamily: 'Roboto-Italic' },
//   '400': { fontFamily: 'Roboto-Medium' },
//   '400italic': { fontFamily: 'Roboto-MediumItalic' },
//   '500': { fontFamily: 'Roboto-Bold' },
//   '500italic': { fontFamily: 'Roboto-BoldItalic' },
//   '600': { fontFamily: 'Roboto-Black' },
//   '600italic': { fontFamily: 'Roboto-BlackItalic' },
//   '700': { fontFamily: 'Roboto-Black' },
//   '700italic': { fontFamily: 'Roboto-BlackItalic' }
// };

const SofiaPro = {
  100: {
    fontFamily: 'SofiaPro-ExtraLight'
  },
  200: {
    fontFamily:
      Platform.OS === 'ios' ? 'SofiaPro-UltraLight' : 'SofiaPro-UltraLight'
  },
  300: {
    fontFamily: Platform.OS === 'ios' ? 'SofiaPro-Light' : 'SofiaPro-Light'
  },
  400: {
    fontFamily: 'SofiaPro'
  },
  500: {
    fontFamily: Platform.OS === 'ios' ? 'SofiaPro-Medium' : 'SofiaPro-SemiBold'
  },
  600: {
    fontFamily: Platform.OS === 'ios' ? 'SofiaPro-SemiBold' : 'SofiaPro-Bold'
  },
  700: {
    fontFamily: Platform.OS === 'ios' ? 'SofiaPro-Bold' : 'SofiaPro-Black'
  }
};

const FONTS = {
  // Roboto,
  SofiaPro
};

/**
 * Helper class for cross-platform font styles
 */
class FontHelper {
  static font(fontParams) {
    const fontFamily = fontParams.fontFamily || 'SofiaPro';
    const fontWeight = fontParams.fontWeight || '400';
    const fontStyle = fontParams.fontStyle || '';

    return {
      ..._.omit(fontParams, [fontFamily, fontFamily, fontStyle]),
      ...FONTS[fontFamily][fontWeight + fontStyle]
    };
  }
}

export default FontHelper;
