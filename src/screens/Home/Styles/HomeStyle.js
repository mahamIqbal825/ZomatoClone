import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';
import { isIphoneX } from '../../../libs/Utils';
import { stylesheet } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: '-28rem',
    paddingBottom: isIphoneX() ? '90rem' : '120rem'
  },
  customContainer: {
    paddingHorizontal: '20rem'
  },
  appNameText: {
    lineHeight: '45rem',
    color: Colors.green,
    fontSize: Fonts.size.h2,
    ...Fonts.style.extraBoldText
  },
  deliveryText: {
    color: Colors.yellow
  },
  appNameDrawerIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5rem'
  },
  drawerIconBtn: {
    width: '15rem',
    height: '15rem',
    marginLeft: 'auto'
  },
  drawerIcon: {
    width: '100%',
    height: '100%'
  },
  recommandedFoodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '35rem',
    marginLeft: '-20rem',
    paddingLeft: '20rem'
  },
  repeatOrderListRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '35rem'
  },
  dropDownStyle: {
    marginBottom: '17rem',
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    paddingLeft: '20rem',
    height: '13rem'
  },
  listItemLabelStyle: {
    padding: 0
  },
  placeholderStyle: {
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  textStyle: {
    color: Colors.green,
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  dropDownContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    zIndex: 999999
  },
  dropdownLocationIcon: {
    width: '10rem',
    height: '10rem',
    position: 'absolute',
    left: 0,
    top: 0
  },
  dropDownArrowIcon: {
    width: '10rem',
    height: '8rem'
  },
  offerSliderStyle: {
    marginBottom: '28rem'
  }
});

export default styles;
