import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';
import { isIphoneX } from '../../../libs/Utils';
import { Colors, Fonts } from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = getStatusBarHeight();

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '28rem'
    // minHeight: windowHeight - statusBarHeight * 2
  },
  logo: {
    width: '206rem',
    height: '100rem',
    alignSelf: 'center',
    marginBottom: '25rem',
    '@media ios': {
      marginTop: isIphoneX() ? 128 - statusBarHeight : 70 - statusBarHeight
    },
    '@media android': {
      marginTop: 128 - statusBarHeight
    },
    '@media android and (max-height: 592)': {
      marginTop: 60 - statusBarHeight
    }
  },
  bgFoodIcon: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute'
  },
  bgGradiant: {
    flex: 1,
    position: 'absolute',
    width: windowWidth,
    height: windowHeight
  },
  inputContainer: {
    marginTop: 'auto',
    paddingBottom: '15rem'
  },
  heading: {
    fontSize: Fonts.size.h1,
    lineHeight: '36rem',
    color: Colors.black,
    '@media ios': {
      ...Fonts.style.blackText,
      marginBottom: '42rem'
    },
    '@media android': {
      ...Fonts.style.extraBoldText,
      marginBottom: '42rem'
    },
    '@media android and (max-height: 592)': {
      marginBottom: '20rem'
    }
  },
  inputContent: {
    marginBottom: '-8rem',
    '@media android and (max-height: 592)': {
      marginBottom: 0
    }
  },
  peragraph: {
    lineHeight: '20rem',
    color: Colors.black,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  greenText: {
    color: Colors.green
  },
  signUpStartBtn: {
    marginTop: '31rem',
    '@media android and (max-height: 592)': {
      marginTop: '15rem'
    }
  },
  signUpLoginBottomText: {
    lineHeight: '19rem',
    color: Colors.lightBlack,
    textAlign: 'center',
    marginTop: '31rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText,
    '@media android and (max-height: 592)': {
      marginTop: '15rem'
    }
  },
  forgotPasswordText: {
    width: '120rem',
    marginLeft: 'auto',
    textAlign: 'right',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  loginPasswordInput: {
    marginBottom: '25rem',
    '@media android and (max-height: 592)': {
      marginBottom: '12rem'
    }
  },
  orTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '22rem',
    '@media android and (max-height: 592)': {
      marginVertical: '15rem'
    }
  },
  orTextRowLine: {
    flex: 1,
    backgroundColor: Colors.gray,
    height: '1rem'
  },
  orText: {
    marginLeft: '12rem',
    marginRight: '13rem',
    color: Colors.lightBlack,
    lineHeight: '14rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  loginGoogleBtn: {
    backgroundColor: Colors.lighterGreen,
    '@media android': {
      padding: '17rem'
    },
    '@media android and (max-height: 592)': {
      padding: '14rem'
    }
  },
  loginGoogleTextBtn: {
    color: Colors.green
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '31rem'
  },
  otpInputStyle: {
    width: '45rem',
    height: '27rem',
    borderBottomWidth: '1rem',
    textAlign: 'center',
    color: Colors.lightBlack,
    borderColor: Colors.green,
    paddingBottom: '10rem',
    paddingTop: 0,
    lineHeight: '16rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  otpPeragraph: {
    lineHeight: '20rem',
    color: Colors.black,
    marginBottom: '33rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  successText: {
    textAlign: 'center',
    lineHeight: '24rem',
    marginTop: '42rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText,
    color: Colors.black
  },
  successIcon: {
    width: '185rem',
    height: '165rem'
  },
  resetPasswordInput: {
    marginBottom: '31rem'
  }
});

export default styles;
