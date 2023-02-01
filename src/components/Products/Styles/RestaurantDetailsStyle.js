import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: '-28rem'
    // paddingBottom: '50rem'
  },
  customContainer: {
    paddingHorizontal: '28rem'
  },
  searchRowStyle: {
    marginTop: '19rem'
  },
  searchInputStyle: {
    backgroundColor: Colors.lightGreen,
    color: Colors.green
  },
  switchMenuBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '35rem'
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '19rem'
  },
  switchText: {
    lineHeight: '14rem',
    color: Colors.lightBlack,
    marginRight: '6rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  switchBtn: {
    width: '20rem',
    height: '15rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  vegSwitchBackLine: {
    width: '13rem',
    height: '6rem',
    borderRadius: '7rem',
    backgroundColor: Colors.green,
    opacity: 0.3
  },
  vegSwitchHandalOff: {
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
    backgroundColor: Colors.green,
    position: 'absolute',
    top: '2.5rem',
    left: '-2rem'
  },
  vegSwitchHandalOn: {
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
    backgroundColor: Colors.green,
    position: 'absolute',
    top: '2.5rem',
    right: '-2rem'
  },
  nonVegSwitchBackLine: {
    width: '13rem',
    height: '6rem',
    borderRadius: '7rem',
    backgroundColor: Colors.darkRed,
    opacity: 0.3
  },
  nonVegSwitchHandalOff: {
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
    backgroundColor: Colors.darkRed,
    position: 'absolute',
    top: '2.5rem',
    left: '-2rem'
  },
  nonVegSwitchHandalOn: {
    width: '10rem',
    height: '10rem',
    borderRadius: '10rem',
    backgroundColor: Colors.darkRed,
    position: 'absolute',
    top: '2.5rem',
    right: '-2rem'
  },
  menuBtn: {
    backgroundColor: Colors.btnLighterGreen,
    paddingLeft: '9rem',
    paddingTop: '5.2rem',
    paddingRight: '11rem',
    paddingBottom: '4rem',
    borderRadius: '5rem',
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuBtnImg: {
    width: '15rem',
    height: '10.58rem',
    marginRight: '5rem'
  },
  menuBtnText: {
    lineHeight: '12rem',
    letterSpacing: '-0.02rem',
    color: Colors.green,
    textTransform: 'uppercase',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  recommendedSliderHeading: {
    marginTop: '35rem'
  },
  addCartBottomList: {
    marginTop: '11rem'
  },
  absolute: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  bottomSheetBgGradiant: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  },
  bottomSheetContainer: {
    paddingHorizontal: '28rem',
    marginTop: '27rem'
  },
  menuHeading: {
    lineHeight: '24rem',
    color: Colors.green,
    marginBottom: '28rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '19rem'
  },
  menuItemName: {
    lineHeight: '18rem',
    color: Colors.lightBlack,
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  menuItemRightText: {
    lineHeight: '18rem',
    color: Colors.lightBlack,
    marginLeft: 'auto',
    fontSize: Fonts.size.h4,
    ...Fonts.style.normalText
  },
  checkBoxLineIcon: {
    width: '16.65rem',
    height: '16.65rem',
    marginLeft: 'auto'
  }
});

export default styles;
