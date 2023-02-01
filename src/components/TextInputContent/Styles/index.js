import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';


const styles = EStyleSheet.create({
  textInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '33rem',
    // '@media ios': {
    //   marginBottom: '33rem'
    // },
    '@media android and (max-height: 592)': {
      marginBottom: '15rem'
    },
    // '@media android and (max-width: 360)': {
    //   marginBottom: '33rem'
    // }
  },
  textInputLeftIcon: {
    width: '23rem',
    height: '23rem'
  },
  allInputStyle: {
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack,
    paddingBottom: '10rem',
    paddingTop: '5rem',
    width: '100% - 95rem',
    marginLeft: '16rem',
    lineHeight: '16rem',
    color: Colors.black,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  passwordInputStyle: {
    paddingRight: '40rem'
  },
  passwordEyeImgBtn: {
    position: 'absolute',
    bottom: '13.79rem',
    right: '12.75rem'
  },
  passwordEyeImg: {
    width: '18.5rem',
    height: '17.25rem'
  }
});

export default styles;
