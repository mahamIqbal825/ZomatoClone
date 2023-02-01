import EStyleSheet from 'react-native-extended-stylesheet';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';
import { isIphoneX } from '../../../libs/Utils';
import { Colors, Fonts } from '../../../theme';

const windowHeight = Dimensions.get('window').height;
const statusBarHeight = getStatusBarHeight();

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  successContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: '28rem',
    paddingBottom: '15rem',
    '@media ios': {
      minHeight: isIphoneX()
        ? windowHeight - statusBarHeight - 40
        : windowHeight - statusBarHeight
    },
    '@media android': {
      minHeight: windowHeight - statusBarHeight - 55
    }
  },
  successContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  successText: {
    textAlign: 'center',
    lineHeight: '24rem',
    marginTop: '42rem',
    marginBottom: '15rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText,
    color: Colors.black
  },
  successIcon: {
    width: '185rem',
    height: '165rem'
  },
  successParegraph: {
    fontSize: '15rem',
    lineHeight: '22.85rem',
    letterSpacing: '-0.01rem',
    color: Colors.black,
    textAlign: 'center',
    ...Fonts.style.normalText
  }
});

export default styles;
