import FontHelper from '../helpers/FontHelper';
import { Platform } from 'react-native';
// import { Colors } from '../theme';

const size = {
  h1: '36rem',
  h2: '30rem',
  h3: '24rem',
  h4: '18rem',
  regular: '16rem',
  medium: '14rem',
  small: '13rem',
  tiny: '12rem'
};

const style = {
  headerWhite: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '600' : '500'
    })
  },
  placeHolderText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '500' : '400'
    })
  },
  textInputText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '500' : '400'
    })
  },
  buttonText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '700' : '600'
    })
  },
  lightText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: '300'
    })
  },
  normalText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: '400'
    })
  },
  boldText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '700' : '500'
    })
  },
  blackText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: '600'
    })
  },
  extraBoldText: {
    ...FontHelper.font({
      fontFamily: 'SofiaPro',
      fontWeight: Platform.OS === 'ios' ? '700' : '600'
    })
  }
};

export default {
  size,
  style
};
