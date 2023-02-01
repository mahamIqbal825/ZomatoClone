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
  container: {
    paddingVertical: '15rem',
    paddingHorizontal: '28rem',
    backgroundColor: Colors.white,
    '@media ios': {
      minHeight: isIphoneX()
        ? windowHeight - statusBarHeight - 100
        : windowHeight - statusBarHeight - 55
    },
    '@media android': {
      minHeight: windowHeight - statusBarHeight - 100
    }
  },
  helpFaqList: {
    paddingBottom: '10rem',
    paddingTop: '4rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack,
    marginBottom: '19rem'
  },
  helpFaqIconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '7rem'
  },
  helpFaqName: {
    lineHeight: '16rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  },
  bottomArrowIcon: {
    width: '9rem',
    height: '12rem',
    marginLeft: 'auto'
  },
  helpFaqDiscription: {
    lineHeight: '18rem',
    color: Colors.lightBlack,
    marginTop: '10rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  }
});

export default styles;
