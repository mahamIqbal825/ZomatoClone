import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  orderList: {
    width: '100%',
    paddingLeft: '18rem',
    paddingRight: '10rem',
    paddingVertical: '18rem',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '19rem'
  },
  orderLastList: {
    width: '100%',
    paddingLeft: '18rem',
    paddingRight: '10rem',
    paddingVertical: '18rem',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0
  },
  orderFoodImgStyle: {
    width: '89rem',
    height: '89rem',
    borderBottomRightRadius: '4rem',
    borderBottomLeftRadius: '15rem',
    borderTopLeftRadius: '4rem',
    borderTopRightRadius: '15rem'
  },
  orderFoodSliderImgStyle: {
    width: '196rem',
    height: '100rem',
    marginBottom: '12rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem',
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '24rem'
  },
  orderFoodBgGradiant: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '24rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem'
  },
  orderDateItemPriceText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8rem'
  },
  orderDateItemText: {
    lineHeight: '12rem',
    color: Colors.lighterGray,
    marginRight: '10rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  orderFoodHeadingText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.black,
    marginBottom: '8rem',
    ...Fonts.style.blackText
  },
  orderFoodParegraphText: {
    color: Colors.lightBlack,
    lineHeight: '12rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  },
  orderFoodPriceText: {
    lineHeight: '12rem',
    color: Colors.green,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  vegNonVegImg: {
    width: '12rem',
    height: '12rem',
    position: 'absolute',
    left: '28rem',
    top: '28rem'
  },
  orderRightText: {
    paddingLeft: '12rem',
    width: '100% - 173rem'
  },
  orderFoodStatusBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8rem'
  },
  reOrderBtn: {
    paddingVertical: '5rem',
    paddingHorizontal: '10rem',
    borderRadius: '5rem',
    backgroundColor: Colors.green,
    marginLeft: 'auto'
  },
  reOrderBtnText: {
    color: Colors.white,
    lineHeight: '12rem',
    letterSpacing: '0.08rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  orderStatusShap: {
    width: '9rem',
    height: '9rem',
    borderRadius: '9rem',
    backgroundColor: Colors.parrotGreen,
    marginRight: '5.24rem'
  },
  orderStatusText: {
    lineHeight: '14rem',
    color: Colors.parrotGreen,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.normalText
  }
});

export default styles;
