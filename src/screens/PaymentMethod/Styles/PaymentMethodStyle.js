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
    paddingHorizontal: '28rem',
    paddingTop: '7rem',
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
  paymentListRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '33rem'
  },
  paymentIcon: {
    width: '23rem',
    height: '23rem',
    marginRight: '16rem'
  },
  paymentListName: {
    borderBottomWidth: '1rem',
    borderColor: Colors.lightBlack,
    width: '100% - 95rem'
  },
  paymentListText: {
    paddingBottom: '10rem',
    lineHeight: '16rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.regular,
    ...Fonts.style.normalText
  }
});

export default styles;
