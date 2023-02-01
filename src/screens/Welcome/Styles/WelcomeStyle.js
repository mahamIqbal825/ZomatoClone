import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
// import { Dimensions } from 'react-native';

// const windowHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: '28rem',
    '@media ios': {
      flex: isIphoneX() ? 1 : 0
    }
  },
  skipBtnText: {
    color: Colors.yellow,
    fontSize: '15rem',
    letterSpacing: '0.08rem',
    lineHeight: '15rem',
    '@media ios': {
      ...Fonts.style.blackText
    },
    '@media android': {
      ...Fonts.style.extraBoldText
    }
  },
  nextStartBtnText: {
    paddingHorizontal: '33rem',
    paddingVertical: '17rem',
    textAlign: 'center',
    color: Colors.white,
    fontSize: '15rem',
    letterSpacing: '0.08rem',
    lineHeight: '15rem',
    '@media ios': {
      ...Fonts.style.blackText
    },
    '@media android': {
      ...Fonts.style.extraBoldText
    }
  },
  nextStartBtn: {
    backgroundColor: Colors.green,
    borderRadius: '13rem',
    marginLeft: 'auto'
  },
  nextStartFullBtn: {
    width: '100%',
    backgroundColor: Colors.green,
    borderRadius: '13rem'
  },
  welcomeBottomBtn: {
    flexDirection: 'row',
    marginBottom: '20rem',
    alignItems: 'center',
    '@media ios': {
      marginTop: isIphoneX() ? '31rem' : '25rem'
    },
    '@media android': {
      marginTop: '31rem'
    },
    '@media android and (max-height: 592)': {
      marginTop: '10rem'
    }
  },
  paginationInActiveDot: {
    width: '9rem',
    height: '9rem',
    borderRadius: '5rem',
    backgroundColor: Colors.green
  },
  paginationActiveDot: {
    width: '33rem',
    height: '9rem',
    borderRadius: '5rem',
    backgroundColor: Colors.green
  },
  dotContainerStyle: {
    marginHorizontal: '3rem',
    marginVertical: '-2rem'
  },
  carouselSliderPagination: {
    '@media ios': {
      marginVertical: isIphoneX() ? 0 : '-15rem'
    }
  },
  welcomePeragraph: {
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText,
    lineHeight: '20rem',
    opacity: 0.5,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 'auto'
  },
  '@media android and (max-height: 592)': {
    welcomePeragraph: {
      marginTop: '-22rem'
    },
    welcomeBottomBtn: {
      marginBottom: '10rem'
    }
  }
});

export default styles;
