import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  addCartFoodImgStyle: {
    width: '128rem',
    height: '100rem',
    marginBottom: '12rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem',
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '24rem'
  },
  addCartFoodSliderImgStyle: {
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
  addCartFoodBgGradiant: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: '50rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem'
  },
  addCartFoodHeadingText: {
    lineHeight: '12rem',
    color: Colors.black,
    marginBottom: '4rem',
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  addCartFoodParegraphText: {
    color: Colors.lighterGray,
    fontSize: '10rem',
    lineHeight: '10rem',
    ...Fonts.style.normalText
  },
  addCartFoodPriceText: {
    lineHeight: '12rem',
    color: Colors.green,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  addCartFoodList: {
    width: '50% - 32rem',
    paddingLeft: '13rem',
    paddingRight: '14rem',
    paddingBottom: '18rem',
    marginHorizontal: '7.5rem',
    marginTop: '24rem'
  },
  addCartFoodSlider: {
    width: '230rem',
    paddingLeft: '13rem',
    paddingRight: '14rem',
    paddingBottom: '18rem',
    marginHorizontal: '7.5rem',
    marginTop: '24rem'
  },
  addCartFoodPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '9rem'
  },
  addCartFoodSliderPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '17rem'
  },
  addCartAddBtn: {
    backgroundColor: Colors.white,
    borderRadius: '5rem',
    paddingTop: '6rem',
    paddingBottom: '4rem',
    paddingLeft: '11rem',
    paddingRight: '7.39rem',
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  addCartFoodAddText: {
    lineHeight: '12rem',
    color: Colors.black,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  addCartPluseImg: {
    width: '9.25rem',
    height: '9.25rem',
    marginLeft: '10.36rem'
  },
  restaurantDetailFoodlList: {
    marginTop: '-24rem',
    marginHorizontal: '-7.5rem'
  },
  vegNonVegImg: {
    width: '13rem',
    height: '13rem',
    position: 'absolute',
    right: '24rem',
    top: '12rem'
  },
  vegNonVegSliderImg: {
    width: '13rem',
    height: '13rem',
    position: 'absolute',
    right: '29rem',
    top: '12rem'
  },
  likeBtn: {
    width: '22rem',
    height: '22rem',
    borderRadius: '50rem',
    backgroundColor: Colors.green,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.green,
    shadowOffset: {
      width: 0,
      height: '7rem'
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 15
  },
  likeBtnImg: {
    width: '10.94rem',
    height: '10rem'
  }
});

export default styles;
