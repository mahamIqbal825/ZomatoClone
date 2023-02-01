import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Fonts } from '../../../theme';

const styles = EStyleSheet.create({
  conatinerStyle: {
    backgroundColor: Colors.white
  },
  container: {
    paddingHorizontal: '-28rem',
    backgroundColor: Colors.white,
    paddingTop: '7rem'
  },
  customContainer: {
    paddingHorizontal: '28rem'
  },
  foodCoverImg: {
    width: '100%',
    height: '228rem',
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '24rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '24rem'
  },
  foodRoundCoverImg: {
    width: '228rem',
    height: '228rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderWidth: '1rem',
    borderRadius: '500rem',
    padding: '6rem',
    borderColor: Colors.lightBlack
  },
  foodCoverImgTwo: {
    width: '100%',
    height: '100%'
  },
  photoDetaileBottomContent: {
    marginTop: '28rem',
    borderTopLeftRadius: '24rem',
    borderTopRightRadius: '24rem',
    paddingVertical: '28rem'
  },
  bgGradiant: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: '24rem',
    borderTopRightRadius: '24rem'
  },
  reatingStarVegNonVegImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '12rem'
  },
  ratingStarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: '100rem',
    paddingHorizontal: '8rem',
    paddingTop: '9rem',
    paddingBottom: '7rem'
  },
  ratingStarText: {
    lineHeight: '12rem',
    marginRight: '4rem',
    color: Colors.black,
    fontSize: Fonts.size.tiny,
    ...Fonts.style.blackText
  },
  ratingStarImg: {
    width: '10rem',
    height: '10rem'
  },
  ratingStarReview: {
    fontSize: '8rem',
    lineHeight: '8rem',
    marginLeft: '2rem',
    color: Colors.lightBlack,
    ...Fonts.style.normalText
  },
  vegNonVegImg: {
    width: '12rem',
    height: '12rem',
    marginLeft: 'auto'
  },
  photoDetaileHeading: {
    lineHeight: '24rem',
    color: Colors.green,
    marginBottom: '6rem',
    fontSize: Fonts.size.h3,
    ...Fonts.style.blackText
  },
  photoDetaileToppingText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.lightBlack,
    marginBottom: '12rem',
    ...Fonts.style.normalText
  },
  photoDetailePriceText: {
    lineHeight: '24rem',
    color: Colors.green,
    marginBottom: '12rem',
    fontSize: Fonts.size.regular,
    ...Fonts.style.extraBoldText
  },
  quantityContent: {
    marginVertical: '28rem'
  },
  quantityCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '6rem'
  },
  quantityCountHeading: {
    lineHeight: '18rem',
    color: Colors.black,
    fontSize: Fonts.size.h4,
    ...Fonts.style.extraBoldText
  },
  quantityCountNumberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  minusPluseBtn: {
    width: '24rem',
    height: '24rem',
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
  quantityCountPluseMinusImg: {
    width: '8.5rem',
    height: '8.5rem'
  },
  quantityCountText: {
    lineHeight: '20rem',
    letterSpacing: '-0.4rem',
    color: Colors.black,
    paddingHorizontal: '3rem',
    minWidth: '31rem',
    textAlign: 'center',
    fontSize: Fonts.size.h4,
    ...Fonts.style.extraBoldText
  },
  quantityCountParagraph: {
    color: Colors.lightBlack,
    lineHeight: '14rem',
    marginBottom: '19rem',
    fontSize: Fonts.size.medium,
    ...Fonts.style.normalText
  },
  quantityFoodList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '9rem'
  },
  quantityFoodText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.lightBlack,
    ...Fonts.style.normalText
  },
  quantityFoodExtraPriceText: {
    fontSize: '15rem',
    lineHeight: '15rem',
    color: Colors.lightBlack,
    marginLeft: 'auto',
    ...Fonts.style.normalText
  },
  radioBtnOutSide: {
    marginLeft: '17rem',
    width: '15rem',
    height: '15rem',
    borderWidth: '1.5rem',
    borderColor: Colors.green,
    borderRadius: '20rem'
  },
  radioBtnInSideActive: {
    width: '7rem',
    height: '7rem',
    borderRadius: '20rem',
    backgroundColor: Colors.green,
    position: 'absolute',
    right: '4rem'
  }
});

export default styles;
