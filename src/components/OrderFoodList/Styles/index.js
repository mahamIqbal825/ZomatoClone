import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  orderFoodList: {
    width: '100%',
    padding: '12rem',
    marginTop: '19rem',
    flexDirection: 'row',
    alignItems: 'center'
  },
  orderFoodImgStyle: {
    width: '95rem',
    height: '75rem',
    borderBottomRightRadius: '4rem',
    borderBottomLeftRadius: '15rem',
    borderTopLeftRadius: '4rem',
    borderTopRightRadius: '15rem'
  },
  vegNonVegImg: {
    width: '10rem',
    height: '10rem',
    position: 'absolute',
    top: '5rem',
    left: '5rem'
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
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem'
  },
  orderFoodDetails: {
    paddingLeft: '12rem',
    width: '100% - 175rem'
  },
  orderFoodNamePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5rem'
  },
  orderFoodHeadingText: {
    lineHeight: '12rem',
    color: Colors.black,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  orderFoodPriceText: {
    marginLeft: 'auto',
    lineHeight: '12rem',
    color: Colors.green,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  orderFoodParegraphText: {
    color: Colors.lighterGray,
    fontSize: '10rem',
    lineHeight: '10rem',
    marginBottom: '8rem',
    ...Fonts.style.normalText
  },
  addItemDeleteBtns: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addItemRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  minusPluseBtn: {
    width: '20rem',
    height: '20rem',
    borderRadius: '6rem',
    shadowColor: 'rgba(32, 31, 32, 0.05)',
    shadowOffset: {
      width: '1rem',
      height: '2rem'
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addItemPluseMinusImg: {
    width: '8.5rem',
    height: '8.5rem'
  },
  addItemCountText: {
    lineHeight: '12rem',
    color: Colors.black,
    paddingHorizontal: '3rem',
    minWidth: '31rem',
    textAlign: 'center',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  deleteBtn: {
    width: '20rem',
    height: '20rem',
    backgroundColor: Colors.lighterRed,
    borderRadius: '5rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto'
  },
  addItemdeleteImg: {
    width: '12rem',
    height: '12rem'
  }
});

export default styles;
