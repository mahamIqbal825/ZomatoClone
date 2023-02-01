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
    paddingBottom: '15rem',
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
  deliveryAddressContent: {
    paddingVertical: '16rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterGreen
  },
  addressTypeDeleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8rem'
  },
  addressImg: {
    width: '20rem',
    height: '20rem',
    marginRight: '18rem'
  },
  addressTypeText: {
    lineHeight: '14rem',
    color: Colors.black,
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  addressDeleteText: {
    marginLeft: 'auto',
    fontSize: '10rem',
    lineHeight: '10rem',
    color: Colors.red,
    textTransform: 'uppercase',
    ...Fonts.style.blackText
  },
  addressText: {
    lineHeight: '18rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  addressList: {
    marginBottom: 'auto'
  },
  addAddressList: {
    marginBottom: 'auto'
  },
  addAddressBtn: {
    marginTop: '15rem'
  }
});

export default styles;
