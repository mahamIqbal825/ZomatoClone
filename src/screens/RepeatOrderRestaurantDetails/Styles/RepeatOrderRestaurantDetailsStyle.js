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
  previousOrderListRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '-8rem',
    marginBottom: '12rem',
    paddingBottom: '15rem',
    borderBottomWidth: '1rem',
    borderColor: Colors.lighterBlack
  },
  previousOrderImgStyle: {
    width: '96rem',
    height: '96rem',
    marginBottom: '27rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  previousOrderBgGradiant: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: '48rem',
    borderRadius: '16rem'
  },
  previousOrderHeadingText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.black,
    marginBottom: '4rem',
    ...Fonts.style.blackText
  },
  previousOrderParegraphText: {
    color: Colors.lighterGray,
    lineHeight: '12rem',
    marginBottom: '9rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  previousOrderPriceItemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  previousOrderPriceText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.green,
    ...Fonts.style.blackText
  },
  previousOrderTotalItemText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.green,
    marginLeft: 'auto',
    ...Fonts.style.blackText
  },
  previousOrderList: {
    width: '50% - 36rem',
    paddingHorizontal: '13rem',
    paddingBottom: '18rem',
    marginHorizontal: '8rem'
  },
  totalPriceAddItemBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '35rem'
  },
  addItemBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingTop: '6rem',
    paddingBottom: '4rem',
    paddingLeft: '11rem',
    paddingRight: '7.39rem',
    borderRadius: '5rem',
    backgroundColor: Colors.btnLighterGreen
  },
  totalPriceText: {
    lineHeight: '12rem',
    color: Colors.green,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  addItemBtnText: {
    lineHeight: '12rem',
    color: Colors.black,
    marginRight: '10.36rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  addItemBtnImg: {
    width: '9rem',
    height: '9rem'
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
  }
});

export default styles;
