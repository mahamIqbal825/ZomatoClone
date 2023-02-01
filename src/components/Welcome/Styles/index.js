import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  welcomeScreenImages: {
    width: '300rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media ios': {
      height: isIphoneX() ? '390rem' : '360rem'
    },
    '@media android': {
      height: '390rem'
    },
    '@media android and (max-height: 592)': {
      height: windowHeight / 2
    }
    // backgroundColor: '#000'
  },
  welcomeScreenHeading: {
    textAlign: 'center',
    width: '100%',
    color: Colors.black,
    lineHeight: '24rem',
    '@media ios': {
      // marginTop: isIphoneX() ? '46rem' : '30rem',
      // marginBottom: isIphoneX() ? '52rem' : '20rem',
      marginTop: isIphoneX() ? '40rem' : '30rem',
      marginBottom: isIphoneX() ? '50rem' : '20rem',
      ...Fonts.style.blackText
    },
    '@media android': {
      marginTop: '46rem',
      marginBottom: '52rem',
      ...Fonts.style.extraBoldText
    },
    '@media android and (max-height: 592)': {
      marginBottom: '20rem',
      marginTop: '20rem'
    },
    fontSize: Fonts.size.h3
  }
});

export default styles;
