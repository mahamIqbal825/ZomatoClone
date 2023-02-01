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
    paddingTop: '42rem',
    paddingBottom: '15rem',
    paddingHorizontal: '28rem',
    backgroundColor: Colors.white,
    '@media ios': {
      minHeight: isIphoneX()
        ? windowHeight - statusBarHeight - 100
        : windowHeight - statusBarHeight - 55
    },
    '@media android': {
      minHeight: windowHeight - statusBarHeight - 55
    }
  },
  ratinglogo: {
    width: '206rem',
    height: '100rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '42rem'
  },
  ratingTitleText: {
    lineHeight: '18rem',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: '27rem',
    fontSize: Fonts.size.h4,
    ...Fonts.style.blackText
  },
  ratingTypeText: {
    fontSize: '22rem',
    lineHeight: '22rem',
    color: Colors.green,
    textAlign: 'center',
    marginBottom: '14rem',
    ...Fonts.style.normalText
  },
  ratingStarContent: {
    marginBottom: '28rem'
  },
  reviewInputStyle: {
    borderWidth: '1rem',
    borderColor: Colors.green,
    borderRadius: '10rem',
    height: '168rem',
    paddingHorizontal: '16rem',
    paddingTop: '16rem',
    paddingBottom: '16rem',
    lineHeight: '16rem',
    color: Colors.black,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText,
    textAlignVertical: 'top',
    marginBottom: '15rem'
  },
  reviewSubmitBtn: {
    marginTop: 'auto'
  }
});

export default styles;
